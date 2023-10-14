import App from 'next/app'
import { appWithTranslation } from 'next-i18next';
import '../style/global.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "@material-tailwind/react";

import Vikingfont from 'next/font/local'
import { New_Rocker } from 'next/font/google'
import { Caesar_Dressing } from 'next/font/google'
import { Macondo_Swash_Caps } from 'next/font/google'




// const vikingfont = Vikingfont({ 
//   src: '../fonts/VikingMedium.ttf' 
// })

	
const vikingfont = Vikingfont({
    src: [
      {
        path: '../fonts/VikingMedium.ttf',
        weight: '500',
        style: 'normal',
      },
    ],
    variable: '--font-vikingo',
  });

// const zeyada =  Zeyada({
//   subsets: ['latin'],
//   weight: '400',
//   display: 'swap',
//   variable: '--font-zeyada',
// })


config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
    return (
        // <ThemeProvider>
          <div className={`${vikingfont.variable}`}>
            <Component {...pageProps} />
          </div>
        // </ThemeProvider>
    )
  }

MyApp.getStaticProps = async (appContext) => ({ ...await App.getStaticProps(appContext) })

export default appWithTranslation(MyApp)

// export default MyApp