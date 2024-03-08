import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CustomSlider.css";
import slidePic from "../../../assets/pictures/sliderpic.jpg";
import moveNext from "../../../assets/svgs/moveNext.svg";
import moveBack from "../../../assets/svgs/moveBack.svg";

function CustomSlider() {
  const swiper = useSwiper();

  const handlePrevBtn = () => {
    swiper.slidePrev();
  };

  const handleNextBtn = () => {
    swiper.slideNext();
  };

  return (
    <div className="flex w-[333px] sm:w-[580px] items-center relative bottom-[70px]  ">
      <img
        className="custom-prev cursor-pointer absolute left-[-25px] z-10 mt-[95px]"
        src={moveBack}
        alt="move back"
        onClick={handlePrevBtn}
      />
      <Swiper
        order={2}
        spaceBetween={50}
        slidesPerGroupSkip={3}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".custom-next",

          prevEl: ".custom-prev",
        }}
        loop={true}
        modules={[Keyboard, Navigation, Scrollbar, Pagination]}
        className="Swiper"
      >
        <SwiperSlide>
          <img
            className=" w-[100%] h-[100%] object-cover"
            src={slidePic}
            alt="this is a slider image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" w-[100%] h-[100%] object-cover"
            src={slidePic}
            alt="this is a slider image"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={slidePic}
            className=" w-[100%] h-[100%] object-cover"
            alt="this is a slider image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={slidePic}
            className=" w-[100%] h-[100%] object-cover"
            alt="this is a slider image"
          />
        </SwiperSlide>
      </Swiper>

      <img
        className="custom-next cursor-pointer absolute right-[-36px] z-10 mt-[95px]"
        src={moveNext}
        alt="move next"
        onClick={handleNextBtn}
      />
      <div className="custom-pagination"></div>
    </div>
  );
}

export default CustomSlider;
