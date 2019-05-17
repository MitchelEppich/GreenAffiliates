const next = require("next");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { execute, subscribe } = require("graphql");
const fs = require("fs");
const http = require("http");
const https = require("https");
const { SubscriptionServer } = require("subscriptions-transport-ws");

require("dotenv").config();

// our packages
const schema = require("./data/schema");

// next.js setup
const port = process.env.PORT || -1;
const url = process.env.URL || "FAILED";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const endpointURL = "/graphql";
const endpointIRL = "/graphiql";
const subscriptionsPath = "/subscriptions";

const subscriptionsEndpoint = `wss://localhost:${port}${subscriptionsPath}`;

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   process.env.M_URL,
//   { useNewUrlParser: true }
// );
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "Connection error:"));
// db.once("open", () => console.log("We are connected!"));

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());

    server.use(
      "/static",
      express.static(__dirname + "/static", {
        maxAge: "365d"
      })
    );

    server.use(
      cors({
        allowedHeaders: ["Content-Type"],
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false
      })
    );

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(
      "/graphql",
      bodyParser.json(),
      graphqlExpress((req, res) => {
        return {
          schema,
          context: {
            token: req.headers.authorization
              ? req.headers.authorization.substring("Bearer ".length)
              : ""
          }
        };
      })
    );
    if (process.env.NODE_ENV === "development") {
      server.use(
        "/graphiql",
        graphiqlExpress({
          endpointURL: "/graphql",
          subscriptionsEndpoint: subscriptionsEndpoint
        })
      );
    }

    // Robots.txt
    server.get("/robots.txt", (req, res) => {
      res.sendFile(__dirname + "/robots.txt");
    });

    // HTTPS Server
    // const wss = https2.createServer(credentials, server);
    const ws = http.createServer(server);
    ws.listen(port, () => {
      // remove url before deploying!!
      console.log(`Apollo Server is now running on http://${url}:${port}`);
      // Set up the WebSocket for handling GraphQL subscriptions
      new SubscriptionServer(
        {
          execute,
          subscribe,
          schema
        },
        {
          server: ws,
          path: "/subscriptions"
        }
      );
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
