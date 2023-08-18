import { Box } from '@mui/material'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felix\' Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const renderNavBar = () => {
    return (
      <Box sx={{width: "100vw", height: "50px", backgroundColor: "rgba(12,0,6,.5)", position: "fixed", top: "0", left: "0", display: "flex", justifyContent: "center"}}>
        <Box sx={{height: "100%", minWidth: "250px", maxWidth: "350px", width: "40%", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
          <Box sx={{display: "flex", width: "100%", justifyContent: "center", gap: 2, marginBottom: "14px", whiteSpace: "nowrap"}}>
            <a>Technologies</a>
            <a>Projects</a>
            <a>Carreer & Experience</a>
            <a>About Me</a>
          </Box>
          <Box sx={{ width: "100%", height: "2px", backgroundColor: "white", borderRadius: "0 0 400px 400px"}} />
        </Box>
      </Box>
    )
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {renderNavBar()}
        <div className="staticNoiseOverlay" />
      </body>
    </html>
  )
}
