import { useState, useEffect } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Coffee,
  Wifi,
  Car,
  Tv,
  Utensils,
  Users,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import FarmhouseBooking from "./MainSection";
import FarmhouseAmenities from "./Amenites"
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
import EnhancedFAQSection from "./FAQ";

export default function FarmhouseRental() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  const nextImage = () =>
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );



  const farmhouseImages = [
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  ];

  const galleryImages = [ img1,  img3,  img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17, img1
    
  ];


  const amenities = [
    { icon: <Coffee size={24} />, name: "Coffee Maker" },
    { icon: <Wifi size={24} />, name: "Free WiFi" },
    { icon: <Car size={24} />, name: "Free Parking" },
    { icon: <Tv size={24} />, name: "Smart TV" },
    { icon: <Utensils size={24} />, name: "Fully Equipped Kitchen" },
    { icon: <Users size={24} />, name: "Up to 8 Guests" },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === farmhouseImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? farmhouseImages.length - 1 : prev - 1
    );
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) {
      setBookingMessage("Please select check-in and check-out dates");
      return;
    }

    setBookingMessage(
      `Booking confirmed! Check-in: ${checkInDate}, Check-out: ${checkOutDate}, Guests: ${guests}`
    );
    setTimeout(() => {
      setBookingMessage("");
      setIsBookingOpen(false);
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
     

     
      <FarmhouseBooking />

    
      <FarmhouseAmenities />



 {/* Features Section */}
       <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Farmhouse Features</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our spacious farmhouse offers all the comforts of home with the
              charm of country living.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md">
              <img
                src={img12}
                alt="Living room"
                className="w-full h-52 object-cover rounded-t-md mb-4"
              />
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold mb-2">
                  Cozy Living Spaces
                </h3>
                <p className="text-gray-700">
                  The farmhouse features a spacious living room with a stone
                  fireplace, comfortable seating, and large windows that fill
                  the space with natural light.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/4:3/w_1820,h_1365,c_limit/Kishani%20Perera_Point%20Dume%20Project_Photographer%20Anthony%20Barcelo.jpg"
                alt="Bedroom"
                className="w-full h-52 object-cover rounded-t-md mb-4"
              />
              <div className="p-6 py-4">
                <h3 className="text-xl font-semibold mb-2">
                  Comfortable Bedrooms
                </h3>
                <p className="text-gray-700">
                  With 3 bedrooms and 2 bathrooms, the farmhouse comfortably
                  accommodates up to 8 guests. Each bedroom is tastefully
                  decorated with premium linens.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKywWCj1vYc3uERb9Qu_LUll11VdqeEVmB-A&s"
                alt="Outdoor space"
                className="w-full h-52 object-cover rounded-t-md mb-4"
              />
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold mb-2">Outdoor Paradise</h3>
                <p className="text-gray-700">
                  Enjoy the wraparound porch with rocking chairs, outdoor dining
                  area with BBQ, fire pit for evening gatherings, and 5 acres to
                  explore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* About Vivenza Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">About Vivenza</h2>
      <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Experience luxury and elegance at Vivenza, the most premium farmhouse in Moinabad, Telangana, India. With expansive spaces and world-class amenities, we create unforgettable memories.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-2">Luxurious Accommodations</h3>
        <p className="text-gray-700">
          Vivenza boasts 8 opulent air-conditioned bedrooms with attached washrooms, 4 spacious halls, and multiple lounges. Our premium suites feature king-size beds with luxury linens, modern bathrooms, and breathtaking views of the surrounding landscape.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-2">Grand Event Spaces</h3>
        <p className="text-gray-700">
          Host magnificent events for up to 500 guests across our versatile venues. Our elegant banquet hall, sprawling outdoor lawn, and poolside area are perfect for weddings, corporate retreats, birthdays, bachelor/bachelorette parties, and family celebrations.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-2">Premium Amenities</h3>
        <p className="text-gray-700">
          Indulge in our 50x70 ft infinity swimming pool, professionally landscaped 100x150 ft lawn, outdoor BBQ area, fire pit lounge, fully-equipped gourmet kitchen, and state-of-the-art sound system. We offer complimentary high-speed WiFi throughout the property.
        </p>
      </div>
    </div>

    <div className="mt-12 bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Booking Information</h3>
      <p className="text-gray-700 mb-4">
        Vivenza is available for daily rentals and special events throughout the year. Our dedicated event planning team can assist with catering, decoration, entertainment, and all logistics to ensure a seamless experience.
      </p>
      
      <h4 className="text-lg font-medium mb-2">Home Rules and Policies:</h4>
      <ul className="text-gray-700 space-y-2">
        <li>• 50% advance payment required for booking confirmation, with remaining balance and Rs.10,000 security deposit (refundable) due at check-in.</li>
        <li>• Every guest must carry a government-approved ID proof.</li>
        <li>• Professional event management and catering services available upon request.</li>
        <li>• CCTV cameras are present in exterior areas for your safety.</li>
        <li>• Special rates apply for weekends and public holidays.</li>
        <li>• Any damage to property will result in deduction from the security deposit.</li>
        <li>• Illegal activities, prohibited substances, and inappropriate behavior are strictly forbidden.</li>
      </ul>
    </div>
  </div>
</section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Take a visual tour of our beautiful farmhouse and its
              surroundings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((url, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={url}
                  alt={`Farmhouse view ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-50 flex flex-col items-center justify-center px-4 py-8">


          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-black cursor-pointer"
          >
            <X size={32} />
          </button>

          {/* Index Display */}
          <div className="text-black text-xl font-bold mb-4">
            {selectedIndex + 1} / {galleryImages.length}
          </div>

          {/* Arrows & Main Image */}
          <div className="flex items-center w-full max-w-4xl relative">
            <button
              onClick={prevImage}
              className="absolute left-0 text-white hover:text-green-400 p-2"
            >
              <ChevronLeft size={40} />
            </button>

            <img
              src={galleryImages[selectedIndex]}
              alt={`Farmhouse view ${selectedIndex + 1}`}
              className="w-full max-h-[70vh] object-fit rounded-lg"
            />

            <button
              onClick={nextImage}
              className="absolute right-0 text-white hover:text-green-400 p-2"
            >
              <ChevronRight size={40} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex overflow-x-auto gap-2 mt-6 max-w-full px-2">
            {galleryImages.map((url, idx) => (
              <img
                key={idx}
                src={url}
                onClick={() => setSelectedIndex(idx)}
                className={`h-20 w-28 object-cover rounded-md cursor-pointer border-4 ${
                  selectedIndex === idx
                    ? "border-black"
                    : "border-transparent"
                }`}
                alt={`Thumbnail ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Guest Reviews</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "We had the most wonderful stay at this beautiful farmhouse. The
                property is stunning and the house had everything we needed for
                a comfortable stay. We especially loved sitting on the porch in
                the evenings, watching the sunset."
              </p>
              <div className="font-medium">Priya & Rahul Sharma</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Perfect getaway from the city! The farmhouse is beautifully
                decorated and has all the modern amenities while still
                maintaining its rustic charm. We loved exploring the property
                and relaxing by the fire pit in the evenings."
              </p>
              <div className="font-medium">Aditya Kapoor </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "We came here for a family reunion and it was the perfect
                setting. The farmhouse is spacious and comfortable, and the
                large dining table was perfect for our family meals. The kids
                loved running around outside and we all enjoyed the peaceful
                surroundings."
              </p>
              <div className="font-medium">Vikram Malhotra </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Local Attractions */}
     <section className="wp-block-group attractions-section py-8">
  <div className="container mx-auto px-4">
    <div className="wp-block-heading text-center mb-6">
      <h2 className="text-2xl font-bold"> Local Attractions </h2>
      <div className="w-16 h-1 bg-green-600 mx-auto my-3"></div>
      <p className="text-sm text-gray-600">Discover natural beauty and cultural gems around your stay</p>
    </div>

    <div className="wp-block-columns mb-4">
      <div className="wp-block-column attractions-grid grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="attraction-card p-3 border border-gray-100 rounded shadow-sm">
          <h3 className="text-md font-semibold text-green-700">Osman Sagar Lake</h3>
          <p className="text-xs text-gray-700">A serene reservoir with picturesque sunset views and boating opportunities.</p>
          <div className="text-xs text-gray-500 mt-1">Distance: 8 km</div>
        </div>
        
        <div className="attraction-card p-3 border border-gray-100 rounded shadow-sm">
          <h3 className="text-md font-semibold text-green-700">Himayat Sagar</h3>
          <p className="text-xs text-gray-700">Beautiful lake with walking paths and peaceful surroundings.</p>
          <div className="text-xs text-gray-500 mt-1">Distance: 12 km</div>
        </div>
        
        <div className="attraction-card p-3 border border-gray-100 rounded shadow-sm">
          <h3 className="text-md font-semibold text-green-700">Chilkur Balaji Temple</h3>
          <p className="text-xs text-gray-700">Popular "Visa Balaji" temple known for its spiritual significance.</p>
          <div className="text-xs text-gray-500 mt-1">Distance: 15 km</div>
        </div>
        
        <div className="attraction-card p-3 border border-gray-100 rounded shadow-sm">
          <h3 className="text-md font-semibold text-green-700">Mrugavani National Park</h3>
          <p className="text-xs text-gray-700">Wildlife sanctuary with hiking trails and native flora and fauna.</p>
          <div className="text-xs text-gray-500 mt-1">Distance: 20 km</div>
        </div>
        
        <div className="attraction-card p-3 border border-gray-100 rounded shadow-sm">
          <h3 className="text-md font-semibold text-green-700">Golconda Fort</h3>
          <p className="text-xs text-gray-700">Historic fort with stunning architecture and light & sound shows.</p>
          <div className="text-xs text-gray-500 mt-1">Distance: 25 km</div>
        </div>
        
        <div className="attraction-card p-3 border border-gray-100 rounded shadow-sm">
          <h3 className="text-md font-semibold text-green-700">Shilparamam</h3>
          <p className="text-xs text-gray-700">Arts and crafts village showcasing traditional handicrafts and culture.</p>
          <div className="text-xs text-gray-500 mt-1">Distance: 28 km</div>
        </div>
      </div>
    </div>

    <div className="wp-block-buttons flex justify-center mt-4">
      <div className="wp-block-button">
        <a href="https://www.google.com/search?q=local+attractions+near+moinabad&oq=local+attractions+near+moinabad" target="_blank" className="wp-block-button__link bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded">View All Attractions</a>
      </div>
    </div>
  </div>
</section>
  
        {/* FAQ Section */}
    <EnhancedFAQSection />

      
      

      
    </div>
  );
}

