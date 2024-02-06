import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import Link from "next/link";

import { useRouter } from "next/router";

export const Header = ({ navigation, settings, background_color, text_color }) => {
  const router = useRouter()

  return (
    <header className={`menu ${text_color && 'white-text'}`} style={{'background': `${router.asPath != '/' ? `linear-gradient(180deg, ${background_color} 30%, rgba(0,0,0,0) 100%)` : 'transparent'}`}}>
      <Link href="/"><h1>{settings.data.site_title}</h1></Link>
      <div className="menu-items">
        {navigation.data.menu_items.map((item, i) => {
          return(
            <PrismicLink key={`link${i}`} field={item.link} className={`${router.asPath.includes(item.link.uid) ? 'active' : ''}`}>
              {item.link.uid}
            </PrismicLink>
          )
        })}
      </div>
    </header>
  );
};
