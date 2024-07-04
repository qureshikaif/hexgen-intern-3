import React from "react";

const footerLinks = [
  {
    title: "Shop",
    links: [
      "RazerStores",
      "RazerCafe",
      "Store Locator",
      "Purchase Programs",
      "Bulk Order Program",
      "Education",
      "Only at Razer",
      "RazerStore Rewards",
      "Newsletter",
    ],
  },
  {
    title: "Explore",
    links: ["Technology", "Chroma RGB", "Concepts", "Esports", "Collabs"],
  },
  {
    title: "Support",
    links: [
      "Get Help",
      "Registration & Warranty",
      "RazerStore Support",
      "RazerCare",
      "Manage Razer ID",
      "Support Videos",
      "Recycling Program",
      "Accessibility Statement",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Newsroom", "zVentures", "Contact Us"],
  },
];

const socialLinks = [
  "facebook",
  "instagram",
  "twitter",
  "youtube",
  "tiktok",
  "discord",
];

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black text-white py-6 items-center">
      <div className="flex justify-between px-32 w-full">
        <div className="flex justify-between w-3/4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 text-xs">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-gray-400 hover:underline hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-xs mb-2">Follow Us</h3>
            <ul className="flex flex-col space-y-3">
              {socialLinks.map((social) => (
                <li key={social}>
                  <a href="#">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h1 className="text-green-500 text-sm">FOR GAMERS, BY GAMERS.™</h1>
      </div>
      <div className="border-t border-gray-600 my-4 w-10/12 "></div>
      <div className="flex justify-between items-center text-gray-400 text-xs w-10/12">
        <div className="flex space-x-16">
          <p>Copyright &copy; 2024 Razer Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            {[
              "Site Map",
              "|",
              "Legal Terms",
              "|",
              "Privacy Policy ",
              "|",
              "Cookie Settings",
            ].map((item) =>
              item === "|" ? (
                <span key={item}>{item}</span>
              ) : (
                <a
                  key={item}
                  href="#"
                  className="hover:underline hover:text-white"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
        <p>
          <span className="font-semibold">United States | </span>
          <a href="#" className="hover:underline">
            Change Location &gt;
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
