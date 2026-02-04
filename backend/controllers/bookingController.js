"use strict";

import Booking from '../models/Schema.js'

export const createBooking = async (req, res) => {
  try {
    const {
      name,
      phoneNo,
      email,
      checkInDate,
      checkOutDate,
      roomType,
      guestCount,
      specialRequests,
    } = req.body;

    if (
      !name ||
      !phoneNo ||
      !email ||
      !checkInDate ||
      !checkOutDate ||
      !roomType ||
      !guestCount
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }
    const existingBooking = await Booking.findOne({
      email,
      checkInDate: new Date(checkInDate),
    });


    if (existingBooking) {
      return res.status(409).json({
        success: false,
        message: "Booking already exists for this email and date",
      });
    }

    const booking = await Booking.create({
      name,
      phoneNo,
      email,
      checkInDate: new Date(checkInDate),
      checkOutDate: new Date(checkOutDate),
      roomType,
      guestCount,
      specialRequests,
    });


    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Booking Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
