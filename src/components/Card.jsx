import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{scale:1.2}}
        dragElastic={0.0001}
        className="w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-5 py-10 overflow-hidden relative flex-shrink-0"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">
          {data.description}
        </p>
        <div className="footer absolute bottom-0  w-full  left-0">
          <div className="flex items-center justify-between mb-3 px-8 py-3">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose />
              ) : (
                <LuDownload color="#fff" size=".7em" />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
            <div
              className={`tag py-4 w-full ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              }  flex justify-center items-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
