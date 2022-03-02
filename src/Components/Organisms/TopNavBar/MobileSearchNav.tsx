import React, { useRef } from "react";
import { MobileSearchNavStyle, TopNav } from "./Style";
import SearchField from "Components/Molecules/SearchField/Index";
import { Center } from "Styles/layouts/Center";
import Button from "Components/Atoms/Button/Index";
import CaretArrow from "Components/Atoms/SvgIcons/CaretArrow";
import Overlay from "Components/Atoms/Overlay/Index";
import cartStore from "store/CartStore";
import useOnClickOutside from "Hooks/useClickOutside";
import { animateFadeOut, animateSlideInTop } from "Styles/Base/Animation";

interface Props {
  onSearchChange?: (val: string) => void;
}
const MobileSearchNav: React.FC<Props> = (props) => {
  const { onSearchChange } = props;
  const { closeMobileSearch } = cartStore();
  const searchRef = useRef<any>();
  useOnClickOutside(searchRef, () => closeMobileSearch());
  return (
    <Overlay
      initial="hidden"
      animate="visible"
      variants={animateFadeOut.variants}
      transition={animateFadeOut.transition}
    >
      <TopNav
        className="place-on-top"
        ref={searchRef}
        initial="hidden"
        animate="visible"
        variants={animateSlideInTop.variants}
        transition={animateSlideInTop.transition}
      >
        <Center>
          <MobileSearchNavStyle>
            <Button onClick={() => closeMobileSearch()}>
              <CaretArrow />
            </Button>
            <SearchField
              className="top-nav-search-field"
              onSearchChange={onSearchChange}
            />
          </MobileSearchNavStyle>
        </Center>
      </TopNav>
    </Overlay>
  );
};

export default MobileSearchNav;
