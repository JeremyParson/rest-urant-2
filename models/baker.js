const { default: mongoose, Schema } = require("mongoose");
const Bread = require("../models/bread")

const bakerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["Rachel", "Monica", "Joey", "Chandler", "Ross", "Phoebe"],
    },
    startDate: {
      type: Date,
      required: true,
    },
    bio: String,
  },
  { toJSON: { virtuals: true } }
);

bakerSchema.virtual("breads", {
  ref: "Bread",
  localField: "_id",
  foreignField: "baker",
});

// hooks
bakerSchema.post("findOneAndDelete", function () {
  Bread.deleteMany({ baker: this._conditions._id }).then((deleteStatus) => {
    console.log(deleteStatus);
  });
});

module.exports = mongoose.model("Baker", bakerSchema);