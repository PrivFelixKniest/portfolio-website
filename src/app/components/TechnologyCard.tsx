import React, { useState } from "react";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface TechnologyCardProps {
  image: StaticImageData;
  title: string;
  text: string;
  images: StaticImageData[];
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({image, title, text, images}) => {
  const defaultOpenTextPos = -200;
  const visibleOpenTextPos = 0;
  const [openTextPos, setOpenTextPos] = useState(defaultOpenTextPos);
  const defaultOpenTitlePos = -120;
  const visibleOpenTitlePos = 0;
  const [openTitlePos, setOpenTitlePos] = useState(defaultOpenTitlePos);
  const defaultOpenServicesPos = 0;
  const visibleOpenServicesPos = 200;
  const [openServicesPos, setOpenServicesPos] = useState(defaultOpenServicesPos);

  const handleMouseEnter = () =>{
    setOpenTextPos(visibleOpenTextPos);
    setOpenTitlePos(visibleOpenTitlePos);
    setOpenServicesPos(visibleOpenServicesPos);
  }

  const handleMouseLeave = () =>{
    setOpenTextPos(defaultOpenTextPos);
    setOpenTitlePos(defaultOpenTitlePos);
    setOpenServicesPos(defaultOpenServicesPos);
  }

  return (
    <Box sx={{display: "flex",}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <Image alt="technology icon" className="techBigIcon" src={image} style={{height: "200px", width: "200px", marginRight: "10px"}} />
      <Box sx={{position: "relative", width: "200px", overflow: "hidden", height: "200px"}} >
        <Box sx={{position: "absolute", top: "0", left: "0", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%"}}>
          <h3 style={{marginBottom: "10px", transform: `translateX(${openTitlePos}px)`, transition: "transform .5s ease-in-out"}}>{title}</h3>
          <p style={{transform: `translateX(${openTextPos}px)`, transition: "transform .5s ease-in-out"}}>{text}</p>
        </Box>
        <Box sx={{position: "absolute", top: "0", left: "0", display: "flex", flexDirection: "column", justifyContent: "center", height: "200px"}}>
          {images?.map(image => {
            return (
              <Box key={image} sx={{display: "flex", justifyContent: "center", width: "200px"}}>
                <Image alt="small technology icon" src={image} style={{maxHeight: "50px", maxWidth: "190px", width: "auto", height: "auto", transform:`translateX(${openServicesPos}px)`, transition: "transform .5s ease-in-out, filter .3s linear"}}/>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}