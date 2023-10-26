import React from "react";

export function GoogleMap() {
  return (
    <iframe
      className="googleMap"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464675032513!2d-0.12124654576952455!3d51.503189711011615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2sby!4v1698086682626!5m2!1sen!2sby"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
