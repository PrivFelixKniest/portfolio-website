"use client";

import { Box } from '@mui/material'
import './globals.css'
import type { Metadata } from 'next'
import { handleIdScroll } from './utils/scroll'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const renderNavBar = () => {
    return (
      <Box className="navBar" sx={{width: "100vw", height: "50px", backgroundColor: "rgba(12,0,6,.5)", position: "fixed", top: "0", left: "0", display: "flex", justifyContent: "center"}}>
        <Box sx={{height: "100%", minWidth: "250px", maxWidth: "350px", width: "40%", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
          <Box sx={{display: "flex", width: "100%", justifyContent: "center", gap: 2, marginBottom: "14px", whiteSpace: "nowrap"}}>
            <a onClick={() => handleIdScroll("projects")}>Projects</a>
            <a onClick={() => handleIdScroll("career")}>Carreer & Experience</a>
            <a onClick={() => handleIdScroll("aboutme")}>About Me</a>
          </Box>
          <Box sx={{ width: "100%", height: "2px", backgroundColor: "white", borderRadius: "0 0 400px 400px"}} />
        </Box>
      </Box>
    )
  }

  return (
    <html lang="en">
      <body>
        {children}
        {renderNavBar()}
        <div className="staticNoiseOverlay" />
      </body>
    </html>
  )
}
