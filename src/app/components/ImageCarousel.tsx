import { Box, IconButton } from "@mui/material"
import Image, { StaticImageData } from "next/image"
import React, { useState, useEffect } from "react"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface ImageCarouselProps {
  images: StaticImageData[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({images}) => {
  const [carouselOffset, setCarouselOffset] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault()
    console.log("moved")
    if (carouselOffset-1 <= images.length*-1) {
      setCarouselOffset(0)
    }
    else {
      setCarouselOffset(carouselOffset-1)
    }
  }
  let imagekey = 0;

  return (
    <Box sx={{width: "100%", height: "100%", overflow: "hidden", position: "relative"}}>
      <Box sx={{display: "flex", transform: `translateX(${carouselOffset*100}%)`, transition: "transform .5s ease-in-out"}}>
        {images.map(image => {
          imagekey +=1;
          return (
            <Image key={imagekey} src={image} alt="Project" style={{width: "100%", height: "auto"}} />
          )
        })}
      </Box>
      <Box sx={{position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)"}}>
          <IconButton onClick={e => handleMove(e)}><ArrowRightIcon color="inherit" sx={{color: "white"}} /></IconButton>
        </Box>
    </Box>
  )
}