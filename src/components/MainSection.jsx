import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Minus, Calendar, ChevronDown } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Import images from assets folder
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import img13 from "../assets/13.jpeg";
import img14 from "../assets/14.jpeg";
import img15 from "../assets/15.jpeg";
import img16 from "../assets/16.jpeg";
import img17 from "../assets/17.jpeg";

const FarmhouseBooking = () => {
  // State for image carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [eventDate, setEventDate] = useState(null);
  const [guests, setGuests] = useState(10);
  const [occasion, setOccasion] = useState("");
  const [djRequired, setDjRequired] = useState("no");
  const [drinkingAllowed, setDrinkingAllowed] = useState("no");
  const [bookingMessage, setBookingMessage] = useState("");
  const [isWithStay, setIsWithStay] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // Farmhouse images from assets folder
  const farmhouseImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17
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
    if (isWithStay && (!checkInDate || !checkOutDate)) {
      alert("Please select check-in and check-out dates");
      return;
    }
    
    if (!isWithStay && !eventDate) {
      alert("Please select an event date");
      return;
    }

    if (!occasion) {
      alert("Please select an occasion");
      return;
    }

    // Calculate nights for with-stay bookings
    const nights = isWithStay && checkInDate && checkOutDate
      ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
      : 0;

    setBookingMessage(
      isWithStay
        ? `Thank you for your booking request! Your ${nights}-night stay for ${guests} guest${guests > 1 ? "s" : ""} has been received. We will contact you soon.`
        : `Thank you for your booking request for ${guests} guest${guests > 1 ? "s" : ""}! We will contact you soon to confirm your event.`
    );

    // Reset form after 5 seconds
    setTimeout(() => {
      setBookingMessage("");
      setCheckInDate(null);
      setCheckOutDate(null);
      setEventDate(null);
      setGuests(10);
      setOccasion("");
      setDjRequired("no");
      setDrinkingAllowed("no");
      setShowBookingForm(false);
    }, 5000);
  };

  // Calculate price based on booking type and selections
  const calculatePrice = () => {
    if (isWithStay && (!checkInDate || !checkOutDate)) return null;
    if (!isWithStay && !eventDate) return null;

    const baseNightlyRateWeekday = isWithStay ? 25000 : 20000;
    const baseNightlyRateWeekend = isWithStay ? 35000 : 30000;
    
    const nights = isWithStay && checkInDate && checkOutDate
      ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
      : 1;
    
    // Determine if dates include weekends
    let weekdayNights = 0;
    let weekendNights = 0;
    
    if (isWithStay && checkInDate && checkOutDate) {
      let currentDate = new Date(checkInDate);
      
      while (currentDate < checkOutDate) {
        const day = currentDate.getDay();
        // 0 = Sunday, 5 = Friday, 6 = Saturday
        if (day === 0 || day === 5 || day === 6) {
          weekendNights++;
        } else {
          weekdayNights++;
        }
        
        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
      }
    } else if (!isWithStay && eventDate) {
      const day = eventDate.getDay();
      if (day === 0 || day === 5 || day === 6) {
        weekendNights = 1;
      } else {
        weekdayNights = 1;
      }
    }
    
    const basePrice = (weekdayNights * baseNightlyRateWeekday) + (weekendNights * baseNightlyRateWeekend);
    let additionalCosts = 0;

    // Add DJ cost if required
    if (djRequired === "yes") {
      additionalCosts += 10000;
    }

    // Add drinking allowance cost if requested
    if (drinkingAllowed === "yes") {
      additionalCosts += 15000;
    }

    const total = basePrice + additionalCosts;

    return {
      nights: isWithStay ? nights : null,
      weekdayNights,
      weekendNights,
      baseNightlyRateWeekday,
      baseNightlyRateWeekend,
      basePrice,
      djCost: djRequired === "yes" ? 10000 : 0,
      drinkingCost: drinkingAllowed === "yes" ? 15000 : 0,
      total,
    };
  };

  const priceDetails = calculatePrice();

  // Thumbnail selector
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full mt-14 pt-2.5">
      {/* Main Carousel - Full Width */}
      <div className="relative overflow-hidden w-full" style={{ height: '70vh' }}>
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/40 hover:bg-white/60 p-2 rounded-full transition-all duration-200"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/40 hover:bg-white/60 p-2 rounded-full transition-all duration-200"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>

        {/* Booking Bar Overlay */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div className="bg-gray-900/80 backdrop-blur-sm text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-6">
            <div className="space-y-1">
              <label className="block text-xs font-medium">Check-in: *</label>
              <div className="relative">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={new Date()}
                  className="w-48 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#c5a97c] text-white"
                  placeholderText="Check-in Date"
                />
                <Calendar size={16} className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="block text-xs font-medium">Check-out: *</label>
              <div className="relative">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={checkInDate || new Date()}
                  className="w-48 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#c5a97c] text-white"
                  placeholderText="Check-out Date"
                />
                <Calendar size={16} className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="block text-xs font-medium">Adults:</label>
              <div className="relative">
                <select 
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  className="w-32 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#c5a97c] text-white appearance-none"
                >
                  {Array.from({ length: 300 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="block text-xs font-medium">Children:</label>
              <div className="relative">
                <select 
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  className="w-32 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#c5a97c] text-white appearance-none"
                >
                  {Array.from({ length: 301 }, (_, i) => i).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            
            <button 
              onClick={() => setShowBookingForm(true)}
              className="bg-[#c5a97c] hover:bg-[#b39868] text-white py-2 px-6 rounded-md transition-all font-medium text-base shadow-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails Bar */}
      <div className="flex overflow-x-auto space-x-1 p-2 bg-gray-100 w-full">
        {farmhouseImages.slice(0, 8).map((img, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-20 h-16 cursor-pointer transform transition-all duration-200 ${
              currentSlide === index ? "ring-2 ring-[#c5a97c] scale-105" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>

      {/* Booking Form Section */}
      {showBookingForm && (
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Booking Form */}
            <div className="bg-gray-50 p-6">
              {bookingMessage ? (
                <div className="text-center py-6 bg-green-50 rounded-lg p-5 shadow-md">
                  <div className="text-green-600 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-14 w-14 mx-auto"
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
                  <p className="text-lg font-semibold text-gray-800">
                    {bookingMessage}
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex rounded-full bg-gray-100 p-0.5">
                      <button
                        className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                          isWithStay
                            ? "bg-amber-400 bg-opacity-70 text-white"
                            : "text-amber-400"
                        }`}
                        onClick={() => setIsWithStay(true)}
                      >
                        WITH STAY
                      </button>
                      <button
                        className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                          !isWithStay
                            ? "bg-amber-400 bg-opacity-70 text-white"
                            : "text-amber-400"
                        }`}
                        onClick={() => setIsWithStay(false)}
                      >
                        WITHOUT STAY
                      </button>
                    </div>
                  </div>
                  
                  {/* Pricing Table */}
                  <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
                    <h2 className="text-center text-lg font-bold text-gray-800 mb-2">
                      {isWithStay ? "With Stay Booking" : "Event Only (No Stay)"}
                    </h2>
                    <div className="mt-2 bg-white rounded-lg overflow-hidden border border-gray-200">
                      <div className="grid grid-cols-2 border-b">
                        <div className="p-2 font-medium text-gray-700 text-sm">
                          {isWithStay ? "Mon - Thur (Per Night)" : "Mon - Thur (Day Event)"}
                        </div>
                        <div className="p-2 text-right font-bold text-[#c5a97c]">
                          ₹ {isWithStay ? "25,000" : "20,000"} /-
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="p-2 font-medium text-gray-700 text-sm">
                          {isWithStay ? "Fri - Sun (Per Night)" : "Fri - Sun (Day Event)"}
                        </div>
                        <div className="p-2 text-right font-bold text-[#c5a97c]">
                          ₹ {isWithStay ? "35,000" : "30,000"} /-
                        </div>
                      </div>
                    </div>
                    <p className="text-center mt-3 text-xs text-gray-600">
                      {isWithStay
                        ? "Check-In 11:00 AM and Check-out time will be 10:00 AM!"
                        : "Event hours: 10:00 AM to 11:00 PM"}
                    </p>
                    <p className="text-center mt-1 text-xs text-gray-600">
                      Address: SY NUMBER: 108, near Mirja Farms, Murthuzaguda, Moinabad, Telangana 501504
                    </p>
                  </div>

                  {/* Booking Form */}
                  <form onSubmit={handleEnquireNow} className="space-y-4">
                    {/* Date selection for with-stay bookings */}
                    {isWithStay ? (
                      <div>
                        <label className="block text-gray-700 mb-1 font-medium text-sm">
                          From Date - To Date
                        </label>
                        <div className="flex space-x-2">
                          <div className="relative w-1/2">
                            <DatePicker
                              selected={checkInDate}
                              onChange={(date) => setCheckInDate(date)}
                              selectsStart
                              startDate={checkInDate}
                              endDate={checkOutDate}
                              minDate={new Date()}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#c5a97c]"
                              placeholderText="From Date"
                              required={isWithStay}
                            />
                            <Calendar size={16} className="absolute right-3 top-3 text-gray-400" />
                          </div>
                          <div className="relative w-1/2">
                            <DatePicker
                              selected={checkOutDate}
                              onChange={(date) => setCheckOutDate(date)}
                              selectsEnd
                              startDate={checkInDate}
                              endDate={checkOutDate}
                              minDate={checkInDate || new Date()}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#c5a97c]"
                              placeholderText="To Date"
                              required={isWithStay}
                            />
                            <Calendar size={16} className="absolute right-3 top-3 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-gray-700 mb-1 font-medium text-sm">
                          Event Date
                        </label>
                        <div className="relative">
                          <DatePicker
                            selected={eventDate}
                            onChange={(date) => setEventDate(date)}
                            minDate={new Date()}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#c5a97c]"
                            placeholderText="Select event date"
                            required={!isWithStay}
                          />
                          <Calendar size={16} className="absolute right-3 top-3 text-gray-400" />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-700 mb-1 font-medium text-sm">
                        NUMBER OF GUESTS
                      </label>
                      <div className="flex border border-gray-300 rounded-md overflow-hidden">
                        <button
                          type="button"
                          onClick={() =>
                            setGuests((prev) => (prev > 10 ? prev - 1 : 10))
                          }
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <div className="flex-1 flex items-center justify-center font-medium text-sm">
                          {guests}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setGuests((prev) => (prev < 300 ? prev + 1 : 300))
                          }
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Minimum 10, maximum 300 guests
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-1 font-medium text-sm">
                        Occasion
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#c5a97c]"
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

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-gray-700 mb-1 font-medium text-sm">
                          DJ Required?
                        </label>
                        <div className="flex space-x-4 text-sm">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="dj"
                              value="yes"
                              checked={djRequired === "yes"}
                              onChange={() => setDjRequired("yes")}
                              className="mr-1"
                            />
                            Yes (+₹10000)
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="dj"
                              value="no"
                              checked={djRequired === "no"}
                              onChange={() => setDjRequired("no")}
                              className="mr-1"
                            />
                            No
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1 font-medium text-sm">
                          Drinking Allowed?
                        </label>
                        <div className="flex space-x-4 text-sm">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="drinking"
                              value="yes"
                              checked={drinkingAllowed === "yes"}
                              onChange={() => setDrinkingAllowed("yes")}
                              className="mr-1"
                            />
                            Yes (+₹15000)
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="drinking"
                              value="no"
                              checked={drinkingAllowed === "no"}
                              onChange={() => setDrinkingAllowed("no")}
                              className="mr-1"
                            />
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 mt-2 bg-gray-100 rounded-md">
                      <p className="text-xs text-gray-600 italic">
                        As per government rules, additional permits are required for DJ and drinking services.
                      </p>
                    </div>

                    {/* Price Summary */}
                    {priceDetails && (
                      <div className="p-3 bg-white rounded-md shadow-sm border border-gray-100">
                        <h4 className="font-semibold mb-2 text-sm">Price Summary</h4>
                        <div className="space-y-1 text-sm">
                          {isWithStay && priceDetails.weekdayNights > 0 && (
                            <div className="flex justify-between py-1 text-gray-700">
                              <span>Weekday Rate ({priceDetails.weekdayNights} night{priceDetails.weekdayNights > 1 ? "s" : ""})</span>
                              <span>₹{(priceDetails.weekdayNights * priceDetails.baseNightlyRateWeekday).toLocaleString()}</span>
                            </div>
                          )}
                          {isWithStay && priceDetails.weekendNights > 0 && (
                            <div className="flex justify-between py-1 text-gray-700">
                              <span>Weekend Rate ({priceDetails.weekendNights} night{priceDetails.weekendNights > 1 ? "s" : ""})</span>
                              <span>₹{(priceDetails.weekendNights * priceDetails.baseNightlyRateWeekend).toLocaleString()}</span>
                            </div>
                          )}
                          {!isWithStay && (
                            <div className="flex justify-between py-1 text-gray-700">
                              <span>Base Event Price</span>
                              <span>₹{priceDetails.basePrice.toLocaleString()}</span>
                            </div>
                          )}
                          {priceDetails.djCost > 0 && (
                            <div className="flex justify-between py-1 text-gray-700">
                              <span>DJ Service</span>
                              <span>₹{priceDetails.djCost.toLocaleString()}</span>
                            </div>
                          )}
                          {priceDetails.drinkingCost > 0 && (
                            <div className="flex justify-between py-1 text-gray-700">
                              <span>Drinking Permission</span>
                              <span>₹{priceDetails.drinkingCost.toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between py-1 font-semibold border-t border-gray-200 mt-1 pt-1 text-[#c5a97c]">
                            <span>Total</span>
                            <span>₹{priceDetails.total.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md transition-all font-medium text-base shadow-sm"
                    >
                      Book Now
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmhouseBooking;