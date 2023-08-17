import { Box } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function Home() {
  function renderLinkTree() {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
        <a href="/">Technologies</a>
        <a href="/">Projects</a>
        <a href="/">Carreer & Experience</a>
        <a href="/">About Me</a>
      </Box>)
  }
  return (
    <body>
      <Box
        className="backgroundImg"
        sx={{ 
          height: "100vh", 
          display: "flex", 
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          position: "relative",
        }}
      >
        <Box sx={{
          position: "absolute", 
          bottom: "0", 
          left: "50%", 
          transform: "translateX(-50%)", 
          height: "35px", 
          width: "40px", 
          backgroundColor: "white", 
          borderRadius: "20px 20px 0 0",
          display: "flex",
          justifyContent: "center",
        }}>
          <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <KeyboardArrowDownRoundedIcon sx={{ color: "black", height: "35px", width: "35px" }}/>
          </Box>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Box>
            <Box className="flexCollapse" sx={{display: "flex"}}>
              <Box sx={{marginRight: "20px"}}>
                <Box className="mainHeading">
                  <span className="highlightedText hover-underline-animation">Beautiful UI</span> and <span className="highlightedText hover-underline-animation">functional applications</span> are my passion.
                </Box>
              
                <Box className="subHeading">
                  <b>Felix Kniest</b> - Full Stack Developer
                </Box>
              </Box>
              <Box className="flexCollapse" sx={{display: "flex", marginTop: "10px"}}>
                <Box className="responsiveLine" sx={{height: "100%", width: "2px", borderRadius: "1px", backgroundColor: "white", marginRight: "5px"}} />
                {renderLinkTree()}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{height: "200px"}}></Box>
    </body>
  )
}
