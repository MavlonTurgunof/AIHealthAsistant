import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <footer className="mt-10 border-t border-gray-300 text-sm text-gray-700">
        <div className="py-10 grid grid-cols-4">
          {/* Logo & Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-start">
              <img src="/img/Logo.png" alt="" className="h-10 w-10" />
              <Link to="/">
                <h1 className="font-bold text-[15px] text-green-500">
                  Doctor
                  <span className="font-bold text-[15px] text-blue-500">
                    Modern
                  </span>
                </h1>
              </Link>
            </div>
            <p>100005, Uzbekistan, Tashkent, st. Sairam 25</p>
            <a
              href="mailto:info@med24.uz"
              className="text-blue-600 hover:underline"
            >
              info@med24.uz
            </a>
            <a
              href="tel:+998712310518"
              className="text-blue-600 block hover:underline"
            >
              +998(71)231-05-18
            </a>
          </div>

          {/* For Patients */}
          <div className="pl-20">
            <h3 className="font-bold mb-2">For patients</h3>
            <ul className="">
              <li>Clinics</li>
              <li>Diagnostic centers</li>
              <li>Laboratories</li>
              <li>Maternity hospitals</li>
              <li>Directory of diseases</li>
              <li>Symptoms Directory</li>
              <li>How to use the site</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Reference */}
          <div className="pl-20">
            <h3 className="font-bold mb-2">Reference</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Press about us</li>
              <li>Reviews about us</li>
              <li>Contacts</li>
              <li>For clinics</li>
              <li>For doctors</li>
              <li>Frequently asked questions</li>
              <li>Posting on the website</li>
              <li>User Agreement</li>
            </ul>
          </div>

          {/* Services */}
          <div className="pl-20">
            <h3 className="font-bold mb-2">Services</h3>
            <ul className="space-y-1">
              <li>Clinics</li>
              <li>News</li>
              <li>Apteka.uz</li>
              <li>Avitsenna.uz</li>
            </ul>
          </div>
        </div>

        {/* Bottom disclaimer & copyright */}
        <div className="border-t border-gray-300 text-xs text-gray-500 py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="flex items-start gap-1">
            The information provided on the site cannot be used to make a
            diagnosis, prescribe treatment and does not replace a doctor's
            appointment.
          </p>
          <p>Westminster International University in Tashkent</p>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
