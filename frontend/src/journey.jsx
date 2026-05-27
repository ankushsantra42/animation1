import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

// 1. The Individual Timeline Point Component
const TimelinePoint = ({ title, description, side, isFirst, isLast }) => {
  // Determine if the card slides in from the left or the right
  const slideInX = side === "left" ? -50 : 50;

  return (
    <div className={`relative flex items-center justify-between w-full ${isFirst ? "mt-0" : "mt-64"} ${isLast ? "mb-0" : ""}`}>
      
      {/* Left Content Area */}
      <div className="w-5/12 flex justify-end pr-8">
        {side === "left" && (
          <motion.div
            initial={{ opacity: 0, x: slideInX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5, once: false }} // Triggers when 50% in view
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 bg-slate-800 text-white rounded-xl shadow-lg w-full text-right"
          >
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-slate-300">{description}</p>
          </motion.div>
        )}
      </div>

      {/* Center Dot (The Point on the Line) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 border-4 border-slate-900 rounded-full z-10"></div>

      {/* Right Content Area */}
      <div className="w-5/12 pl-8">
        {side === "right" && (
          <motion.div
            initial={{ opacity: 0, x: slideInX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 bg-slate-800 text-white rounded-xl shadow-lg w-full text-left"
          >
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-slate-300">{description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// 2. The Main Journey Container
export default function EducationJourney() {
  const containerRef = useRef(null);

  // Hook into the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Starts drawing when top hits center of viewport
  });

  return (
    <section className="bg-slate-900 min-h-screen py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-32">My Educational Journey</h2>
        
        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full pb-10">
          
          {/* Faded Background Line (The "Track") */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-700 transform -translate-x-1/2"></div>

          {/* Glowing Animated Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          {/* The 3 Journey Points */}
          <TimelinePoint 
            title="Early Schooling" 
            description="Built my foundational knowledge and discovered an early passion for technology and problem-solving." 
            side="left" 
            isFirst={true}
          />
          <TimelinePoint 
            title="Bachelor's Degree" 
            description="Dived deeper into core computer science concepts, algorithms, and began building my first web projects." 
            side="right" 
          />
          <TimelinePoint 
            title="Master of Computer Applications (MCA)" 
            description="Specializing in advanced full-stack development, modern web architectures, and crafting high-performance applications." 
            side="left" 
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
}