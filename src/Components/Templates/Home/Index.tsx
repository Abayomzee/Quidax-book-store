import React, { useState } from "react";
import SectionDivider from "Components/Molecules/SectionDivider/Index";
import { Center } from "Styles/layouts/Center";
import BookItem from "Components/Organisms/BookItem";
import { BookGrid } from "Styles/layouts/BookGrid";
import { AllBooksSection, FeaturedBooksSection } from "./Style";
import DefaultTemplate from "../Default/Index";
import BookSlider from "Components/Organisms/BookSlider/Index";
import { useQuery } from "@apollo/client";
import { GET_BOOKS, SEARCH_BOOKS_BY_FILTER } from "Queries/Index";
import Spinner from "Components/Atoms/Spinner/Index";
import { mapObjectToOneArray } from "Utils/helper";

// let debounceHandler: any = null;

interface Props {}
const HomeTemplate: React.FC<Props> = () => {
  const [searValue, setSearchValue] = useState<string>("");

  const { loading, data } = useQuery(GET_BOOKS);
  const { loading: loadingSearch, data: searchData } = useQuery(
    SEARCH_BOOKS_BY_FILTER,
    {
      variables: { filter: searValue },
    }
  );

  const dataToRender = searValue
    ? mapObjectToOneArray(searchData || {}, "books")
    : data;

  return (
    <>
      <DefaultTemplate onSearchChange={setSearchValue} searValue={searValue}>
        {loading || loadingSearch ? (
          <Spinner />
        ) : (
          <>
            {!searValue && (
              <FeaturedBooksSection>
                <Center>
                  <SectionDivider label="Featured Books" className="mb-30" />
                </Center>
                <BookSlider data={dataToRender} />
              </FeaturedBooksSection>
            )}

            <AllBooksSection>
              <Center>
                <SectionDivider
                  label={
                    searValue
                      ? `${dataToRender?.books.length} results found for '${searValue}'`
                      : `All Books`
                  }
                  className="mb-30"
                />
                <BookGrid>
                  {dataToRender?.books &&
                    dataToRender.books.map((book: object, index: number) => (
                      <BookItem data={book} key={index} />
                    ))}
                </BookGrid>
              </Center>
            </AllBooksSection>
          </>
        )}
      </DefaultTemplate>
    </>
  );
};
export default HomeTemplate;
