const mongoose = require("mongoose");

const resolvers = {
  Query: {
    sendMessage: (_, message) => {
      return message;
    },
    sendData: (_, { input }) => {
      return input.name;
    }
  },
  // User,
  // Subscription: {},
  Mutation: {
    sendEmail: async (_, { input }) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "",
          pass: ""
        }
      });

      // let mailOptions;
      // switch (input.type) {
      //   case "welcome":
      //     mailOptions = emailTemplates.welcome({
      //       ...input,
      //       username: (await UserResolvers.Query.user(_, {
      //         email: input.email
      //       })).username,
      //       url: url
      //     });
      //     break;
      // }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          // nothing
        }
      });
    }
  }
};

module.exports = resolvers;
