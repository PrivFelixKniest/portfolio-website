import React from "react"
import { Box } from "@mui/material";
import Image from "next/image";
import {ImageCarousel} from "../components/ImageCarousel"



export const ProjectsSection: React.FC<any> = () => {

  const smallIconsHeight = "35px"
  return (
    <Box id="projects" className="section">
      <Box className="alignContent">
        <Box className="contentContainer">
          <h1 style={{marginBottom: "30px"}}>Projects</h1>
          <Box className="flexCollapse" sx={{display: "flex", width: "100%", justifyContent: "space-between", marginBottom: "30px"}}>
            <Box className="projectGridItem">
              <a href="https://scanrecs.com" target="_blank" rel="no-referrer">
                <ImageCarousel images={["/projects/scanrecs/3.jpg","/projects/scanrecs/4.jpg","/projects/scanrecs/1.jpg", "/projects/scanrecs/2.jpg"]} />
              </a>
            </Box>
            <Box className="projectGridItem" sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <h2 style={{marginBottom: "10px"}}>scanrecs&apos; Website and Artist Dashboard</h2>
              <p style={{marginBottom: "10px"}}>This project for Scan Records, an international underground record label for electronic music, contained a homepage, a webstore using payhip.com and an artist dashboard, which collects, aggregates and displays
              key insights into an artists performance.</p>
              <Box sx={{display: "flex", justifyContent: "flex-start", height: smallIconsHeight}}>
                <Image width={100} height={100} src="/techIcons/firebase.png" alt="firebase" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/express.png" alt="express.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "10px", marginLeft: "5px"}} />
                <Box sx={{height: "100%", width: "1px", backgroundColor: "white", borderRadius: "2px", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/pngwing.png" alt="react.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/mui.png" alt="Material ui" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/vercel.png" alt="vercel" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
              </Box>
              {/** Links */}
              <Box sx={{display: "flex", justifyContent: "flex-start", fontStyle: "italic", margin: "30px 0 15px"}}>
                <h3 style={{marginRight: "10px"}}>Links:</h3>
                <a href="https://scanrecs.com" style={{marginRight: "10px"}} target="_blank" rel="no-referrer">scanrecs.com</a>
              </Box>
            </Box>
          </Box>
          <Box className="flexCollapse" sx={{display: "flex", width: "100%", justifyContent: "space-between", marginBottom: "30px"}}>
            <Box className="projectGridItem" sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              {/** Text */}
              <h2 style={{marginBottom: "10px"}}>Predict Covid Deaths ML Algorithm</h2>
              <p style={{marginBottom: "10px"}}>This project is a machine learning algorithm for predicting corona death numbers for a given week based on an infection data set (Kaggle competition). 
              The algorithm was written in Python in a jupyter notebook, primarily using the libraries scikit-learn, numpy and pandas. <i>(Competition place 38/80)</i></p>
              {/** Technologies */}
              <Box sx={{display: "flex", justifyContent: "flex-start", height: smallIconsHeight}}>
                <Image width={100} height={100} src="/techIcons/kisspng-python-high-level-programming-language-language-5abd4cc1374351.5140760915223553932264.png" alt="python" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/scikit.png" alt="scikitlearn" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/numpy.png" alt="numpy" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/pandas.png" alt="pandas" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
              </Box>
              {/** Links */}
              <Box sx={{display: "flex", justifyContent: "flex-start", fontStyle: "italic", margin: "30px 0 15px"}}>
                <h3 style={{marginRight: "10px"}}>Links:</h3>
                <a href="https://github.com/PrivFelixKniest/covid-death-prediction/tree/master" style={{marginRight: "10px"}} target="_blank" rel="no-referrer">Github</a>
                <a href="https://www.kaggle.com/competitions/Covid19-Death-Predictions/overview" style={{marginRight: "10px"}} target="_blank" rel="no-referrer">Kaggle</a>
                <a href="https://www.kaggle.com/competitions/Covid19-Death-Predictions/leaderboard" style={{marginRight: "10px"}} target="_blank" rel="no-referrer">Leaderboard</a>
              </Box>
            </Box>
            <Box className="projectGridItem" >
              <a href="https://www.kaggle.com/competitions/Covid19-Death-Predictions/overview" target="_blank" rel="no-referrer">
                <ImageCarousel images={["/projects/coronadeaths/1.jpg","/projects/coronadeaths/2.jpg"]} />
              </a>
            </Box>
          </Box>
          <Box className="flexCollapse" sx={{display: "flex", width: "100%", justifyContent: "space-between", marginTop: "30px"}}>
            <Box className="projectGridItem">
              <a href="https://scanrecs.com" target="_blank" rel="no-referrer">
                <ImageCarousel images={["/projects/scanrecs/3.jpg","/projects/scanrecs/4.jpg","/projects/scanrecs/1.jpg", "/projects/scanrecs/2.jpg"]} />
              </a>
            </Box>
            <Box className="projectGridItem" sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <h2 style={{marginBottom: "10px"}}>Project Three</h2>
              <p style={{marginBottom: "10px"}}>This is another project that has been butifully executed and is completely done...</p>
              <Box sx={{display: "flex", justifyContent: "flex-start", height: smallIconsHeight}}>
                <Image width={100} height={100} src="/techIcons/firebase.png" alt="firebase" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/express.png" alt="express.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "10px", marginLeft: "5px"}} />
                <Box sx={{height: "100%", width: "1px", backgroundColor: "white", borderRadius: "2px", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/pngwing.png" alt="react.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/mui.png" alt="react.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image width={100} height={100} src="/techIcons/vercel.png" alt="vercel" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
              </Box>
              {/** Links */}
              <Box sx={{display: "flex", justifyContent: "flex-start", fontStyle: "italic", margin: "30px 0 15px"}}>
                <h3 style={{marginRight: "10px"}}>Links:</h3>
                <a href="https://github.com/PrivFelixKniest/covid-death-prediction/tree/master" style={{marginRight: "10px"}} target="_blank" rel="no-referrer">Github</a>
                <a href="https://www.kaggle.com/competitions/Covid19-Death-Predictions/overview" style={{marginRight: "10px"}} target="_blank" rel="no-referrer">Kaggle</a>
                <a href="https://www.kaggle.com/competitions/Covid19-Death-Predictions/leaderboard" style={{marginRight: "10px"}} target="_blank" rel="no-referrer">Leaderboard</a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      
    </Box>
  )
}