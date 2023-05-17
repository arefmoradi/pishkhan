import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickImage = () => {
  const ahwaz1 = require("../assets/images/ahwaz1.jpg")
  const ahwaz2 = require("../assets/images/ahwaz2.jpg")
  const ahwaz3 = require("../assets/images/ahwaz3.jpg")




  return (
    
  <Container>
<Box sx={{
  textAlign: "center",
  margin: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: {xs: "column", md: "row"},
  borderRadius: "10px",
  backgroundColor: "rgba(255,255,255,0.3)",
  backdropFilter: `blur(10px)`,
  // justifyContent: "space-between",
  // alignItems: "center"
}}>
  <Box >
      <img src={ahwaz1} style={{borderRadius: "10px", maxWidth: "100%", height: "auto", marginTop: "8px" }} />
  </Box>


  <Stack sx={{ alignItems: {xs: "center" , sm: "start"} }}  ml={4}>
    <Typography sx={{ p: {xs: "5" , sm: "none"}, fontSize: {xs: '26px' , md: "34px"} }}> شهرداری همینجاست ! </Typography>
    <Typography mt={1} variant="caption" textAlign={"left"}> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی تا قرار گیرد.


 </Typography>
  </Stack>


</Box>

    </Container>



    
  )
}

export default SlickImage