import React from "react";
import { TopNavBarStyle, TopNav, TopNavBarRight } from "./Style";
import NavLogo from "Components/Molecules/NavLogo/Index";
import SearchField from "Components/Molecules/SearchField/Index";
import BooksCircle from "Components/Atoms/SvgIcons/BooksCircle";
import CartWithBagde from "Components/Molecules/CartWithBadge/Index";
import { Center } from "Styles/layouts/Center";
import Button from "Components/Atoms/Button/Index";
import Lens from "Components/Atoms/SvgIcons/Lens";
import Cart from "Components/Organisms/Cart/Index";
import cartStore from "store/CartStore";
import MobileSearchNav from "./MobileSearchNav";
interface Props {
  onSearchChange?: (val: string) => void;
  searValue?: any;
}

const TopNavBar: React.FC<Props> = (props) => {
  const { isCartOpen, openCart, isOpenMobileSearch, openMobileSearch } =
    cartStore();
  const { onSearchChange, searValue } = props;

  return (
    <>
      <TopNav>
        <Center>
          <TopNavBarStyle>
            <NavLogo />
            <SearchField
              className="top-nav-search-field"
              onSearchChange={onSearchChange}
              searValue={searValue}
            />
            <TopNavBarRight>
              <Button
                className="trigger-search-field"
                onClick={() => openMobileSearch()}
              >
                <Lens />
              </Button>
              <BooksCircle />
              <CartWithBagde onClick={() => openCart()} />
            </TopNavBarRight>
          </TopNavBarStyle>
        </Center>
      </TopNav>

      {isCartOpen && <Cart />}
      {isOpenMobileSearch && (
        <MobileSearchNav onSearchChange={onSearchChange} />
      )}
    </>
  );
};

export default TopNavBar;
