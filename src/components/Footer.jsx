import React from 'react'
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function Footer() {
    const iconStyles = {
        base: "flex-shrink-0 w-10 h-10 text-red-500",
      };
    
      const contactInfo = [
        {
          icon: <FiPhone className={iconStyles.base} />,
          label: "Phone nos",
          details: ["+91 96520 39647", "+91 79953 58293"],
        },
        {
          icon: <FiMail className={iconStyles.base} />,
          label: "Email",
          details: ["pavandamarouthu@gmail.com"],
        },
        {
          icon: <FiMapPin className={iconStyles.base} />,
          label: "Location",
          details: ["31-25-55, Sri Krishna Nagar road no-2, Kurmannapalem, Visakhapatnam"],
        },
      ];
  return (
    <section className="py-10  sm:py-16 lg:py-20 text-zinc-400 ">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-x-8 xl:gap-x-20">
        {contactInfo.map((item, idx) => (
          <div key={idx} className="flex items-start">
            {item.icon}
            <div className="ml-4 sm:ml-6">
              <p className="text-sm sm:text-base font-medium">
                {item.label}
              </p>
              {item.details.map((detail, detailIdx) => (
                <p
                  key={detailIdx}
                  className="mt-2 sm:mt-4 text-lg sm:text-xl font-medium"
                >
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Footer