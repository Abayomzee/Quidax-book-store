import Typography from "Components/Atoms/Typography/Index";
import React from "react";
import LikesAndRating from "Components/Organisms/LikesAndRating/Index";
import { BookOverlayStyle } from "./Style";
import { Props } from "./interface";
import { getDataNames } from "Utils/helper";

const BookOverlay: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <BookOverlayStyle {...props}>
      <Typography
        as="span"
        className={`paragraph-3 mb-10 display-block ${
          data?.available_copies ? "stock-text" : "no-stock-text"
        }`}
        text={data?.available_copies ? "Available" : "Out of stock"}
      />
      <Typography as="h5" className="heading-3" text={data?.title} />
      <Typography
        as="p"
        className="paragraph-2 color-white"
        text={getDataNames(data?.authors)}
      />

      <Typography as="h5" className="heading-4 mt-25" text=" Genre" />
      <Typography
        as="p"
        className="paragraph-2 color-white"
        text={getDataNames(data?.genres)}
      />

      <Typography as="h5" className="heading-4 mt-25" text=" Tags" />
      <Typography
        as="p"
        className="paragraph-2 color-white"
        text="Creativity, Better Living"
      />

      <LikesAndRating
        className="mt-40"
        color="white"
        likes={data?.likes}
        rating={data?.rating}
      />
    </BookOverlayStyle>
  );
};

export default BookOverlay;
