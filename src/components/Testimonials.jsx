import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#FFDD32]">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied property owners and tenants
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FFDD32]/20" />
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                  <img alt="Anjali Gupta profile" className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1691030255899-cccde3a4e04f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Anjali Gupta</p>
                <p className="text-sm text-gray-600">Property Owner</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFDD32] text-[#FFDD32]" />
              ))}
            </div>
            <p className="text-gray-700 italic">"ClickNBook made listing my properties so easy! I found quality tenants within days and the whole process was seamless. Highly recommend!"</p>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FFDD32]/20" />
            <div className="flex items-center gap-4 mb-4">
               <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                  <img alt="Rajesh Kumar profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=906&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Rajesh Kumar</p>
                <p className="text-sm text-gray-600">Tenant</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFDD32] text-[#FFDD32]" />
              ))}
            </div>
            <p className="text-gray-700 italic">"I found my dream apartment through ClickNBook. The search filters were amazing and the virtual tours saved me so much time. Best rental platform ever!"</p>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FFDD32]/20" />
            <div className="flex items-center gap-4 mb-4">
               <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                  <img alt="Priya Patel profile" className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Priya Patel</p>
                <p className="text-sm text-gray-600">Property Owner</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFDD32] text-[#FFDD32]" />
              ))}
            </div>
            <p className="text-gray-700 italic">"The tenant screening process gave me complete peace of mind. I love the transparency and support from the ClickNBook team. Couldn't be happier!"</p>
          </motion.div>

          {/* Testimonial 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FFDD32]/20" />
            <div className="flex items-center gap-4 mb-4">
               <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                  <img alt="Vikram Singh profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607081692251-d689f1b9af84?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Vikram Singh</p>
                <p className="text-sm text-gray-600">Tenant</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFDD32] text-[#FFDD32]" />
              ))}
            </div>
            <p className="text-gray-700 italic">"From browsing to moving in, everything was so smooth. The customer support was excellent and I got a great deal on my new place. Thank you ClickNBook!"</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;