import React from "react";
import { NavLogoStyle, NavLogoSlog } from "./Style";
import BooksCircleSolid from "Components/Atoms/SvgIcons/BooksCircleSolid";
import Typography from "Components/Atoms/Typography/Index";
import { Link } from "react-router-dom";

interface Props {}
const NavLogo: React.FC<Props> = (props) => {
  return (
    <Link to="/" className="link-default">
      <NavLogoStyle>
        <BooksCircleSolid />
        <NavLogoSlog>
          <Typography
            as="h5"
            text="Quidax Books"
            className="heading-1 logo-heading"
          />
          <Typography
            as="p"
            text="A flimsy book company"
            className="paragraph-1 text-italic logo-sub-heading"
          />
        </NavLogoSlog>
      </NavLogoStyle>
    </Link>
  );
};

export default NavLogo;
