"use client";

import { Box } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useEffect, useState } from "react";
import { TechnologiesSection } from "./sections/TechnologiesSection";
import { handleIdScroll } from "./utils/scroll";
import { ProjectsSection } from "./sections/ProjectsSection";
import { CareerSection } from "./sections/CareerSection";
import { AboutMeSection } from "./sections/AboutMeSection";
import creaProduDecal from "./resources/images/decals/creativityproductivity.png"
import Image from "next/image";

export default function Home() {
  const defaultNameDoubleOffset = -15;
  const activeNameDoubleOffset = -10;
  const secondDefaultNameDoubleOffset = -35;
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
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.getElementsByClassName("realBodyHeight")[0].offsetHeight - window.innerHeight));
      document.querySelectorAll(".mainPageContent").forEach(mainPageContent => {
        if (window.pageYOffset >= window.innerHeight) {
          mainPageContent.style.position = "relative"
        }
        else { 
          mainPageContent.style.position = "fixed"
          mainPageContent.style.top = "0"
        }
      })
      
    }, false);
    // init main content scroll
    document.querySelectorAll(".mainPageContent").forEach(mainPageContent => {
      if (window.pageYOffset >= window.innerHeight) {
        mainPageContent.style.position = "relative"
      }
      else { 
        mainPageContent.style.position = "fixed"
        mainPageContent.style.top = "0"
      }
    })
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
        <a onClick={e => handleIdScroll("technologies")} className="headerLinkListItem" id="item1">Technologies</a>
        <a onClick={e => handleIdScroll("projects")} className="headerLinkListItem" id="item2">Projects</a>
        <a onClick={e => handleIdScroll("career")} className="headerLinkListItem" id="item3">Carreer & Experience</a>
        <a onClick={e => handleIdScroll("aboutme")} className="headerLinkListItem" id="item4">About Me</a>
      </Box>)
  }

  const renderPageContent = () => {
    return (
      <>
        {/*<TechnologiesSection />*/}
        <ProjectsSection />
        <CareerSection />
        <AboutMeSection />
      </>
    )
  }

  const renderHeader = () => {
    return (
      <Box
        className="sectionHeader"
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
        <Box className="background backgroundImg" />
        <Box className="foreground textureImg" />
        <Box sx={{position: "absolute", top: "4%", left: "0", transform: "translate(-50%,-50%)"}} > 
           <Image className="rotateDecal" src={creaProduDecal} alt="decal" style={{minWidth: "200px", minHeight: "200px", width: "30vw", height: "30vw"}} />
        </Box>
        <Box className="contentHeaderContainer">
          <Box sx={{display: "flex", justifyContent: "center", height: "100%" }}>
            <Box sx={{
              position: "absolute", 
              bottom: "0", 
              left: "50%", 
              transform: "translateX(-50%)", 
              overflow: "hidden",
            }}>
                <Box className="headerArrowBox" sx={{
                height: "35px", 
                width: "40px", 
                border: "solid 2px white",
                borderBottom: "none",
                borderRadius: "20px 20px 3px 3px",
                display: "flex",
                justifyContent: "center",
              }}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                  <a onClick={() => handleIdScroll("technologies")}><KeyboardArrowDownRoundedIcon className="highlightedText" sx={{ color: "white", height: "35px", width: "35px", transform: `translateY(3px)`}}/></a>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <Box className="loadHeaderAnimation" >
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
    )
  }

  return (
    <Box>
      {renderHeader()}
      <Box className="mainPageContent" sx={{width: "100%"}}>
        {renderPageContent()}
      </Box>
      <Box className="realBodyHeight" sx={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0", width: "100%", overflowX: "hidden"}}>
        {renderHeader()}
        {renderPageContent()}
      </Box>
    </Box>
  )
}
