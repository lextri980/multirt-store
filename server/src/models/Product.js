const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    name: { type: String, required: true, trim: true },
    image: { type: Object, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [
      {
        name: { type: String, required: true, trim: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true, trim: true },
        user: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "users",
        },
      },
      { timestamps: true },
    ],
    rating: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);