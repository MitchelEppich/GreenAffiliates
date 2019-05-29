const mongoose = require("mongoose");

const AddressSchema = require("./Address");
const AffiliateSchema = require("./Affiliate");
const CommissionSchema = require("./Commission");
const GoalSchema = require("./Goal");
const MediaSchema = require("./Media");
const MerchantSchema = require("./Merchant");
const MessageSchema = require("./Message");
const TrackerSchema = require("./Tracker");
const ProductSchema = require("./Product");

const Address = mongoose.model("Address", AddressSchema);
const Affiliate = mongoose.model("Affiliate", AffiliateSchema);
const Commission = mongoose.model("Commission", CommissionSchema);
const Goal = mongoose.model("Goal", GoalSchema);
const Media = mongoose.model("Media", MediaSchema);
const Merchant = mongoose.model("Merchant", MerchantSchema);
const Message = mongoose.model("Message", MessageSchema);
const Tracker = mongoose.model("Tracker", TrackerSchema);
const Product = mongoose.model("Product", ProductSchema);

exports.Address = Address;
exports.Affiliate = Affiliate;
exports.Commission = Commission;
exports.Goal = Goal;
exports.Media = Media;
exports.Merchant = Merchant;
exports.Message = Message;
exports.Tracker = Tracker;
exports.Product = Product;
