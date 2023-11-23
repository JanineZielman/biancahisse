import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { linkResolver } from "../prismicio";

export const Header = ({ navigation, settings }) => {

  return (
    <header className="menu">
      <Link href="/"><h1>{settings.data.site_title}</h1></Link>
      <div className="menu-items">
        {navigation.data.menu_items.map((item, i) => {
          return(
            <PrismicLink key={`link${i}`} field={item.link}>
              {item.link.uid}
            </PrismicLink>
          )
        })}
      </div>
    </header>
  );
};
