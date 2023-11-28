import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { linkResolver } from "../prismicio";

export const Header = ({ navigation, settings, background_color }) => {

  return (
    <header className="menu" style={{'background': `linear-gradient(180deg, ${background_color} 30%, rgba(0,0,0,0) 100%)`}}>
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
