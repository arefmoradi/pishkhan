import { createTheme } from "@mui/material"
import createCache from "@emotion/cache"

import rtlPlugin from "stylis-plugin-rtl"
import { prefixer } from "stylis"

const theme = createTheme({
    direction: "rtl",
    typography : {
        fontFamily: 'IRANsans'
    },
    palette: {
        background: {
            // default: "#e0e0e0"
            default: "#757575"
        }
    }
})

export const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})

export default theme