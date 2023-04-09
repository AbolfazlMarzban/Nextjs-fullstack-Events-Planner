import '@/styles/globals.css'
import '@/styles/general.scss'
import MainLayout from '@/src/components/layout/mainLayout'

export default function App({ Component, pageProps }) {
  return(
    <>
     <MainLayout>
        <main>
        <Component {...pageProps} />
        </main>
     </MainLayout>
    </>
   
  ) 
}
