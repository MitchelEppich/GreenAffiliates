const nodemailer = require("nodemailer");

const emailTemplates = require("../emails");

// const aws = require("aws-sdk");

// aws.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

// const s3Bucket = process.env.S3_BUCKET;

const resolvers = {
  Query: {
    sendMessage: (_, message) => {
      return message;
    },
    sendData: (_, { input }) => {
      console.log(input);
      return input.name;
    }
  },
  // User,
  // Subscription: {},
  Mutation: {
    sendEmail: async (_, { input }) => {
      let url = await resolvers.Mutation.createPasswordResetURL(_, input.email);

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
