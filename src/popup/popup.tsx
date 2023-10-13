import React, { useMemo } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import "../config/common"
import "./popup.css"
import "../config/styles.css"

import themeConfig from "../config/theme"

const Popup: React.FC<{}> = () => {
  let theme = useMemo(() => createTheme(themeConfig), [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      Popup
    </ThemeProvider>
  )
}

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)
const root = createRoot(rootElement)
root.render(<Popup />)
