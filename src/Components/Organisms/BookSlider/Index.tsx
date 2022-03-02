import React from "react";
import BookWithOverlay from "Components/Organisms/BookWithOverlay/Index";

import Slider from "react-slick";
import { CenterExtended } from "Styles/layouts/Center";

import { Props } from "./interface";

const BookSlider: React.FC<Props> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { data } = props;
  // const { loading, error, data } = useQuery(GET_FEATURED_BOOKS);

  return (
    <CenterExtended>
      <Slider {...settings}>
        {data?.books &&
          data.books.map((book: object, index: number) => (
            <BookWithOverlay data={book} key={index} />
          ))}
      </Slider>
    </CenterExtended>
  );
};

export default BookSlider;
