import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";


export const StyledAvatar = styled(Avatar)(() => ({
    backgroundColor : deepOrange[500],
    cursor: "pointer",
    transition: "0.3s",
    marginLeft: "15px",

    '&:hover': { 
        backgroundColor: deepOrange[600],
        transform: `scale(1.1)`,
        transition: "0.3s"
    },
    '&:active' : {
      backgroundColor: deepOrange[700],
      transition: "0.3s",
      transform: `scale(1)`,
    }
  }));
