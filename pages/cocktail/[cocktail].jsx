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


const CocktailPage = props => {
  const { platesContent, actualLocale, locales, seo, generalInformation, cocktailsContent, menuContent } = props

  const router = useRouter();
  const [item, setItem] = useState(null);
  const cocktailId = router.query.cocktail


  useEffect(() => {
    if (cocktailsContent) {
      try {
        const foundItem = cocktailsContent.find(cocktail => cocktail.id === cocktailId);
        
        // Verificar si se encontró el elemento y establecerlo en el estado
        if (foundItem) {
          setItem(foundItem);
        } else {
          console.warn('No se encontró ningún elemento con la ID proporcionada.');
        }
      } catch (error) {
        console.error('Error al deserializar JSON:', error);
      }
    }
  }, [cocktailId, cocktailsContent]);

  return (<div className="main overflow-x-hidden">
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
        <div className="bg-cover bg-center fixed inset-0  opacity-40 w-full h-full object-fill video" style={{ backgroundImage: `url(${item && item.data.cocktail_imagen.url})` }}></div>
  </div>
  <div id="home" className="xl:mt-40 mt-20 flex flex-col w-full relative p-10">
  <div>
      {item ? (
        <div className="font-viking flex-col">
            <div className="font-viking text-orange-600 mb-2 text-4xl">
                {item.data.cocktail_titulo}
            </div>
            <div className="mb-5 text-blue text-white">
              {item.data.cocktail_categoria}
            </div>
            <div className="mb-5 font-viking font-white text-white">
              {item.data.cocktail_precio}
            </div>
            <div className="font-viking text-white">
              <PrismicRichText field={item.data.cocktail_descripcion}/>
            </div>
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


export async function getStaticPaths() {
  const client = createClient({ previewData: null });
  const locales = await getLocales(client);

  // Obtén los IDs de cocktails de tu array cocktailsContent
  const cocktailsContent = [
  ];

  const paths = cocktailsContent.map((cocktail) => {
    return { params: { cocktail: JSON.stringify({ id: cocktail.id, lang: cocktail.lang }) } };
  });

  // Devuelve las rutas
  return {
    paths,
    fallback: false, // O 'blocking' si prefieres que las páginas se generen bajo demanda
  };
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
  
  export default CocktailPage;
  export { getStaticProps }
