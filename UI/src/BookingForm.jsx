import { useState } from "react";
import axios from "axios";
import logo1 from "./assets/hotel-1.png";

export default function BookingForm() {
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phoneNo: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    guestCount: 1,
    specialRequests: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email address";

    if (!/^[0-9]{10}$/.test(form.phoneNo))
      newErrors.phoneNo = "Phone number must be 10 digits";

    if (!form.checkInDate)
      newErrors.checkInDate = "Check-in date is required";
    else if (new Date(form.checkInDate) < today)
      newErrors.checkInDate = "Check-in cannot be in the past";

    if (!form.checkOutDate)
      newErrors.checkOutDate = "Check-out date is required";
    else if (new Date(form.checkOutDate) <= new Date(form.checkInDate))
      newErrors.checkOutDate = "Check-out must be after check-in";

    if (!form.roomType) newErrors.roomType = "Select a room type";
    if (form.guestCount < 1) newErrors.guestCount = "At least 1 guest";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/booking", form);
      setConfirmed(true);
    } catch (error) {
      alert(error.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  if (confirmed) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-600">
          Booking Confirmed
        </h1>
        <p className="mt-4 text-gray-600 max-w-md">
          Your reservation has been successfully saved.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-3 sm:px-6 py-6">
      <div className="relative mx-auto max-w-6xl h-52 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden">
        <img src={logo1} alt="Hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h2 className="text-white text-xl sm:text-3xl font-bold">
            Grand Palace Hotel
          </h2>
          <p className="text-white text-sm sm:text-base mt-1 max-w-xl">
            Comfort, elegance, and convenience — all in one place.
          </p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="text-white text-sm ml-2">(4.8 / 5)</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-5 grid grid-cols-2 sm:grid-cols-4 gap-1">
        <div className="flex flex-col items-center gap-1">
          <i className="fa-solid fa-wifi text-xl"></i>
          <span className="text-sm font-semibold">Free Wi-Fi</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <i className="fa-solid fa-bowl-food text-xl"></i>
          <span className="text-sm font-semibold">Breakfast</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <i className="fa-solid fa-car text-xl"></i>
          <span className="text-sm font-semibold">Parking</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <i className="fa-solid fa-spa text-xl"></i>
          <span className="text-sm font-semibold">Spa</span>
        </div>
      </div>

      <form
        onSubmit={submitHandler}
        className="max-w-4xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 space-y-6"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#ff1654]">
          Reserve Your Stay
        </h2>
        <p className="text-black font-semibold mt-2 text-sm sm:text-base text-center">
          Complete the details below to confirm your room booking.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-4">Guest Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border p-3 rounded-lg" name="name" placeholder="Full Name" onChange={handleChange} />
            
            <input className="border p-3 rounded-lg" name="email" placeholder="Email" onChange={handleChange} />
             
            <input className="border p-3 rounded-lg md:col-span-2" name="phoneNo" placeholder="Phone Number" onChange={handleChange} />
          </div>
          {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}
          {errors.email && <p className="text-red-700 text-sm">{errors.email}</p>}
          {errors.phoneNo && <p className="text-red-700 text-sm">{errors.phoneNo}</p>}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="date" className="border p-3 rounded-lg" name="checkInDate" onChange={handleChange} />
            <input type="date" className="border p-3 rounded-lg" name="checkOutDate" onChange={handleChange} />
            <select className="border p-3 rounded-lg" name="roomType" onChange={handleChange}>
              <option value="">Select Room Type</option>
              <option value="Single Room">Single Room</option>
              <option value="Double Room">Double Room</option>
              <option value="Twin Room">Twin Room</option>
              <option value="Family Room">Family Room</option>
              <option value="Luxury Suite">Luxury Suite</option>
            </select>
            <input type="number" min="1" className="border p-3 rounded-lg" name="guestCount" onChange={handleChange} />
          </div>
          {errors.checkInDate && <p className="text-red-700 text-sm">{errors.checkInDate}</p>}
          {errors.checkOutDate && <p className="text-red-700 text-sm">{errors.checkOutDate}</p>}
          {errors.roomType && <p className="text-red-700 text-sm">{errors.roomType}</p>}
          {errors.guestCount && <p className="text-red-700 text-sm">{errors.guestCount}</p>}
        </div>

        <textarea
          className="border p-3 rounded-lg w-full"
          rows="4"
          name="specialRequests"
          placeholder="Special Requests"
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ff1654] text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition"
        >
          {loading ? "Booking..." : "Confirm Reservation"}
        </button>
      </form>
    </div>
  );
}
