import { Box, Container, Typography, AppBar } from '@mui/material'
import { useEffect, useState } from 'react'
import SearchBox from './extraComponents/SearchBox'
import AvatarSection from './extraComponents/AvatarSection'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    const navigate = useNavigate();
    const img = require("../../assets/images/logo.png")
    const [navbarScroll, setNavbarScroll] = useState({ 
        backdropFilter: `blur(10px)`, transition: '0.4s', 
        boxShadow: `rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset`,
        borderBottom:"1px solid rgba(255,255,255,0.2)",
        
       
    })

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setNavbarScroll({ borderBottom: "1px solid rgba(255,255,255,0.5)" , backdropFilter: `blur(10px)` ,transition: '0.4s', boxShadow:"0", 
            });
            } else {
                // setNavbarScroll({ backgroundColor: '#81d4fa', transition: 'background-color 400ms ease-in-out' });
                setNavbarScroll({ borderBottom:"1px solid rgba(255,255,255,0.2)", backdropFilter: `blur(10px)`, boxShadow: "none", transition: '0.4s' });
            }
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
        handleScroll()
    },[])

  return (
    <AppBar sx={{
        width: "100%",
        borderEndEndRadius : "35px",
        borderEndStartRadius : "35px",
        position: "sticky",
        height: "55px",
        backgroundColor: "rgba(255,255,255,0.01)",

        ...navbarScroll
    }}
    >
        <Container  sx={{height: "50px" ,display: "flex", justifyContent: "space-between" , alignItems: "center", alignContent: "center"}}>
            <Box onClick={() => navigate("/")}>
                <Box display={"flex"} alignItems="center">
                <img src={img} alt="تصویر لوگو" width="30px" height="30px" />
                    <Typography marginLeft={.7} color="#f5f5f5">  پیشخوان اکسین  </Typography>
                </Box>
            </Box>
    
            <Box display={"flex"} alignItems={"center"}>
                <SearchBox />
                <AvatarSection />
            </Box>
        </Container>
    </AppBar>
  )
}

export default Navbar