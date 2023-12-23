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
          {projects.map((item, i) => {
              return(
                <div className="project-slide" key={`project${i}`}>
                  <div className="bg"></div>
                  <Link href={`/project/${item.uid}`} className="info-wrapper">
                    <div className="project-title">{item.data.title}</div>
                    <div className="year">{item.data.year}</div>
                  </Link>
                  <PrismicNextImage field={item.data.cover_image}/>
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
  const projects = await client.getAllByType("project", { 
    orderings: {
			field: 'my.project.date',
			direction: 'desc',
		}
  });


  return {
    props: {
      navigation,
      settings,
      projects
    },
  };
}
