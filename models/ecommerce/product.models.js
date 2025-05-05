const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: String,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Category"

    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
