import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const paragraphs = [
  "She Can Foundation was founded by a group of individuals who shared a common vision of creating a world where every woman has the opportunity to thrive and succeed.",
  "The idea for the organization was born out of a desire to make a real difference in the lives of women in communities across the globe.",
  "We recognized that there are countless barriers that prevent women from reaching their full potential, and we wanted to create an organization that could help break down those barriers and provide women with the resources and support they need to succeed.",
  "With a shared passion and a determination to create positive change, we set out to make our vision a reality, and She Can Foundation was born."
];

export default function OurStory() {
  return (
    <section className="py-20 px-6 bg-[#f6fafe] font-cursive">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-8 text-pink-600 drop-shadow-md"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
        >
          Our Story
        </motion.h2>

        {paragraphs.map((para, i) => (
          <motion.p
            key={i}
            className="text-[#131519] text-2xl mb-6 leading-relaxed tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={textVariants}
            custom={i + 1}
          >
            {para}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
