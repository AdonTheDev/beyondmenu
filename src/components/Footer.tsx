import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-gray-900 font-medium mb-3">Legal Information</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              GSTIN: 29AALCB0363R1ZP<br />
              FSSAI: 11223344556677<br />
              All prices are inclusive of GST
            </p>
          </div>
          <div>
            <h4 className="text-gray-900 font-medium mb-3">Hours</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Monday - Friday: 8:00 AM - 10:00 PM<br />
              Saturday - Sunday: 9:00 AM - 11:00 PM<br />
              Last order 30 minutes before closing
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} BEYOND menu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;