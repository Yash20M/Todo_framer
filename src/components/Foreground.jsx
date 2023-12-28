import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      description: "Hey this is yash Mahall and this list of cards.",
      fileSize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description: "Hey this is yash Mahall and this list of cards.",
      fileSize: "0.9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now ",
        tagColor: "green",
      },
    },
    {
      description: "Hey this is yash Mahall and this list of cards.",
      fileSize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Dhattto Jawawni",
        tagColor: "blue",
      },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-index-[3] w-full h-full bg-sky-800/200 flex gap-10 flex-wrap p-5 foregorund"
      >
        {/* <Card /> */}
        {data.map((item, index) => (
          <>
            <Card data={item} key={index} reference = {ref}/>
          </>
        ))}
      </div>
    </>
  );
};

export default Foreground;
