"use client";

import { Box } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useEffect, useState } from "react";


export default function Home() {
  const defaultNameDoubleOffset = -20;
  const activeNameDoubleOffset = -10;
  const secondDefaultNameDoubleOffset = -40;
  const secondActiveNameDoubleOffset = -15;
  const [nameDoubleOffset, setNameDoubleOffset] = useState(defaultNameDoubleOffset);
  const [secondNameDoubleOffset, setSecondNameDoubleOffset] = useState(secondDefaultNameDoubleOffset);
  

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
      this.querySelectorAll(".mouse").forEach((shift) => {
        const position = shift.getBoundingClientRect();
        const adjustedPos = {
          x: position.x - parseFloat(shift.style.transform.replace("translateX(", "").replace(")", "")) || 0,
        }
        if (window.innerWidth > 900) {
          const x = ((adjustedPos.x+position.width/2+3.5)-event.pageX)*-0.05;
          shift.style.transform = `translateX(${x}px)`;
        }
        else {
          shift.style.transform = "translateX(0px)";
        }
      });
    }
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      console.log(document.body.style.cssText)
    }, false);
  }, [])

  const handleMouseEnterName = () => {
    setNameDoubleOffset(activeNameDoubleOffset)
    setSecondNameDoubleOffset(secondActiveNameDoubleOffset)
  }

  const handleMouseLeaveName = () => {
    setNameDoubleOffset(defaultNameDoubleOffset)
    setSecondNameDoubleOffset(secondDefaultNameDoubleOffset)
  }
  

  function renderLinkTree() {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <a href="/" className="headerLinkListItem" id="item1">Technologies</a>
        <a href="/" className="headerLinkListItem" id="item2">Projects</a>
        <a href="/" className="headerLinkListItem" id="item3">Carreer & Experience</a>
        <a href="/" className="headerLinkListItem" id="item4">About Me</a>
      </Box>)
  }

  return (
    <Box>
      <Box
        className="backgroundImg sectionHeader"
        sx={{ 
          height: "100vh",
          backgroundSize: "cover",
          display: "flex", 
          justifyContent: "center",
          backgroundPosition: "50% 50%",
          position: "relative",
          zIndex: 1
        }}
      >
        <Box className="contentContainer">
          <Box sx={{display: "flex", justifyContent: "center", height: "100%"}}>
            <Box sx={{
              position: "absolute", 
              bottom: "0", 
              left: "50%", 
              transform: "translateX(-50%)", 
              height: "35px", 
              width: "40px", 
              border: "solid 2px white",
              borderBottom: "none",
              borderRadius: "20px 20px 3px 3px",
              display: "flex",
              justifyContent: "center",
            }}>
              <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <a href="#section1"><KeyboardArrowDownRoundedIcon className="highlightedText" sx={{ color: "white", height: "35px", width: "35px", transform: `translateY(3px)`}}/></a>
              </Box>
            </Box>
            <Box sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <Box>
                <Box className="flexCollapse mouse" sx={{display: "flex"}}>
                  <Box sx={{marginRight: "20px"}}>
                    <Box className="mainHeading">
                      <span className="highlightedText hover-underline-animation">Beautiful UI</span> and <span className="highlightedText hover-underline-animation">effective applications</span> are my passion.
                    </Box>
                  
                    <Box className="subHeading">
                      <b className="highlightWhite" onMouseEnter={handleMouseEnterName} onMouseLeave={handleMouseLeaveName}>Felix Kniest</b> - Full Stack Developer
                    </Box>
                    <Box className="subHeading" sx={{overflow: "hidden"}}>
                      <Box sx={{
                        transform: `translateY(${nameDoubleOffset}px)`,
                        transition: "transform .3s ease-out",
                        height: "14px"
                      }}>
                        <b className="highlightWhite" onMouseEnter={handleMouseEnterName} onMouseLeave={handleMouseLeaveName} >
                          Felix Kniest
                        </b>
                      </Box>
                    </Box>
                    <Box className="subHeading" sx={{overflow: "hidden"}}>
                      <Box sx={{
                        transform: `translateY(${secondNameDoubleOffset}px)`,
                        transition: "transform .3s ease-out",
                        height: "7px"
                      }}>
                        <b className="highlightWhite" onMouseEnter={handleMouseEnterName} onMouseLeave={handleMouseLeaveName} >
                          Felix Kniest
                        </b>
                      </Box>
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
        </Box>
      </Box>
      <Box id="section1" sx={{height: "1600px",}}>
        <Box className="contentContainer" />
      </Box>
    </Box>
  )
}
