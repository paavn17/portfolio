import React, { useRef } from "react";
import Crds from "./Crds";

function Fore() {
  const ref = useRef(null);

  const data = [
    {
      Title:"Sealed-Ideas",
      desc: "Developed a full-stack platform using React for the frontend, Node.js, Express.js and MongoDBfor database management, enabling users to share innovative ideas and connect with potential investors",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      Title:"Finance-Tracker",
      desc: "Built a personal finance tracker application using React.js, designed to help users manage and track their financial expenses effectively with a clean and user-friendly interface",
      filesize: ".7mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      Title:"Scolar-Scout",
      desc: "Developed a platform using React for the frontend, Firebase for backend services, and Redux for efficient state management, enabling users to explore various scholarships across India",
      filesize: "1.2mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="z-[3] left-0 top-0 w-full h-full flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 p-4 sm:p-7 justify-center"
    >
      {data.map((item, index) => (
        <Crds key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Fore;
