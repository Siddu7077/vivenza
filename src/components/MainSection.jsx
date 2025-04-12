import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Plus, Minus } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FarmhouseBooking = () => {
  // State for image carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(10);
  const [occasion, setOccasion] = useState("");
  const [djRequired, setDjRequired] = useState("no");
  const [drinkingAllowed, setDrinkingAllowed] = useState("no");
  const [bookingMessage, setBookingMessage] = useState("");
  const [activeTab, setActiveTab] = useState("with-stay");

  // Sample farmhouse images (replace with your actual images)
  const farmhouseImages = [
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  ];

  // List of occasions
  const occasionsList = [
    "Birthday Party",
    "Anniversary",
    "Wedding",
    "Corporate Event",
    "Family Gathering",
    "Get-together",
    "Festival Celebration",
    "Other",
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? farmhouseImages.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === farmhouseImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleEnquireNow = (e) => {
    e.preventDefault();

    // Simple validation
    if (!checkInDate || !checkOutDate) {
      alert("Please select check-in and check-out dates");
      return;
    }

    if (adults + children === 0) {
      alert("Please add at least one guest");
      return;
    }

    if (!occasion) {
      alert("Please select an occasion");
      return;
    }

    // Calculate nights
    const nights = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );

    setBookingMessage(
      `Thank you for your booking request! Your ${nights}-night stay for ${
        adults + children
      } guest${
        adults + children > 1 ? "s" : ""
      } has been received. We will contact you soon.`
    );

    // Reset form after 5 seconds
    setTimeout(() => {
      setBookingMessage("");
      setCheckInDate(null);
      setCheckOutDate(null);
      setAdults(0);
      setChildren(0);
      setOccasion("");
      setDjRequired("no");
      setDrinkingAllowed("no");
    }, 5000);
  };

  // Calculate price if dates are selected
  const calculatePrice = () => {
    if (!checkInDate || !checkOutDate) return null;

    const nights = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );
    const basePrice = 16000 * nights;
    let additionalCosts = 0;

    // Add DJ cost if required
    if (djRequired === "yes") {
      additionalCosts += 6000;
    }

    // Add drinking allowance cost if requested
    if (drinkingAllowed === "yes") {
      additionalCosts += 6000;
    }

    const total = basePrice + additionalCosts;

    return {
      nights,
      basePrice,
      djCost: djRequired === "yes" ? 6000 : 0,
      drinkingCost: drinkingAllowed === "yes" ? 6000 : 0,
      total,
    };
  };

  const priceDetails = calculatePrice();

  // Thumbnail selector
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Helper functions for guest count
  const incrementAdults = () => setAdults((prev) => prev + 1);
  const decrementAdults = () => setAdults((prev) => (prev > 0 ? prev - 1 : 0));
  const incrementChildren = () => setChildren((prev) => prev + 1);
  const decrementChildren = () =>
    setChildren((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="max-w-7xl mx-auto">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Carousel */}
        <div className="w-full md:w-3/5 relative mt-14">
          {/* Main Image */}
          <div className="relative h-96 md:h-[600px] overflow-hidden">
            {farmhouseImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt={`Farmhouse view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex overflow-x-auto mt-2 space-x-2 p-2">
            {farmhouseImages.map((img, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-20 h-20 cursor-pointer ${
                  currentSlide === index ? "ring-2 ring-green-500" : ""
                }`}
                onClick={() => goToSlide(index)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="w-full md:w-2/5 bg-white p-6 md:p-8">
          {/* Content */}
          {bookingMessage ? (
            <div className="text-center py-8 bg-green-50 rounded-lg p-6 shadow-md">
              <div className="text-black mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold text-gray-800">
                {bookingMessage}
              </p>
            </div>
          ) : (
            <>
              {/* Pricing Table */}
              <div className=" p-4 rounded-t-lg">
                <h2 className="text-center text-xl font-bold text-black">
                  With Stay Booking
                </h2>
                <div className="mt-4 bg-white rounded-lg overflow-hidden">
                  <div className="grid grid-cols-2 border-b">
                    <div className="p-3 font-medium">
                      Mon - Thus (Price / Night)
                    </div>
                    <div className="p-3 text-right font-bold">₹ 16000 /-</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="p-3 font-medium">
                      Fri - Sun (Price / Night)
                    </div>
                    <div className="p-3 text-right font-bold">₹ 16000 /-</div>
                  </div>
                </div>
                <p className="text-center mt-4 text-sm">
                  Note: Check-In 10:00 AM and Check-out time will be 10:00 AM!
                </p>
                <p className="text-center mt-2 text-sm">
                  Address: 873G+J6M Sohail, Colony, Surangal, Moinabad,
                  Telangana
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleEnquireNow} className="mt-4">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 font-medium">
                    From Date - To Date
                  </label>
                  <div className="flex space-x-4">
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      selectsStart
                      startDate={checkInDate}
                      endDate={checkOutDate}
                      minDate={new Date()}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholderText="From Date"
                      required
                    />
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      selectsEnd
                      startDate={checkInDate}
                      endDate={checkOutDate}
                      minDate={checkInDate || new Date()}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholderText="To Date"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 font-medium">
                    NUMBER OF GUESTS
                  </label>
                  <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <button
                      type="button"
                      onClick={() =>
                        setGuests((prev) => (prev > 10 ? prev - 1 : 10))
                      }
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                    >
                      <Minus size={16} />
                    </button>
                    <div className="flex-1 flex items-center justify-center font-medium">
                      {guests}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setGuests((prev) => (prev < 500 ? prev + 1 : 500))
                      }
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum 10, maximum 500 guests
                  </p>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 font-medium">
                    Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select an occasion</option>
                    {occasionsList.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      DJ Required?
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="dj"
                          value="yes"
                          checked={djRequired === "yes"}
                          onChange={() => setDjRequired("yes")}
                          className="mr-2"
                        />
                        Yes (+₹6000)
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="dj"
                          value="no"
                          checked={djRequired === "no"}
                          onChange={() => setDjRequired("no")}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Drinking Allowed?
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="drinking"
                          value="yes"
                          checked={drinkingAllowed === "yes"}
                          onChange={() => setDrinkingAllowed("yes")}
                          className="mr-2"
                        />
                        Yes (+₹6000)
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="drinking"
                          value="no"
                          checked={drinkingAllowed === "no"}
                          onChange={() => setDrinkingAllowed("no")}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* Price Summary */}
                {priceDetails && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-md">
                    <h4 className="font-semibold mb-2">Price Summary</h4>
                    <div className="flex justify-between py-1 text-gray-700">
                      <span>Base Price ({priceDetails.nights} nights)</span>
                      <span>₹{priceDetails.basePrice}</span>
                    </div>
                    {priceDetails.djCost > 0 && (
                      <div className="flex justify-between py-1 text-gray-700">
                        <span>DJ Service</span>
                        <span>₹{priceDetails.djCost}</span>
                      </div>
                    )}
                    {priceDetails.drinkingCost > 0 && (
                      <div className="flex justify-between py-1 text-gray-700">
                        <span>Drinking Permission</span>
                        <span>₹{priceDetails.drinkingCost}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1 font-semibold border-t border-gray-200 mt-2 pt-2">
                      <span>Total</span>
                      <span>₹{priceDetails.total}</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition-all font-medium text-lg"
                >
                  Enquire Now
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmhouseBooking;
