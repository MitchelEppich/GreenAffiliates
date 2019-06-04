const nodemailer = require("nodemailer");

const emailTemplates = require("../emails");

// const aws = require("aws-sdk");

// aws.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

// const s3Bucket = process.env.S3_BUCKET;

const Address = require("./address");
const Affiliate = require("./affiliate");
const Commission = require("./commission");
const CommissionArchived = require("./commissionArchived");
const Goal = require("./goal");
const Media = require("./media");
const Merchant = require("./merchant");
const Message = require("./message");
const Misc = require("./misc");
const Product = require("./product");
const Tracker = require("./tracker");
const Category = require("./category");

let imports = [
  Address,
  Affiliate,
  Commission,
  CommissionArchived,
  Goal,
  Media,
  Merchant,
  Message,
  Misc,
  Product,
  Tracker,
  Category
];

let resolvers = {};

for (let i = 0; i < imports.length; i++) {
  let _ = imports[i];
  if (_ == null) continue;
  let $ = Object.keys(_);
  for (let x of $) {
    let value = _[x];
    if (value == undefined || Object.keys(value).length == 0) continue;
    if (resolvers[x] == null) resolvers[x] = {};
    resolvers[x] = { ...resolvers[x], ...value };
  }
}

module.exports = resolvers;
