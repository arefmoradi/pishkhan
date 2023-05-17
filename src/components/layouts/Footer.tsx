import { AttachFile, Call, Info } from '@mui/icons-material';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react'
import { DividerStyle } from '../../styles/Pages/index.page.style';

const Footer = () => {
  const pwa = require("../../assets/images/pwa.png");
  const google = require("../../assets/images/google.png");
  const bazzar = require("../../assets/images/bazzar.png");
  const install = require("../../assets/images/install.png");
  return (
    <Box sx={{ display: {xs: "none", sm: "inline-block"} ,width: "100%" , backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: `blur(10px)` , borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}>

        <Grid container spacing={2} px={6} py={2}>

        <Grid xs={12} sm={6} md={3}> 
        <Box display={"flex"} flexDirection="column" p={1}>
              <Box display={"flex"} alignItems="center">
                <Info sx={{fontSize: "25px"}} />
                <Typography marginLeft={1.1} fontSize={"25px"}> درباره ما </Typography>
              </Box>
              <DividerStyle />
              <Typography px={3} variant="caption">
             چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه  را برای طراحان رایانه ای علی و جوابگوی قرار گیرد.
              </Typography>
        </Box>
         </Grid>

          <Grid xs={12} sm={6} md={3}> 
            <Box display={"flex"} flexDirection={"column"} p={1}>
              <Box display={"flex"} alignItems="center">
                <Call sx={{fontSize: "25px"}} />
                <Typography marginLeft={1.1} fontSize={"25px"}> ارتباطات </Typography>
              </Box>
              <DividerStyle />

              <Typography p={0.4}> وبسایت مقام معظم رهبری </Typography>
              <Typography p={0.4}>  وبسایت شهرداری اهواز </Typography>
              <Typography p={0.4}> سازمان فناوری اطلاعات و ارتباطات </Typography>

              
            </Box>
           </Grid>


          <Grid xs={12} sm={6} md={3}> 
            <Box display={"flex"} flexDirection={"column"} p={1}>
              <Box display={"flex"} alignItems="center">
                <AttachFile sx={{fontSize: "25px"}} />
                <Typography marginLeft={1.1} fontSize={"25px"}> لینک های داخلی </Typography>
              </Box>
              <DividerStyle />

              <Typography p={0.4}> دریافت Api برای برنامه نویسان </Typography>
              <Typography p={0.4}> سامانه شفافیت </Typography>
              <Typography p={0.4}> دریافت گزارشات سال </Typography>

              
            </Box>
           </Grid>


          <Grid xs={12} sm={6} md={3} >
            <Box display={"flex"} flexDirection={"column"}  p={1}>
              <Box display={"flex"} alignItems="center">
                <AttachFile sx={{fontSize: "25px"}} />
                <Typography marginLeft={1.1} fontSize={"25px"}> نحوه استفاده  </Typography>
              </Box>
              <DividerStyle />

              <Box display={"flex"} flexWrap="wrap" mt={1}>
                <Box>  <img src={pwa} style={{maxWidth: "40%"}} /> <img src={install} style={{maxWidth: "40%"}}  /> </Box>

                <Box>  <img src={google} style={{maxWidth: "40%"}}  />  <img src={bazzar} style={{maxWidth: "40%"}}  />  </Box>
              </Box>



              
            </Box>
          </Grid>
        </Grid>

    </Box>
  )

}

export default Footer