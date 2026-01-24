// models/course.model.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 120,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      default: "General",
      trim: true,
    },

    thumbnail: {
      type: String,
      default: null,
    },

    status: {
      type: String,
      
      
    },

  
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
      required: true,
    },
  },
  { timestamps: true }
);

const courseModel  = mongoose.model("Course", courseSchema);
module.exports = courseModel
