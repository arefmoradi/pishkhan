
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { ContainerCard, IndexImg, TextMainSection } from '../styles/Pages/index.page.style'
import { Player } from '@lottiefiles/react-lottie-player';
import JsonAnimate from '../components/JsonAnimate';
import { Navigate, useNavigate } from 'react-router-dom';
import CardHover from '../components/CardHover';
import { useState, useRef, useEffect } from 'react';
import lottie from "lottie-web";

const IndexPage = () => {

  const container = useRef(null)
  const wired = require("../assets/icons/lottie/wiredflat.json")
  const home = require("../assets/icons/Home.json")
  const document = require("../assets/icons/document.json")
  const bus = require("../assets/icons/Track.json")
  const home2 = require("../assets/icons/Home2.json")
  const codePosti = require("../assets/icons/zoom.json")
  const pasmand = require("../assets/icons/Pasmand.json")
  const person = require("../assets/icons/PersonTalk.json")
  const map = require("../assets/icons/map.json")
  const meu = require("../assets/icons/musiam.json")
  const search1 = require("../assets/icons/search/search1.json")
  const search2 = require("../assets/icons/search/search2.json")
  const search3 = require("../assets/icons/search/search3.json")

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: home
    });

    return () => {
      lottie.destroy();
    };
  }, []);
  const [icon1, setIcon1] = useState(false);

  const navigate = useNavigate()

  return (

    <Container>

      <Grid container p={1} spacing={4}>

      <Grid xs={12} md={6} lg={4}>
        <Box 
        onClick={() => navigate("/form")
        }>
            <CardHover
              ref={container}
              onMouseEnter={() => lottie.play()}
              onMouseLeave={() => lottie.pause()}
            icon={<JsonAnimate hover={icon1} src={home} />}  title="استعلام پروانه ساختماني " description=" این API بر اساس اطلاعات ملک، بخشی از اطلاعات پروانه ساختماني.. "
             />
     
        </Box>
       </Grid>        
       

      <Grid xs={12} md={6} lg={4}>
      <Box onClick={() => navigate("/form")
        }>
      <CardHover icon={<JsonAnimate hover={true} src={document} />}  title=" مشاهده قبض عوارض کسبی " description=" این API بر اساس اطلاعات ملک صنفی، اطلاعات آخرین قبض عوارض کسب و.." />
       </Box>
        </Grid>        
   
      <Grid xs={12} md={6} lg={4}>
        <CardHover icon={<JsonAnimate hover={true} src={bus} />}  title=" استعلام کرایه مترو و اتوبوس" description="> این API، محاسبه مبلغ کرایه بین دو ایستگاه مترو یا دو ایستگاه اتوبوس را.. " />
        </Grid>        
       
              
      <Grid xs={12} md={6} lg={4}>
      <Box onClick={() => navigate("/form")
        }>
         <CardHover icon={<JsonAnimate hover={true} src={home2} />}  title="استعلام مرکز بر اساس کد پستی ملک " description=">این API بر اساس کد پستی ملک، مختصات مکانی مرکز پارسل را ارائه.. " />
       </Box>
        </Grid>        

       <Grid xs={12} md={6} lg={4}>
       {/* <CardHover icon={<JsonAnimate hover={true} src={search1} />}  title="نمایش پهنه ملک " description="  این API، بر اساس مشخصات ارائه شده در خصوص یک ملک، وضعیت پهنه.. " /> */}
       {/* <CardHover icon={<JsonAnimate hover={true} src={search2} />}  title="نمایش پهنه ملک " description="  این API، بر اساس مشخصات ارائه شده در خصوص یک ملک، وضعیت پهنه.. " /> */}
       {/* <CardHover icon={<JsonAnimate hover={true} src={search3} />}  title="نمایش پهنه ملک " description="  این API، بر اساس مشخصات ارائه شده در خصوص یک ملک، وضعیت پهنه.. " /> */}
       <CardHover icon={<JsonAnimate hover={true} src={codePosti} />}  title="نمایش پهنه ملک " description="  این API، بر اساس مشخصات ارائه شده در خصوص یک ملک، وضعیت پهنه.. " />
        </Grid>  
        
          <Grid xs={12} md={6} lg={4}>
       <CardHover icon={<JsonAnimate hover={true} src={pasmand} />}  title="مشاهده قبض عوارض پسماند " description="  این API بر اساس اطلاعات ملک جزئیات آخرین قبض صادر شده برای ملک.. " />
        </Grid>  
        
                     
          <Grid xs={12} md={6} lg={4}>
       <CardHover icon={<JsonAnimate hover={true} src={person} />}  title="استعلام مفاصا حساب کسبی " description="این API بر اساس اطلاعات ملک کسبی جزئیات مفاصاحساب ملک را نمایش.." />
        </Grid>  
        
                                     
        <Grid xs={12} md={6} lg={4}>
       <CardHover icon={<JsonAnimate hover={true} src={map} />}  title=" استعلام وضعیت ملک در حریم مترو " description=" این API بر اساس اطلاعات ملک، مشخص مي كند آيا ملك در محدوده و.. " />
        </Grid>  

        <Grid xs={12} md={6} lg={4}>
       <CardHover icon={<JsonAnimate hover={true} src={meu} />}  title="  نمایش اطلاعات گواهی ساختماني " description=" این API دریافت میشود بر اساس اطلاعات ملک، بخشی از اطلاعات گواهي صادره.. " />
        </Grid>  
    
      </Grid>
    </Container>
  )
}

export default IndexPage