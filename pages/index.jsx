import React from "react";

// Components Importations Section 
import Head from "../components/head";
import NavBar from "../components/navbar";
import HomeSection from '../components/sections/homeSection';

import Prismic from 'prismic-javascript'
import { PrismicClient } from '../prismic-configuration'
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"

import ConstructionPage from './construction';


const Homepage = props => {
    
  const { homeContent, actualLocale, locales, seo, generalInformation, menuContent, signUpContent } = props

  return<div className="main overflow-x-hidden">
          <Head
            title={seo.data.title}
            description={seo.data.default_description}
            keywords={seo.data.default_keywords}
            url={seo.data.default_url}
            ogImage={seo.data.default_image}
          />

          <div className="bg-cover bg-center h-full w-screen" style={{ backgroundImage: `url('/background/background_acero.jpg')`}}>
            <NavBar
                content={menuContent.data.menu_links} 
                logo={generalInformation.data.small_logo.url}
                imageWidth={generalInformation.data.small_logo_width}
                imageHeight={generalInformation.data.small_logo_height}
                locales={locales}
                actualLocale={actualLocale}
              />

              <div className="mt-40 text-center  flex-col w-screen">
                  <div className="">
                    <div className="text-3xl text-orange-600 valtiko-style">MUY PRONTO</div>
                    <div className="text-3xl text-white valtiko-style">Desatamos la furia de los sabores mas salvajes</div>
                  </div> 
              </div>

              <ConstructionPage/>

          </div>


        </div>
}

const getStaticProps = async ({ params, locale, previewData }) => {
  const client = createClient({ previewData });
  const locales = await getLocales(client)
  return {
      props: {
        seo: await getPrismicData('seo', locale),
        generalInformation: await getPrismicData('general_information', locale),
        menuContent: await getPrismicData('menu', locale),
        // homeContent: await getPrismicData('home_section',locale),
        // rentContent: await getPrismicData('rent_section',locale),
        // shareContent: await getPrismicData('share_section',locale),
        // aboutContent: await getPrismicData('about_section',locale),
        // contactContent: await getPrismicData('contact_section',locale),
        // vehiclesContent: await getPrismicCustomTypeData('vehicle',locale),
        locales: locales,
        actualLocale: locale
      }
  }
}

// Wrapper for prismic functions
const getPrismicData = async (name, lang) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name),{ lang })

  // Get first doc of this type (there should be 1 doc per type)
  const doc = prismicAnswer.results[0]
  return doc
}

const getPrismicCustomTypeData = async (name, lang) => {
  const prismicAnswer = await PrismicClient().query(  
    Prismic.Predicates.at('document.type', name), { lang })

  // Get all docs of this type (there should many docs per type)
  const CustomTypeDoc = prismicAnswer.results
  return CustomTypeDoc
}

export default Homepage
export { getStaticProps }