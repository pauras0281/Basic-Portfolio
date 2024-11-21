import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="heading">Hire Me</h1>
      <div className="contact-container">
        <div className="contact-card">
          <i class="fa-brands fa-whatsapp"></i>
          <a href="https://wa.me/+918605578198" target="_blank">+91 8605578198</a>          
        </div>
        <div className="contact-card">
          <i class="fa-solid fa-phone"></i>
           <a href="">+91 9209983485</a>
        </div>
        <div className="contact-card">
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:pauraslokhande9623@gmail.com" target="_blank">pauraslokhande9623@gmail.com</a>
          
        </div>
        <div className="contact-card">
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:wenpauras@gmail.com" target="_blank">wenpauras@gmail.com</a>
        </div>
        <div className="contact-card">
        <i class="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/pauras-lokhande-681210301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Yash Lokhande</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
