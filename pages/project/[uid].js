import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import Moment from 'moment';

const Project = ({ navigation, settings, page }) => {
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {page.data.title} | {settings.data.site_title}
        </title>
        <meta name="description" content={settings.data.site_description[0].text}/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${page.data.title} | ${settings.data.site_title}`} />
        <meta property="og:description" content={settings.data.site_description[0].text} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      {/* <h2 className="page-title">{prismicH.asText(page.data.title)}</h2> */}
      <div className={`container project-page`}>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  );
};

export default Project;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("project", params.uid);
  const navigation = await client.getSingle("menu");
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("project");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}
