"use strict";
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNo: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
    },

    email: {
      type: String,
      required: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email",
      ],
    },
    checkInDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return value >= today;
        },
        message: "Check-in date cannot be in the past",
      },
    },
    checkOutDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.checkInDate;
        },
        message: "Check-out date must be after check-in date",
      },
    },

    roomType: {
      type: String,
      required: true,
      enum: ["Single Room",
        "Double Room",
        "Twin Room",
        "Luxury Suite",
        "Family Room"],
    },

    guestCount: {
      type: Number,
      required: true,
      min: 1,
    },

    specialRequests: {
      type: String,
      trim: true,
    },
  },
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
