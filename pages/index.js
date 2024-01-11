import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Slider from "react-slick";

const Index = ({settings, navigation, projects  }) => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{settings.data.site_title}</title>
        <meta name="description" content={settings.data.site_description[0].text} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={settings.data.site_title} />
        <meta property="og:description" content={settings.data.site_description[0].text} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <div className="home-slider">
        <Slider {...sliderSettings}>
          {projects.data.projects.map((item, i) => {
              return(
                <div className="project-slide" key={`project${i}`}>
                  <Link href={`/project/${item.project.uid}`} className="fixed-info-bar">
                    <div className="project-title">{item.project.data.title}</div>
                    <div className="year">{item.project.data.year}</div>
                  </Link>
                  <PrismicNextImage field={item.project.data.cover_image}/>
                </div>
              )
            })}
        </Slider>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("menu");
  const settings = await client.getSingle("settings");
  const projects = await client.getSingle("home", {
    fetchLinks: `project.title, project.year, project.cover_image`
  });


  return {
    props: {
      navigation,
      settings,
      projects
    },
  };
}
