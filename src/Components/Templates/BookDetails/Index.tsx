import React from "react";
import {
  DetailsLayout,
  DetailsLayoutLeft,
  DetailsLayoutRight,
  DetailsLayoutSection,
  DetailsCategories,
  BookCategories,
  BookCategory,
  BottomButton,
} from "./Style";
import DefaultTemplate from "../Default/Index";
import BackButton from "Components/Atoms/Button/BackButton";
import { Center } from "Styles/layouts/Center";
import Typography from "Components/Atoms/Typography/Index";
import LikesAndRating from "Components/Organisms/LikesAndRating/Index";
import BookCover from "Components/Atoms/BookCover/Index";
import BlackCartButton from "Components/Atoms/Button/BlackCartButton";
import BlackCartFullButton from "Components/Atoms/Button/BlackCartFullButton";
import { useQuery } from "@apollo/client";
import { GET_BOOK_BY_ID } from "Queries/Index";
import { useParams } from "react-router-dom";
import { getDataNames } from "Utils/helper";
import moment from "moment";
import Spinner from "Components/Atoms/Spinner/Index";
import cartStore from "store/CartStore";

interface Props {}
const BookDetailsTemplate: React.FC<Props> = (props) => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_BOOK_BY_ID, {
    variables: { id },
  });
  const { addToCart } = cartStore();

  const book = data?.book || {};

  return (
    <>
      <DefaultTemplate>
        {loading ? (
          <Spinner />
        ) : (
          <DetailsLayoutSection>
            <Center>
              <DetailsLayout>
                <DetailsLayoutLeft>
                  <BackButton className="btn-back" />
                  <BookCover
                    image={book?.image_url}
                    size="lg"
                    className="mt-40 has-shadow"
                  />

                  <Typography
                    as="p"
                    className={`paragraph-1 mt-60 mobile-view ${
                      book?.available_copies ? "stock-text" : "no-stock-text"
                    }`}
                    text={
                      book?.available_copies
                        ? `${book?.available_copies || ""} Copies Available`
                        : "Out os stock"
                    }
                  />
                  <Typography
                    as="h4"
                    className="heading-7 mb-20 mobile-view"
                    text={book?.price ? `$${book?.price}` : ""}
                  />
                  {book?.available_copies ? (
                    <BlackCartButton
                      label="Add to Cart"
                      className="mobile-view"
                      onClick={() => addToCart(book)}
                    />
                  ) : (
                    ""
                  )}
                </DetailsLayoutLeft>

                <DetailsLayoutRight>
                  <Typography as="h3" className="heading-5">
                    {book?.title || ""}
                  </Typography>
                  <Typography as="h6" className="heading-6 mt-20">
                    {book?.title ? getDataNames(book?.authors) : ""}
                  </Typography>
                  <Typography
                    as="p"
                    className="paragraph-4 mt-5"
                    text={
                      book?.published_at
                        ? moment(book?.published_at).format("y")
                        : ""
                    }
                  />
                  <DetailsCategories className="my-15">
                    <LikesAndRating likes={book?.likes} rating={book?.rating} />
                    <BookCategories>
                      <BookCategory>
                        <Typography
                          as="h5"
                          className="heading-6 mt-5"
                          text="Genre"
                        />
                        <Typography
                          as="p"
                          className="paragraph-4 mt-5"
                          text={getDataNames(book?.genres)}
                        />
                      </BookCategory>
                      <BookCategory>
                        <Typography
                          as="h5"
                          className="heading-6 mt-5"
                          text="Tags"
                        />
                        <Typography
                          as="p"
                          className="paragraph-4 mt-5"
                          text={getDataNames(book?.tags)}
                        />
                      </BookCategory>
                      <BookCategory>
                        <Typography
                          as="h5"
                          className="heading-6 mt-5"
                          text="Publisher"
                        />
                        <Typography
                          as="p"
                          className="paragraph-4 mt-5"
                          text={book?.publisher ? book?.publisher : ""}
                        />
                      </BookCategory>
                      <BookCategory>
                        <Typography
                          as="h5"
                          className="heading-6 mt-5"
                          text="Released"
                        />
                        <Typography
                          as="p"
                          className="paragraph-4 mt-5"
                          text={
                            book?.published_at
                              ? moment(book?.published_at).format("LL")
                              : ""
                          }
                        />
                      </BookCategory>
                    </BookCategories>
                  </DetailsCategories>

                  <Typography as="p" className="paragraph-7 mt-5">
                    {book?.full_description ? book?.full_description : ""}
                  </Typography>
                </DetailsLayoutRight>
              </DetailsLayout>

              <BottomButton>
                <BlackCartFullButton
                  title="Add to Cart"
                  subTitle={
                    book?.available_copies
                      ? `${book?.available_copies} Copies Available`
                      : "Out os stock"
                  }
                  price={book?.price ? `$${book?.price}` : ""}
                  stockTextClassName={
                    book?.available_copies ? "stock-text" : "no-stock-text"
                  }
                  disabled={!book?.available_copies}
                  onClick={() => addToCart(book)}
                />
              </BottomButton>
            </Center>
          </DetailsLayoutSection>
        )}
      </DefaultTemplate>
    </>
  );
};

export default BookDetailsTemplate;
