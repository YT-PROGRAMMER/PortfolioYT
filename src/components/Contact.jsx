import React from 'react'
import img1 from "../assets/image/Group 2372.png"
import img2 from "../assets/image/Vector 186.png"
import { Email } from './Email';
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="right">
          <h1>
            Get in <span>Touch</span>
          </h1>
          <img src={img1} alt="error" className="img1" />
          <img src={img2} alt="error" className="img2" />
        </div>
        <Email />
      </div>
        <footer>
            <a href="https://t.me/yousseftarekd0"><i class="fa-brands fa-telegram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100092417117506&amp;mibextid=ZbWKwL"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://wa.me/qr/MCMZGSHJATHOA1"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.tiktok.com/@0_yt_programmer_8?_t=ZS-8MGuOBJqbg&amp;_r=1"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://www.linkedin.com/in/yousseftarek~"><i class="fa-brands fa-linkedin"></i></a>
        </footer>
    </div>
  );
}

export default Contact