const Slider = ({ images, currentIndex }) => {
  return images.map((img, index) => {
    if (index === currentIndex) {
        return  <div className="w-6 h-2 rounded-full bg-[#3d5af1]"></div>;
    } else {
       return <div className="w-2 h-2 rounded-full bg-[#ededed]"></div>;
    }
  });
};

export default Slider;
