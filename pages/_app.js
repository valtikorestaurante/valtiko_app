import App from 'next/app'
import { appWithTranslation } from 'next-i18next';
import '../style/global.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "@material-tailwind/react";
import Vikingfont from 'next/font/local'
import { Zeyada } from 'next/font/google'

const zeyada =  Zeyada({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-zeyada',
})


config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
    return (
        // <ThemeProvider>
          <div className={`${zeyada.className}`}>
            <Component {...pageProps} />
          </div>
        // </ThemeProvider>
    )
  }

MyApp.getStaticProps = async (appContext) => ({ ...await App.getStaticProps(appContext) })

export default appWithTranslation(MyApp)

// export default MyApp