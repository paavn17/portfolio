import React, { useRef } from "react";
import Crds from "./Crds";

function Fore() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dignissimos.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro perferendis nemo commodi atque quis, repudiandae reiciendis blanditiis consequuntur in illum.",
      filesize: ".7mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime explicabo commodi quisquam alias reprehenderit repudiandae.",
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
