import { Box, IconButton, Modal, Button } from "@mui/material"
import Image from "next/image"
import React, { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import { Carousel } from "react-responsive-carousel";

interface ImageCarouselProps {
  images: string[];
  isModal?: boolean
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({images, isModal}) => {
  const [openPopupCarousel, setOpenPopupCarousel] = useState(false);
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
      <IconButton onClick={() => !isModal ? setOpenPopupCarousel(true) : null} sx={{border: "none", backgroundColor: "transparent", padding: "0", position: "absolute", top: "3px", left: "3px", display: isModal ? "none" : "block", zIndex: 3}}>
        <FullscreenRoundedIcon color="inherit" sx={{color: "#C6BA9C"}} />
      </IconButton>
      <Carousel>
        {images.map(image => {
        imagekey +=1;
        return (
          <Box  key={imagekey}>
            <Image width={1000} height={600} src={image} alt="Project" style={{width: "100%", height: "auto", filter: isModal ? "none" : undefined}} />
          </Box>
        )
      })}
      </Carousel>
    </Box>
  )
}