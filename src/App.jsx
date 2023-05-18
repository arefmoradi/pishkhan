import  { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {  Footer, Navbar } from './components/layouts'
import SlickImage from './components/SlickImage'
import FormPage from './pages/FormPage'
import IndexPage from './pages/IndexPage'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ahwaz1 from "./assets/images/ahwaz1.jpg"
import ahwaz2 from "./assets/images/ahwaz2.jpg"
import ahwaz3 from "./assets/images/ahwaz3.jpg"
import ButtonNavigation from './components/ButtonNavigation'
import Card3d from './components/SectionBottom/Card3d'

// export const RandomImage = () => {
//     const pictureArray = [{ahwaz1}, {ahwaz2}, {ahwaz3}];
//     const randomIndex = Math.floor(Math.random() * pictureArray.length);
//     const selectedPicture = pictureArray[randomIndex];
    

//         document.body.style.backgroundImage = selectedPicture
    
// }


const App = () => {




  useEffect(() => {
    const pictureArray = [ahwaz1, ahwaz2, ahwaz3];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];
    document.body.style.backgroundImage = `url(${selectedPicture})`;
    // document.body.style.backgroundImage = selectedPicture
  }, []);

  return (

    <>
        <Navbar />
        <ToastContainer 
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        
        />
       <Routes>
        <Route path='/form' element={<FormPage />}/>
        <Route path='/' index element={<>  <SlickImage /> <IndexPage /> <Card3d /> <Footer /> <ButtonNavigation /> </>}/>
       </Routes>
    </>

  )
}

export default App