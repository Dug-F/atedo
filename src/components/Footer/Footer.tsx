//add footer that contains ready to get in touch - contact us which is an email link
// a section with icon links to instagram and tiktok and an email icon
// include a quick link back to top of page called home, a link to the projects section, where the videos are, a gallery link and an about section

import React from "react";
import ScrollIntoView from "@/components/scrollIntoView/ScrollIntoView";
import Image from "next/image";
import InstagramIcon from "./InstagramIcon";
import TiktokIcon from "./TiktokIcon";
import EmailIcon from "./EmailIcon";

const Footer = () => {
  return (
    <footer className="footer mx-auto px-4">
      <ScrollIntoView>
        <h2 className="text-3xl font-bold mt-8 mb-4">READY TO GET IN TOUCH?</h2>
        <h3 className="text-3xl font-bold mt-8 mb-4 text-center">
          <a href="/" className="text-2xl font-bold border-red-500 border-b-4">
            CONTACT US
          </a>
        </h3>

        <section className="flex justify-center items-center space-x-3">
          <EmailIcon />
          <InstagramIcon />
          <TiktokIcon />
        </section>
        <section className="flex flex-row items-center justify-center text-xl space-x-10 mt-8 pb-8">
          <a href="/" className="my-2">
            Home
          </a>
          <a href="#showreels" className="my-2">
            Projects
          </a>
          <a href="/gallery" className="my-2">
            Gallery
          </a>
          <a href="#about" className="my-2">
            About
          </a>
        </section>
      </ScrollIntoView>
    </footer>
  );
};

export default Footer;
