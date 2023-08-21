import { Box, IconButton, Modal, Button } from "@mui/material"
import Image from "next/image"
import React, { useState } from "react"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface ImageCarouselProps {
  images: string[];
  isModal?: boolean
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({images, isModal}) => {
  const [carouselOffset, setCarouselOffset] = useState(0);
  const [openPopupCarousel, setOpenPopupCarousel] = useState(false);

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
      <Modal open={openPopupCarousel} onClose={() => setOpenPopupCarousel(false)}>
        <Box sx={{ display: "flex", justifyContent: "center", height: "100%", pointerEvents: "none"}}>
          <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pointerEvents: "none"}}>
            <Box sx={{width: "90vw", maxWidth: "1000px", height: "auto", pointerEvents:"all"}}>
              <ImageCarousel images={images} isModal />
            </Box>
          </Box>
        </Box>
      </Modal>
      <Button onClick={() => !isModal ? setOpenPopupCarousel(true) : null} sx={{border: "none", backgroundColor: "transparent", padding: "0"}}>
        <Box sx={{display: "flex", transform: `translateX(${carouselOffset*100}%)`, transition: "transform .5s ease-in-out"}}>
        {images.map(image => {
          imagekey +=1;
          return (
            <Image width={1000} height={600} key={imagekey} src={image} alt="Project" style={{width: "100%", height: "auto", filter: isModal ? "none" : undefined}} />
          )
        })}
      </Box>
      </Button>
      
      <Box sx={{position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)"}}>
          <IconButton onClick={e => handleMove(e)}><ArrowRightIcon color="inherit" sx={{color: "white"}} /></IconButton>
        </Box>
    </Box>
  )
}