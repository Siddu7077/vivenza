import React from "react";
import { MapPin, Phone, Mail, Clock, Users, Star, Award, Shield } from "lucide-react";
import five from '../assets/5.jpeg'

const About = () => {
  return (
    <div className="min-h-screen mt-15 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-green-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Vivenza Farmhouse</h1>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experience luxury, elegance and world-class hospitality in the heart of Telangana
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
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
              {/* Placeholder for image */}
             <div className="rounded-lg shadow-lg w-full h-96 bg-gray-300 overflow-hidden">
  <img
    src={five}
    alt="Farmhouse Exterior"
    className="w-full h-full object-cover"
  />
</div>

            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                A Premium Destination for Events & Gatherings
              </h3>
              <p className="text-gray-700 mb-4">
                Established in 2018, Vivenza Farmhouse has quickly become the most sought-after venue for luxury events and gatherings in Moinabad, Telangana. Sprawling across 10 acres of meticulously landscaped property, our farmhouse combines traditional charm with contemporary luxury to create an unforgettable experience.
              </p>
              <p className="text-gray-700 mb-4">
                Our vision was to create more than just a venue—we wanted to build a destination where memories are crafted with care. Every corner of Vivenza has been thoughtfully designed to provide an elegant backdrop for celebrations of all kinds, from intimate family gatherings to grand corporate events.
              </p>
              <p className="text-gray-700 mb-4">
                The architecture draws inspiration from Mediterranean and contemporary design principles, featuring expansive open spaces, high ceilings, and large windows that flood the interiors with natural light. The seamless integration between indoor and outdoor spaces allows for versatile event planning regardless of weather conditions.
              </p>
              <p className="text-gray-700 mb-6">
                Located just 30 minutes from Hyderabad's Outer Ring Road, Vivenza offers the perfect balance of accessibility and seclusion. Our property is surrounded by lush greenery, creating a serene environment away from the hustle and bustle of city life.
              </p>

              <div className="flex items-center text-green-800">
                <MapPin size={20} className="mr-2" />
                <span>Located at JBIT College, MURTHUZAGUDA, MOINABAD, R.R Dist - 501504</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From vision to reality, the journey of creating Telangana's premier event destination
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              The story of Vivenza begins with a dream to transform an undeveloped plot of land into a haven of luxury and celebration. Our founder, inspired by international resorts and heritage properties, envisioned a space where people could create lasting memories in an environment that seamlessly blends nature with sophisticated amenities.
            </p>
            <p className="text-gray-700 mb-4">
              After acquiring the land in 2016, two years of meticulous planning and construction followed. Every detail, from the positioning of the buildings to maximize natural views, to the selection of sustainable materials that would age gracefully, was carefully considered by our team of architects and designers.
            </p>
            <p className="text-gray-700 mb-4">
              Since opening our doors in 2018, we have hosted over 500 successful events, from celebrity weddings to international corporate retreats. Each year, we continue to enhance our offerings and facilities, guided by our commitment to providing unparalleled experiences for our guests.
            </p>
            <p className="text-gray-700">
              Today, Vivenza stands as a testament to our dedication to excellence and our passion for creating beautiful spaces where life's most precious moments can be celebrated in style.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Luxury Accommodations</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Experience comfort and elegance in our thoughtfully designed spaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="mr-2 text-green-700" size={24} />
                Room Details
              </h3>
              <p className="text-gray-700 mb-4">
                Vivenza Farmhouse features 8 luxurious air-conditioned bedrooms, each with its own distinct character and charm. Our accommodations include:
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• 4 Premium Suites with king-size beds and private balconies</li>
                <li>• 4 Deluxe Rooms with queen-size beds and garden views</li>
                <li>• All rooms feature attached bathrooms with premium fixtures</li>
                <li>• Climate control systems for year-round comfort</li>
                <li>• High-thread-count linens and plush towels</li>
                <li>• Smart TVs with streaming capabilities</li>
                <li>• In-room refrigerators and coffee/tea facilities</li>
              </ul>
              <p className="text-gray-700">
                Our 4 spacious halls can be configured for various functions, from intimate gatherings to large presentations. The main banquet hall can accommodate up to 300 guests for a seated dinner, while the combined indoor spaces can host up to 500 attendees for conferences and celebrations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Star className="mr-2 text-green-700" size={24} />
                Premium Amenities
              </h3>
              <ul className="text-gray-700 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-700 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Resort-style Swimming Pool:</span> Our 30x40 sq. ft infinity edge swimming pool features temperature control, underwater lighting, and a shallow lounging area for relaxation.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Expansive Event Lawn:</span> The 50x60 sq. ft manicured lawn provides a picturesque setting for outdoor ceremonies, receptions, and activities with capacity for up to 500 guests.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Gourmet Kitchen:</span> Fully equipped professional kitchen facilities for catering teams, with the option to arrange for our in-house chef services for smaller gatherings.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Entertainment Systems:</span> State-of-the-art sound systems throughout the property, projection capabilities, and customizable lighting for creating the perfect ambiance.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Recreational Facilities:</span> Indoor games room, outdoor sports area, meditation garden, and bonfire pit for diverse entertainment options.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Capabilities</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we create unforgettable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Weddings & Receptions</h3>
              <p className="text-gray-700">
                Our picturesque setting offers the perfect backdrop for your special day. With multiple ceremony locations, versatile reception spaces, and comprehensive wedding packages, we handle every detail from floral arrangements to catering and accommodation for the wedding party.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Corporate Retreats</h3>
              <p className="text-gray-700">
                Combine business with pleasure in our fully-equipped meeting spaces. We offer team-building activities, executive accommodations, and customized catering options. Our secluded location promotes focus while providing all necessary technology for productive sessions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Private Celebrations</h3>
              <p className="text-gray-700">
                From milestone birthdays to anniversary parties, family reunions, and bachelor/bachelorette gatherings, we create personalized experiences tailored to your vision. Our flexible spaces accommodate both intimate gatherings and extravagant celebrations with equal attention to detail.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Event Services Include:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="text-gray-700 space-y-2">
                <li>• Dedicated event coordinator</li>
                <li>• Custom floor plan design</li>
                <li>• Premium catering partnerships</li>
                <li>• Audiovisual equipment</li>
                <li>• Decorative elements and styling</li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li>• Professional photography services</li>
                <li>• Entertainment booking assistance</li>
                <li>• Transportation arrangements</li>
                <li>• Accommodation packages</li>
                <li>• Post-event cleaning services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policies and Booking */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Booking Information</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Everything you need to know about reserving your experience at Vivenza
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 text-green-700" size={24} />
                Home Rules and Policies
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li>• 50% of the total amount is required for booking confirmation, with the remaining balance and Rs.10,000 security deposit (refundable) due at check-in.</li>
                <li>• In case of property damage or late checkout, the security deposit will not be refunded.</li>
                <li>• Every additional guest beyond the agreed capacity will be charged Rs.1,000 per person.</li>
                <li>• Noise levels must be maintained at appropriate levels, especially after 10:00 PM.</li>
                <li>• CCTV cameras are present in exterior areas of the property for security.</li>
                <li>• Any damage or loss to property must be paid for immediately or will be deducted from the security deposit.</li>
                <li>• Every guest must carry a government-approved ID proof.</li>
                <li>• No or partial refund for cancellation/postponement once booking is confirmed.</li>
                <li>• On public holidays and special occasions, premium rates apply.</li>
                <li>• Additional service personnel (cooks, musicians, event staff, caterers) must be informed about at the time of booking.</li>
                <li>• Illegal, prohibited, or inappropriate activities are strictly forbidden.</li>
                <li>• Hookah and prohibited substances are not allowed; violation will result in immediate eviction.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2 text-green-700" size={24} />
                Availability & Contact Information
              </h3>
              <p className="text-gray-700 mb-4">
                Vivenza Farmhouse is available for bookings throughout the year. We recommend reserving your preferred dates well in advance, especially for weekend events and during peak season (October through February).
              </p>
              <p className="text-gray-700 mb-6">
                Our dedicated booking team is available to assist you with inquiries, schedule property tours, and help plan your event to perfection. We invite you to visit Vivenza by appointment to experience our beautiful property firsthand.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-green-800">
                  <Phone size={20} className="mr-3" />
                  <span>+91 9876543210 / +91 9876543211</span>
                </div>
                <div className="flex items-center text-green-800">
                  <Mail size={20} className="mr-3" />
                  <span>bookings@vivenzafarmhouse.com</span>
                </div>
                <div className="flex items-center text-green-800">
                  <MapPin size={20} className="mr-3" />
                  <span>JBIT College, MURTHUZAGUDA, MOINABAD, R.R Dist - 501504</span>
                </div>
                <div className="flex items-center text-green-800">
                  <Clock size={20} className="mr-3" />
                  <span>Office Hours: 9:00 AM - 8:00 PM (Monday-Sunday)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Hear from those who have experienced Vivenza's exceptional hospitality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "We hosted our daughter's wedding at Vivenza and it exceeded all our expectations. The staff was incredible, the venue breathtaking, and our guests are still talking about it months later. Worth every rupee!"
              </p>
              <div className="font-medium">
                <p className="text-gray-900">Priya & Rahul Sharma</p>
                <p className="text-green-700">Wedding Reception, December 2024</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Our company's annual retreat at Vivenza was a tremendous success. The accommodations were luxurious, the meeting facilities top-notch, and the service impeccable. The perfect blend of professional and relaxed atmosphere."
              </p>
              <div className="font-medium">
                <p className="text-gray-900">Aditya Kapoor</p>
                <p className="text-green-700">CTO, Nexus Technologies, March 2024</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I surprised my wife with a 40th birthday celebration at Vivenza, and it was magical. From the poolside party to the overnight stay in the luxury suite, everything was handled with impeccable attention to detail."
              </p>
              <div className="font-medium">
                <p className="text-gray-900">Vikram Malhotra</p>
                <p className="text-green-700">Birthday Celebration, August 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Award className="mx-auto text-green-700 mb-3" size={48} />
              <h3 className="font-semibold">Best Luxury Venue</h3>
              <p className="text-gray-700">Telangana Tourism, 2023</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto text-green-700 mb-3" size={48} />
              <h3 className="font-semibold">Excellence in Hospitality</h3>
              <p className="text-gray-700">South India Hotel Awards, 2022</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto text-green-700 mb-3" size={48} />
              <h3 className="font-semibold">Top Wedding Venue</h3>
              <p className="text-gray-700">WeddingSutra, 2024</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto text-green-700 mb-3" size={48} />
              <h3 className="font-semibold">Eco-Friendly Property</h3>
              <p className="text-gray-700">Green Business Council, 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;