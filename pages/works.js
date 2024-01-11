import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Index = ({settings, navigation, projects  }) => {
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
      <div className="container">
        <div className="projects">
          {projects.data.projects.map((item, i) => {
            return(
              <Link href={`/works/${item.project.uid}`} className="project" key={`project${i}`}>
                <div className="bg"></div>
                <div className="info-wrapper">
                  <div className="project-title">{item.project.data.title}</div>
                  <div className="year">{item.project.data.year}</div>
                </div>
                <PrismicNextImage field={item.project.data.cover_image}/>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("menu");
  const settings = await client.getSingle("settings");
  const projects = await client.getSingle("works", {
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
