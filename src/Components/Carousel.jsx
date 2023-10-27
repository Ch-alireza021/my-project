import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "./Slider";
const Carousel = () => {
  const images = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
    "./images/5.png",
    "./images/6.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const previous =
    currentIndex - 1 >= 0 ? (
      <img
        src={images[currentIndex - 1]}
        alt=""
        width={"144px"}
        height={"192px"}
      />
    ) : (
      <div className="w-[144px] h-[192px]"></div>
    );
  const next =
    currentIndex + 1 < images.length ? (
      <img
        src={images[currentIndex + 1]}
        alt=""
        width={"144px"}
        height={"192px"}
      />
    ) : (
      <div className="w-[144px] h-[192px]"></div>
    );
  const handleNext = () => {
      setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? prevIndex : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? prevIndex : prevIndex - 1
    );
  };
// ----------------------------------------------------
const [direction, setDirection] = useState('left');

const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };


  
  return (
    <div className="bg-white w-[960px] h-[500px] rounded-[40px] flex flex-col items-center justify-between py-[38px] relative">
      <div className="w-[720px] h-full flex flex-col gap-5 pt-10 ">
        <div className="flex  justify-between items-center  ">
          <div
            onClick={handlePrevious}
            className="bg-slate-300  py-4 px-2 rounded-[28px] hover:bg-blue-700 "
          >
            <img src="./icon/left.svg" alt="" />
          </div>
          <div className="flex gap-10 items-center ">
            {previous}

            {/* <img
              src={images[currentIndex]}
              alt=""
              width={"192px"}
              height={"256px"}
            /> */}

            <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            
          />
        </AnimatePresence>

            {next}
          </div>
          <div
            onClick={handleNext}
            className="bg-slate-300  py-4 px-2 rounded-[28px] hover:bg-blue-700"
          >
            <img src="./icon/right.svg" alt="" />
          </div>
        </div>
        <div className=" flex gap-1 w-full justify-center">
            <Slider images={images} currentIndex={currentIndex} />
        </div>
      </div>
      <button className="w-[305px] bg-[#22D1EE] h-[56px] bg-gradient-to-r from-[#3D5AF1] to-[#22D1EE] font-bold text-[20px] text-white rounded-full ">
        Follow
      </button>
      <div className="absolute bottom-[51px] right-[-87px]  w-fit h-fit">
        <img src="./icon/Ellipse1.svg" alt=""  />
      </div>
      <div className="absolute top-[88px] left-[-21px]  w-[65px] h-[65px]">
        <img src="./icon/Ellipse1.svg" alt=""  />
      </div>
    </div>
  );
};
export default Carousel;
