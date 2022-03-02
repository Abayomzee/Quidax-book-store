import React from "react";
// import { BookWithOverlayStyle } from "./Style";
import BookOverlay from "Components/Organisms/BookOverlay/Index";
import BookCover from "Components/Atoms/BookCover/Index";
import { Link } from "react-router-dom";
import { Props } from "./interface";

const BookWithOverlay: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <Link to={`details/${data.id}`} className="link-default">
      <BookCover
        size="lg"
        image={data?.image_url}
        className="shrink-0 has-shadow"
      >
        <BookOverlay className="overlay" data={data} />
      </BookCover>
    </Link>
  );
};

export default BookWithOverlay;
