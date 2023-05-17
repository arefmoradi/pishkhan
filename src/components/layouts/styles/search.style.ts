import styled from "@emotion/styled"
import { Autocomplete, Box, InputBase } from "@mui/material"

export const StyledSearchAutocomplated = styled(Autocomplete)(() => ({
  border: "none"
}));


export const InputBaseStyled = styled(InputBase)(() => ({
  border: "none",
  marginLeft: "10px"
}));

export const BoxSearchStyled = styled(Box)(() => ({
  padding: "3px",
  borderRadius: "15px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "pink",
}));
