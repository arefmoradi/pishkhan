import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";

export const IndexImg = styled.img({
    width: "80px",
    height: "80px"
})
 
export const ContainerCard = styled(Box)(() => ({

    transition: "0.3s",
    backgroundColor: "rgba(255,255,255,0.1)",
    cursor: "pointer",
    backdropFilter: `blur(10px)`,
    border: "1px solid rgba(255,255,255,0.2)",


    // "&:hover" : {
    //     transition : "0.3s",
    //     backgroundColor: "rgba(255,255,255,0.45)",
    //     boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,

    //     transform: `translateY(-6px)`

    // }

    // "&:hover" : {
    //     border: `1px solid #ffffff44`,
    //     boxShadow: `0 7px 50px 10px #000000aa`,
    //     transform: `scale(1.015)`,
    //     filter: `brightness(1.3)`
    //   },

    //   "&:hover:before": {
    //     filter:` brightness(.5)`,
    //     top: '-100%',
    //     left: '200%'
    //   },

    // "&:before" : {
    //     position: "fixed",
    //     content: '""',
    //     boxShadow: `0 0 100px 40px #ffffff08`,
    //     top: "-100%",
    //     left: "-100%",
    //     transform: `rotate(-45deg)`,
    //     height: '60rem',
    //     transition: `.7s all`,
    // }
   

}));

// ::before{
//     position: fixed;
//     content: "";
//     box-shadow: 0 0 100px 40px #ffffff08;
//     top: -10%;
//     left: -100%;
//     transform: rotate(-45deg);
//     height: 60rem;
//     transition: .7s all;
//   }
//   &:hover{
//     border: 1px solid #ffffff44;
//     box-shadow: 0 7px 50px 10px #000000aa;
//     transform: scale(1.015);
//     filter: brightness(1.3);
//     ::before{
//       filter: brightness(.5);
//       top: -100%;
//       left: 200%;
//     }
//   }

export const TextMainSection = styled(Box)(() => ({

    transition: "0.3s",
    backgroundColor: "#ffffff1a",//"rgba(255,255,255,0.1)",
    cursor: "pointer",
    backdropFilter: `blur(10px)`,
    border: "1px solid rgba(255,255,255,0.5)",


    "&:hover" : {
        transition : "0.3s",
        backgroundColor: "rgba(255,255,255,0.45)",
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
        transform: `translateY(-6px)`
    }
   
}));

export const DividerStyle = styled(Divider)(() => ({
    width: "80%",
    color: "gray"

}))


export const overly = styled.div`

`
