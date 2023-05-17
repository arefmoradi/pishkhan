import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

export const InputBaseForm = styled(InputBase)(() => ({
    // border: "1px solid white", 
    borderRadius: "10px", 
    padding: "4px",
    backgroundColor: "rgba(255,255,255,0.23)",
    backdropFilter: `blur(10px)`,

    "&:focus" : {
        transition : "0.3s",
        backgroundColor: "rgba(255,255,255,0.45)",
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
        border: "1px solid #0277bd"

    }
}))