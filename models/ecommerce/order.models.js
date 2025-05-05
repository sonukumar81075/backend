const mongoose = require("mongoose");

const ordreItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      require: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    orderItems: {
      type: [ordreItemsSchema],
      require: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
