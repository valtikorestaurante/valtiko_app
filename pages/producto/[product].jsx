import React from "react";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PrismicRichText } from '@prismicio/react'

// Components Importations Section 
import Head from "../../components/head";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer"
import RecomendedPlatesSection from "../../components/sections/recomendedPlatesSection";

import Prismic from 'prismic-javascript'
import { PrismicClient } from '../../prismic-configuration'
import { getLocales } from "../../lib/getLocales";
import { createClient } from "../../prismicio"


const IndividualPage = props => {
//   const { platesContent, actualLocale, locales, seo, generalInformation } = props

  const router = useRouter();
  const { product } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (product) {
      // Deserializar la cadena JSON
      try {
        const parsedData = JSON.parse(product);
        setItem(parsedData);
      } catch (error) {
        console.error('Error al deserializar JSON:', error);
      }
    }
  }, [product]);

  return (<div className="main overflow-x-hidden">
  {/* <Head
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
  /> */}
{/* 
  <div className="fixed w-full">
        <video muted autoPlay loop playsInline control='' className="video">
          <source src={generalInformation.data.video_background} type="video/mp4" />
        </video>
        <div className="fixed inset-0  opacity-20 w-full h-full object-fill video" style={{ backgroundImage: `url('/background/background_acero.jpg')`}}></div>
  </div> */}
  <div id="home" className="xl:mt-40 mt-20 flex flex-col w-full relative p-10">
  <div>
      {item ? (
        <div className="font-viking flex-col">
            <div className="font-viking text-orange-600 mb-10">
                {item.data.plato_titulo}
            </div>
            <div className="mb-5">
              {item.data.plato_categoria}
            </div>
            <div className="mb-5 font-viking">
              {item.data.plato_precio}
            </div>
        
            <PrismicRichText field={item.data.plato_descripcion}/>

          {/* Mostrar otros detalles del elemento */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
    {/* <RecomendedPlatesSection items={platesContent}/> */}

    {/* <ConstructionPage/> */}
    {/* <Footer/> */}
  </div>

</div>
  );
};

// const getStaticProps = async ({ params, locale, previewData }) => {
//     const client = createClient({ previewData });
//     const locales = await getLocales(client)
//     return {
//         props: {
//           seo: await getPrismicData('seo', locale),
//           generalInformation: await getPrismicData('general_information', locale),
//           menuContent: await getPrismicData('menu', locale),
//           platesContent: await getPrismicCustomTypeData('platos',locale),
//           // rentContent: await getPrismicData('rent_section',locale),
//           // shareContent: await getPrismicData('share_section',locale),
//           // aboutContent: await getPrismicData('about_section',locale),
//           // contactContent: await getPrismicData('contact_section',locale),
//           // vehiclesContent: await getPrismicCustomTypeData('vehicle',locale),
//           locales: locales,
//           actualLocale: locale
//         }
//     }
//   }
  
//   // Wrapper for prismic functions
//   const getPrismicData = async (name, lang) => {
//     const prismicAnswer = await PrismicClient().query(  
//       Prismic.Predicates.at('document.type', name),{ lang })
  
//     // Get first doc of this type (there should be 1 doc per type)
//     const doc = prismicAnswer.results[0]
//     return doc
//   }
  
//   const getPrismicCustomTypeData = async (name, lang) => {
//     const prismicAnswer = await PrismicClient().query(  
//       Prismic.Predicates.at('document.type', name), { lang })
  
//     // Get all docs of this type (there should many docs per type)
//     const CustomTypeDoc = prismicAnswer.results
//     return CustomTypeDoc
//   }
  
  export default IndividualPage;
//   export { getStaticProps }