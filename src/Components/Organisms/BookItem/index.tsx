import React from "react";
import { BookItemStyle, BookItemDetails, PriceAndStock } from "./Style";
import Typography from "Components/Atoms/Typography/Index";
import BookCover from "Components/Atoms/BookCover/Index";
import LikesAndRating from "../LikesAndRating/Index";
import Button from "Components/Atoms/Button/Index";
import Cart from "Components/Atoms/SvgIcons/Cart";
import { Link } from "react-router-dom";
import { Props } from "./interface";
import { getDataNames } from "Utils/helper";
import cartStore from "store/CartStore";
import { useMutation } from "@apollo/client";
import { UPDATE_BOOK_AVAILABLE_COPY } from "Queries/Index";

const BookItem: React.FC<Props> = (props) => {
  const { addToCart, getAvailableCopy } = cartStore();
  const { data } = props;
  const [updateItem] = useMutation(UPDATE_BOOK_AVAILABLE_COPY, {
    variables: { id: data.id, available_copies: getAvailableCopy(data) },
    onCompleted({ updateItem }) {
      if (updateItem) {
        console.log("Updated");
      }
    },
  });

  return (
    <Link to={`details/${data.id}`} className="link-default">
      <BookItemStyle {...props}>
        <BookCover
          size="md"
          image={data?.image_url}
          className="shring-0"
          effectonhover
        />

        <BookItemDetails className="text-truncate">
          <Typography
            as="h5"
            className="heading-2 mb-5 title text-truncate"
            text={data?.title}
            title={data?.title}
          />
          <Typography
            as="p"
            className="paragraph-2 authors"
            text={getDataNames(data?.authors)}
          />
          <Typography
            as="p"
            className="paragraph-2 category"
            text={getDataNames(data?.genres)}
          />
          <LikesAndRating
            className="my-15"
            likes={data?.likes}
            rating={data?.rating}
          />
          <PriceAndStock className="mb-10">
            <Typography
              as="p"
              className="paragraph-2"
              text={`$ ${data?.price}`}
            />
            <Typography
              as="p"
              // className="paragraph-1 stock-text"
              className={`paragraph-1 display-block ${
                data?.available_copies ? "stock-text" : "no-stock-text"
              }`}
              text={
                data?.available_copies
                  ? `${data?.available_copies} Copies Available`
                  : "Out os stock"
              }
            />
          </PriceAndStock>
          <div>
            <Button
              className="btn-add-to-stock"
              disabled={!data?.available_copies}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(data);
                updateItem();
              }}
            >
              <Cart width="13.74" height="15" />
              Add to Cart
            </Button>
          </div>
        </BookItemDetails>
      </BookItemStyle>
    </Link>
  );
};

export default BookItem;
