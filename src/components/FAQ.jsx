import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Box,
  Chip
} from '@mui/material';
import { ChevronDown, HelpCircle, Clock, Wifi, MapPin, PawPrint, Users } from 'lucide-react';

const FaqItem = ({ title, icon, children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  
  return (
    <Accordion 
      expanded={expanded} 
      onChange={() => setExpanded(!expanded)}
      className="mb-4 rounded-lg border border-gray-200 shadow-sm overflow-hidden"
      elevation={0}
    >
      <AccordionSummary 
        expandIcon={<ChevronDown className="text-green-700" size={20} />}
        className={`${expanded ? 'bg-green-50' : 'bg-gray-50'} hover:bg-green-50 transition-colors duration-200`}
      >
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-green-100">
            {icon}
          </div>
          <Typography className="font-semibold text-gray-800">{title}</Typography>
          {defaultExpanded && (
            <Chip 
              label="Popular" 
              size="small" 
              className="bg-green-100 text-green-800 text-xs ml-2"
            />
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails className="bg-white p-4 pt-2">
        <Typography className="text-gray-700">
          {children}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const EnhancedFAQSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <Typography variant="h4" component="h2" className="font-bold mb-3">
            Frequently Asked Questions
          </Typography>
          <div className="w-16 h-1 bg-green-700 mx-auto mb-4"></div>
          <Typography variant="body1" className="text-gray-600 max-w-xl mx-auto">
            Find answers to common questions about our farmhouse and your stay
          </Typography>
        </div>

        <Box className="relative">
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-100 z-0"></div>
          
          <FaqItem 
            title="What is the check-in/check-out time?" 
            icon={<Clock size={16} className="text-green-700" />}
            defaultExpanded={true}
          >
            Check-in time is 4:00 PM and check-out time is 11:00 AM. Early check-in or late check-out may be 
            available upon request, depending on our schedule. Please contact us at least 24 hours in advance 
            to inquire about flexibility with check-in/out times.
          </FaqItem>
          
          <FaqItem 
            title="Is the farmhouse pet-friendly?" 
            icon={<PawPrint size={16} className="text-green-700" />}
          >
            Yes, we allow well-behaved dogs with a maximum of 2 dogs per booking. There is an additional pet 
            fee of $50 per stay. Please let us know in advance if you'll be bringing your furry friend(s) so 
            we can prepare accordingly.
          </FaqItem>
          
          <FaqItem 
            title="Is there WiFi at the farmhouse?" 
            icon={<Wifi size={16} className="text-green-700" />}
          >
            Yes, complimentary high-speed WiFi is available throughout the farmhouse. The network name and 
            password will be provided in your welcome packet upon arrival.
          </FaqItem>
          
          <FaqItem 
            title="How far is the nearest town?" 
            icon={<MapPin size={16} className="text-green-700" />}
          >
            The nearest town with shops, restaurants, and groceries is approximately 15 minutes (7 miles) 
            from the farmhouse. We provide a detailed guide of local amenities in the welcome book.
          </FaqItem>
          
          <FaqItem 
            title="Is the property suitable for children?" 
            icon={<Users size={16} className="text-green-700" />}
          >
            Yes, our farmhouse is family-friendly. We provide a highchair and pack-n-play upon request. 
            The property has plenty of space for children to play, but please note that there is a pond on 
            the property so children should be supervised at all times.
          </FaqItem>
          
          <div className="text-center mt-8">
            <button  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors duration-200 text-sm font-medium">
              <HelpCircle size={16} />
              Ask a Question
            </button>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default EnhancedFAQSection;