"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import Container from "@/components/layout/Container";
import { Heading } from "@/components/common/heading";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import {
  CONTACT_TITLE,
  CONTACT_LABEL,
  CONTACT_ANIMATION,
} from "./constants";

export default function Contact() {
  return (
    <Section id="contact" aria-label="Contact">
      <Container>
        <motion.div
          variants={CONTACT_ANIMATION.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-14"
        >
          {/* Section heading */}
          <motion.div
            variants={CONTACT_ANIMATION.item}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {CONTACT_LABEL}
            </span>
            <Heading as="h2" size="h2" className="text-white">
              {CONTACT_TITLE}
            </Heading>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — contact info */}
            <ContactInfo />

            {/* Right — contact form */}
            <ContactForm />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
