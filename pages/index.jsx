import React from "react";

// Components Importations Section 
import Head from "../components/head";
import NavBar from "../components/navbar";
import Footer from "../components/footer"
import RecomendedPlatesSection from "../components/sections/recomendedPlatesSection";
import RecomendedCocktailsSection from "../components/sections/recomendedCocktailsSection";
import Image from 'next/image'

import Prismic from 'prismic-javascript'
import { PrismicClient } from '../prismic-configuration'
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"

import ConstructionPage from './construction';

import { FloatingWhatsApp } from 'react-floating-whatsapp'


const Homepage = props => {
    
  const { platesContent, actualLocale, locales, seo, generalInformation, menuContent, cocktailsContent } = props

  return<div className="main overflow-x-hidden">
          <Head
            title={seo.data.title}
            description={seo.data.default_description}
            keywords={seo.data.default_keywords}
            url={seo.data.default_url}
            ogImage={seo.data.default_image}
          />

          <NavBar
            content={menuContent.data.menu_links} 
            logo={generalInformation.data.small_logo.url}
            imageWidth={generalInformation.data.small_logo_width}
            imageHeight={generalInformation.data.small_logo_height}
            locales={locales}
            actualLocale={actualLocale}
          />

          <div className="fixed w-full">
                <video muted autoPlay loop playsInline control='' className="video">
                  <source src={generalInformation.data.video_background} type="video/mp4" />
                </video>
                <div className="bg-cover bg-center fixed inset-0  opacity-50 w-full h-full object-cover video" style={{ backgroundImage: `url('/background/background_acero.jpg')`}}></div>
          </div>
          <div className="w-full">
            <div id="home" className="xl:mt-40 mt-32 flex flex-col w-full relative">
              <div className="text-center flex-col w-screen font-viking">
                  <div className="">
                    <div className="text-3xl text-orange-600 font-viking z-50">Muy Pronto</div>
                    <div className="relative text-3xl text-white font-viking pr-5 pl-5 z-50">Desatamos la furia de los sabores mas salvajes</div>
                  </div> 
              </div>
              
              <Image
                  src={generalInformation.data.lina_rose.url}
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="rotate-45 absolute xl:-translate-x-2 -translate-x-32 z-40"
                />

              <RecomendedPlatesSection items={platesContent}/>
              
              <Image
                  src={generalInformation.data.hacha.url}
                  width={300}
                  height={300}
                  alt="Picture of the author"
                  className="rotate-45 self-center z-40"
                />
              <RecomendedCocktailsSection items={cocktailsContent}/>


              {/* <ConstructionPage/> */}


              <FloatingWhatsApp
                  phoneNumber="+573142041587"
                  accountName="Cristian - El Vikingo"
                  allowEsc
                  allowClickAway
                  notification
                  notificationSound
                  chatMessage={
                    <div>
                      Hola! 🤝
                      <br />
                      Qué vas a ordenar hoy?
                    </div>
                  }
                  placeholder="Escribe tu mensaje"
                  statusMessage="En linea"
                  avatar={'/static/avatar25.png'}
          />


              <Footer footerContent={""}/>
            </div>
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
        platesContent: await getPrismicCustomTypeData('platos',locale),
        cocktailsContent: await getPrismicCustomTypeData('cocktail',locale),
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