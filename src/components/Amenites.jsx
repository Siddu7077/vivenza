import React, { useState } from 'react';
import { 
  Wifi, Thermometer, Shield, Gamepad2, Flame, Soup, Utensils, Bath, 
  BookText, Refrigerator, Car, Tv, Music, Droplets, Dog, UtensilsCrossed, 
  Video, Battery, Dumbbell, Users,  Home, Check, ChevronRight
} from 'lucide-react';

const FarmhouseAmenities = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const propertyDetails = [
    { label: "Rooms", value: "11", icon: <Home size={24} /> },
    { label: "Capacity", value: "500", icon: <Users size={24} /> },
    { label: "Area", value: "9250 Ft²", icon: <BookText size={24} /> },
    { label: "Bathrooms", value: "9", icon: <Bath size={24} /> }
  ];

  const amenitiesCategories = {
    all: { label: "All" },
    comfort: { label: "Comfort & Convenience" },
    entertainment: { label: "Entertainment" },
    kitchen: { label: "Kitchen & Dining" },
    safety: { label: "Safety & Security" },
    recreation: { label: "Recreation & Outdoors" }
  };
  
  const amenitiesList = [
    { name: "Free WiFi", icon: <Wifi size={20} />, category: "comfort" },
    { name: "Air Conditioned", icon: <Thermometer size={20} />, category: "comfort" },
    { name: "Security Guard", icon: <Shield size={20} />, category: "safety" },
    { name: "Kids Play Area", icon: <Gamepad2 size={20} />, category: "recreation" },
    { name: "Geyser", icon: <Flame size={20} />, category: "comfort" },
    { name: "Soap", icon: <Soup size={20} />, category: "comfort" },
    { name: "Barbeque", icon: <Utensils size={20} />, category: "recreation" },
    { name: "Towel", icon: <Bath size={20} />, category: "comfort" },
    { name: "Parking", icon: <Car size={20} />, category: "comfort" },
    { name: "Television", icon: <Tv size={20} />, category: "entertainment" },
    { name: "Swimming Pool", icon: <Droplets size={20} />, category: "recreation" },
    { name: "Bonfire", icon: <Flame size={20} />, category: "recreation" },
    { name: "Gas Stove", icon: <Flame size={20} />, category: "kitchen" },
    { name: "Bathtub", icon: <Bath size={20} />, category: "comfort" },
    { name: "Carrom", icon: <BookText size={20} />, category: "entertainment" },
    { name: "Wardrobe", icon: <BookText size={20} />, category: "comfort" },
    { name: "Pet Friendly", icon: <Dog size={20} />, category: "comfort" },
    { name: "Music System", icon: <Music size={20} />, category: "entertainment" },
    { name: "Dining Area", icon: <UtensilsCrossed size={20} />, category: "kitchen" },
    { name: "CCTV", icon: <Video size={20} />, category: "safety" },
    { name: "Power Backup", icon: <Battery size={20} />, category: "safety" },
    { name: "Refrigerator", icon: <Refrigerator size={20} />, category: "kitchen" },
    { name: "Cricket Net", icon: <Dumbbell size={20} />, category: "recreation" },
    { name: "Badminton", icon: <Dumbbell size={20} />, category: "recreation" }
  ];

  const additionalAmenities = [
    "Fully stocked kitchen with modern appliances",
    "Washer and dryer",
    "Heating and air conditioning",
    "Board games and books",
    "Outdoor games",
    "Walking trails on property",
    "Welcome basket with local treats",
    "Highchair and pack-n-play available"
  ];

  const filteredAmenities = activeTab === 'all' 
    ? amenitiesList 
    : amenitiesList.filter(item => item.category === activeTab);

  return (
    <section id="amenities" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="mb-10 relative">
          <h2 className="text-3xl font-bold text-gray-800 inline-block relative">
            Amenities
            <div className="h-1 w-full bg-green-600 absolute bottom-0 left-0 rounded"></div>
          </h2>
          <p className="text-gray-600 mt-2">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        {/* Property Details Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {propertyDetails.map((detail, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="flex items-center p-4">
                <div className="bg-green-50 p-3 rounded-full mr-4">
                  <div className="text-green-600">{detail.icon}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">{detail.value}</div>
                  <div className="text-sm text-gray-500">{detail.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Filter Tabs */}
        <div className="mb-6 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 min-w-max p-1">
            {Object.entries(amenitiesCategories).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === key
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredAmenities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 flex items-center group cursor-pointer transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-center bg-green-50 text-green-600 p-2 rounded-full transition-all group-hover:text-white group-hover:bg-green-600">
                {item.icon}
              </div>
              <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Additional Amenities */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <Check size={20} className="text-green-600 mr-2" />
            Additional Amenities
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {additionalAmenities.map((item, index) => (
              <div key={index} className="flex items-center p-2 border-b border-gray-100 group hover:bg-green-50 rounded transition-all">
                <ChevronRight size={16} className="text-green-500 mr-2 transition-all group-hover:translate-x-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmhouseAmenities;