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

  //   const farmhouseImages = [
  //     "/api/placeholder/1200/800",
  //     "/api/placeholder/1200/800",
  //     "/api/placeholder/1200/800",
  //     "/api/placeholder/1200/800"
  //   ];

  const farmhouseImages = [
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  ];

  const galleryImages = [
    "https://assets.architecturaldigest.in/photos/6443d4f9dfce01034953036d/master/w_1600,c_limit/DJI_0452.jpg",
    "https://assets.architecturaldigest.in/photos/6443d6cfdfce010349530375/master/w_1600,c_limit/IMG_8260-Edit.jpg",
    "https://assets.architecturaldigest.in/photos/6443d7245e459f60aa950913/master/w_1600,c_limit/IMG_8320-Edit.jpg",
    "https://assets.architecturaldigest.in/photos/6443d7505e459f60aa950915/master/w_1600,c_limit/IMG_8360-Edit.jpg",
    "https://assets.architecturaldigest.in/photos/6443d8e5f192b54c0650bdf6/master/w_1600,c_limit/IMG_8731-Edit.jpg",
    "https://assets.architecturaldigest.in/photos/6443d6745e459f60aa950911/master/w_1600,c_limit/IMG_8327-Edit.jpg",
    "https://assets.architecturaldigest.in/photos/6443d62ddfce010349530371/master/w_1600,c_limit/IMG_8549.jpg",
    "https://assets.architecturaldigest.in/photos/6443d5e65e459f60aa95090f/master/w_1600,c_limit/IMG_8336-Edit.jpg",
  ];

  const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openModal = (index) => {
      setSelectedIndex(index);
      setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const goPrev = () => {
      setSelectedIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    };

    const goNext = () => {
      setSelectedIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    };

    return (
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

          {isOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white hover:text-gray-300"
              >
                <X size={36} />
              </button>

              <div className="relative w-full max-w-4xl mb-4">
                <img
                  src={galleryImages[selectedIndex]}
                  alt={`Selected ${selectedIndex + 1}`}
                  className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                />
                <button
                  onClick={goPrev}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 text-white"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 text-white"
                >
                  <ChevronRight size={32} />
                </button>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-lg bg-black bg-opacity-60 px-4 py-1 rounded-full">
                  {selectedIndex + 1} / {galleryImages.length}
                </div>
              </div>

              <div className="flex overflow-x-auto space-x-2 max-w-full pb-2">
                {galleryImages.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Thumb ${index + 1}`}
                    className={`h-20 w-32 object-cover rounded cursor-pointer border-2 ${
                      selectedIndex === index
                        ? "border-green-500"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  //   const placeholderImages = [
  //     "/api/placeholder/1200/800",
  //     "/api/placeholder/1200/800",
  //     "/api/placeholder/1200/800",
  //     "/api/placeholder/1200/800"
  //   ];

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
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-800">
              Vivenza Farmhouse
            </h1>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-green-700 font-medium">
              Home
            </a>
            <a href="#about" className="hover:text-green-700 font-medium">
              About
            </a>
            <a href="#amenities" className="hover:text-green-700 font-medium">
              Amenities
            </a>
            <a href="#gallery" className="hover:text-green-700 font-medium">
              Gallery
            </a>
            <a href="#contact" className="hover:text-green-700 font-medium">
              Contact
            </a>
          </div>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md transition-all"
          >
            Book Now
          </button>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white py-3 px-4 shadow-inner">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#amenities"
                className="hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </a>
              <a
                href="#gallery"
                className="hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center text-center">
          <div className="text-white max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Experience Rustic Luxury
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A peaceful getaway in the heart of the countryside
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-green-700 hover:bg-green-800 text-white text-lg py-3 px-8 rounded-md transition-all"
            >
              Book Your Stay
            </button>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
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
        </div>

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
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Welcome to Vivenza Farmhouse
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://www.indiaartndesign.com/IAnD_images/content2021/March2021/ClusterOne/sit-out-SanvinaFarmhouse-ClusterOneCreativeSolutions-indiaartndesign.jpg"
                alt="Farmhouse exterior"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                A Perfect Country Escape
              </h3>
              <p className="text-gray-700 mb-4">
                Nestled in the picturesque countryside, our charming farmhouse
                offers the perfect blend of rustic charm and modern comfort.
                Built in the 1900s and lovingly restored, this historic property
                sits on 5 acres of private land with stunning views of rolling
                hills and lush forests.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're seeking a romantic getaway, a family vacation, or
                a peaceful retreat to reconnect with nature, our farmhouse
                provides an idyllic setting for your next adventure.
              </p>
              <p className="text-gray-700 mb-6">
                Just a short 15-minute drive from town, you'll enjoy the
                tranquility of country living while having easy access to local
                attractions, shops, and restaurants.
              </p>

              <div className="flex items-center text-green-800">
                <MapPin size={20} className="mr-2" />
                <span>Located at JBIT College, MURTHUZAGUDA
                MOINABAD, R.R Dist - 501504</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                src="https://media.designcafe.com/wp-content/uploads/2020/03/21012613/luxury-living-room-designs.jpg"
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

      {/* Amenities Section */}
      <section id="amenities" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Amenities</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our farmhouse is equipped with everything you need for a
              comfortable and memorable stay.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="text-green-700 mr-3">{item.icon}</div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Additional Amenities</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-700 mr-2"></div>{" "}
                Fully stocked kitchen with modern appliances
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-700 mr-2"></div>{" "}
                Washer and dryer
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-700 mr-2"></div>{" "}
                Heating and air conditioning
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-700 mr-2"></div>{" "}
                Board games and books
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-700 mr-2"></div>{" "}
                Outdoor games
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-700 mr-2"></div>{" "}
                Walking trails on property
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-700 mr-2"></div>{" "}
                Welcome basket with local treats
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-700 mr-2"></div>{" "}
                Highchair and pack-n-play available
              </li>
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
              <div className="font-medium">Sarah and Family</div>
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
              <div className="font-medium">John and Rebecca</div>
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
              <div className="font-medium">The Martinez Family</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates & Availability */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Rates & Availability</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Rates</h3>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center pb-3 mb-3 border-b border-gray-200">
                  <div className="font-medium">Weekday (Sun-Thu)</div>
                  <div className="font-semibold text-green-800">$250/night</div>
                </div>
                <div className="flex justify-between items-center pb-3 mb-3 border-b border-gray-200">
                  <div className="font-medium">Weekend (Fri-Sat)</div>
                  <div className="font-semibold text-green-800">$325/night</div>
                </div>
                <div className="flex justify-between items-center pb-3 mb-3 border-b border-gray-200">
                  <div className="font-medium">Weekly Rate</div>
                  <div className="font-semibold text-green-800">
                    $1,600/week
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-medium">Cleaning Fee</div>
                  <div className="font-semibold text-green-800">$150</div>
                </div>

                <div className="mt-6 text-sm text-gray-600">
                  <p>* Minimum stay: 2 nights (3 nights for holidays)</p>
                  <p>* Additional guest fee: $25/night for each guest over 6</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-3">Terms & Conditions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-green-700 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    <span>50% deposit required to confirm reservation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-700 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    <span>
                      Full refund if cancelled 30+ days before check-in
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-700 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    <span>
                      50% refund if cancelled 14-29 days before check-in
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-700 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    <span>
                      No refund if cancelled less than 14 days before check-in
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-700 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    <span>Check-in: 4:00 PM, Check-out: 11:00 AM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Check Availability</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-green-100 text-green-800 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div className="flex-1 ml-4">
                    <h4 className="font-semibold">Ready to book your stay?</h4>
                    <p className="text-gray-600">
                      Check availability and reserve your dates now.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition-all flex items-center justify-center"
                >
                  <Calendar size={20} className="mr-2" />
                  Check Availability & Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Local Attractions</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore the beautiful surroundings and discover local gems during
              your stay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src="/api/placeholder/400/300"
                alt="Hiking trails"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hiking & Nature</h3>
                <p className="text-gray-700 mb-4">
                  Explore miles of scenic hiking trails in the nearby national
                  forest, just a 10-minute drive from the farmhouse.
                </p>
                <div className="text-sm text-gray-500">Distance: 5 miles</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src="/api/placeholder/400/300"
                alt="Local winery"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Wineries & Vineyards
                </h3>
                <p className="text-gray-700 mb-4">
                  Visit local wineries and vineyards for tastings and tours. The
                  region is known for its excellent wines.
                </p>
                <div className="text-sm text-gray-500">Distance: 8 miles</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src="/api/placeholder/400/300"
                alt="Farmers market"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Farmers Markets</h3>
                <p className="text-gray-700 mb-4">
                  Shop for fresh, local produce and artisanal goods at the
                  weekly farmers market in town.
                </p>
                <div className="text-sm text-gray-500">Distance: 6 miles</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md flex">
              <img
                src="/api/placeholder/300/200"
                alt="Local restaurant"
                className="w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold mb-2">Local Dining</h3>
                <p className="text-gray-700 mb-2">
                  Discover charming restaurants serving farm-to-table cuisine
                  using locally sourced ingredients.
                </p>
                <div className="text-sm text-gray-500">
                  Distance: 4-10 miles
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md flex">
              <img
                src="/api/placeholder/300/200"
                alt="Antique shop"
                className="w-1/3 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold mb-2">Antique Shopping</h3>
                <p className="text-gray-700 mb-2">
                  Browse unique treasures at the many antique shops and
                  boutiques in our historic downtown.
                </p>
                <div className="text-sm text-gray-500">Distance: 7 miles</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Have questions about our farmhouse? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full text-green-700 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-medium">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full text-green-700 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium">
                      info@vivenza.co.in
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full text-green-700 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="font-medium">
                      123 Country Road, Rural County, USA
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-green-700 hover:bg-green-100 transition-all"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-green-700 hover:bg-green-100 transition-all"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-green-700 hover:bg-green-100 transition-all"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <div className="text-gray-700">
                  <div className="flex justify-between py-1">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Saturday:</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">
                  What is the check-in/check-out time?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Check-in time is 4:00 PM and check-out time is 11:00 AM. Early
                  check-in or late check-out may be available upon request,
                  depending on our schedule.
                </p>
              </div>
            </div>

            <div className="mb-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">
                  Is the farmhouse pet-friendly?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Yes, we allow well-behaved dogs with a maximum of 2 dogs per
                  booking. There is an additional pet fee of $50 per stay.
                  Please let us know in advance if you'll be bringing your furry
                  friend(s).
                </p>
              </div>
            </div>

            <div className="mb-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">
                  Is there WiFi at the farmhouse?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Yes, complimentary high-speed WiFi is available throughout the
                  farmhouse.
                </p>
              </div>
            </div>

            <div className="mb-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">
                  How far is the nearest town?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  The nearest town with shops, restaurants, and groceries is
                  approximately 15 minutes (7 miles) from the farmhouse.
                </p>
              </div>
            </div>

            <div className="mb-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">
                  Is the property suitable for children?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Yes, our farmhouse is family-friendly. We provide a highchair
                  and pack-n-play upon request. The property has plenty of space
                  for children to play, but please note that there is a pond on
                  the property so children should be supervised at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Vivenza Farmhouse
              </h3>
              <p className="mb-4 text-gray-300">
                A charming countryside getaway for your perfect vacation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#amenities"
                    className="text-gray-300 hover:text-white"
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-300 hover:text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-4 text-gray-300">
                Subscribe to our newsletter for updates and special offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-r-md transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Vivenza Farmhouse. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Book Your Stay</h3>
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {bookingMessage ? (
                <div className="text-center py-8">
                  <div className="text-green-700 mb-4">
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
                <form onSubmit={handleBookNow}>
                  <div className="mb-6">
                    <label
                      htmlFor="checkIn"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="checkOut"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="guests"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {[...Array(8)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1} Guest{i !== 0 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6 p-4 bg-gray-50 rounded-md">
                    <h4 className="font-semibold mb-2">Price Summary</h4>
                    <div className="flex justify-between py-1 text-gray-700">
                      <span>Base Price</span>
                      <span>$250/night</span>
                    </div>
                    <div className="flex justify-between py-1 text-gray-700">
                      <span>Cleaning Fee</span>
                      <span>$150</span>
                    </div>
                    <div className="flex justify-between py-1 font-semibold border-t border-gray-200 mt-2 pt-2">
                      <span>Total</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition-all flex items-center justify-center"
                  >
                    <Calendar size={20} className="mr-2" />
                    Book Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
