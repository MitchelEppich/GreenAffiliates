const mongoose = require("mongoose");

const AddressSchema = require("./address");
const AffiliateSchema = require("./affiliate");
const CommissionSchema = require("./commission");
const CommissionArchivedSchema = require("./commissionArchived");
const GoalSchema = require("./goal");
const MediaSchema = require("./media");
const MerchantSchema = require("./merchant");
const MessageSchema = require("./message");
const TrackerSchema = require("./tracker");
const ProductSchema = require("./product");
const CategorySchema = require("./category");

const Address = mongoose.model("Address", AddressSchema);
const Affiliate = mongoose.model("Affiliate", AffiliateSchema);
const Commission = mongoose.model("Commission", CommissionSchema);
const CommissionArchived = mongoose.model(
  "CommissionArchived",
  CommissionArchivedSchema
);
const Goal = mongoose.model("Goal", GoalSchema);
const Media = mongoose.model("Media", MediaSchema);
const Merchant = mongoose.model("Merchant", MerchantSchema);
const Message = mongoose.model("Message", MessageSchema);
const Tracker = mongoose.model("Tracker", TrackerSchema);
const Product = mongoose.model("Product", ProductSchema);
const Category = mongoose.model("Category", CategorySchema);

exports.Address = Address;
exports.Affiliate = Affiliate;
exports.Commission = Commission;
exports.CommissionArchived = CommissionArchived;
exports.Goal = Goal;
exports.Media = Media;
exports.Merchant = Merchant;
exports.Message = Message;
exports.Tracker = Tracker;
exports.Product = Product;
exports.Category = Category;
