import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footerpage = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p>Blarney District</p>
            <p>Along The M4 road</p>
            <p>Near Palm Acres Residential Area</p>
            <p>Dumanis, Eaglets</p>
            <p>Post Office Box 2800</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacts</h3>
            <p>Email: Director@eaglets.ac.my</p>
            <p>mobile: 26297254923</p>
            <p>Tel: 0122345789</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Students</h3>
            <p>Student Gallery</p>
            <p>Students project</p>
            <p>Students play Ground</p>
            <p>environment</p>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-blue-600">
          <h3 className="text-xl font-bold mb-4">Find us on Social Media</h3>
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
            <Youtube className="w-6 h-6" />
          </div>
        </div>
      </footer>

    );
};
export default Footerpage