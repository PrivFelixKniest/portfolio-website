import React from "react"
import { Box } from "@mui/material";
import Image from "next/image";
import sr1image from "../resources/images/projects/scanrecs/1.jpg"
import sr2image from "../resources/images/projects/scanrecs/2.jpg"
import sr3image from "../resources/images/projects/scanrecs/3.jpg"
import sr4image from "../resources/images/projects/scanrecs/4.jpg"
import cd1image from "../resources/images/projects/coronadeaths/1.jpg"
import cd2image from "../resources/images/projects/coronadeaths/2.jpg"
import pythonIcon from "../resources/images/techIcons/kisspng-python-high-level-programming-language-language-5abd4cc1374351.5140760915223553932264.png"
import reactIcon from "../resources/images/techIcons/pngwing.png"
import fastapiIcon from "../resources/images/techIcons/fastapi.png"
import awsIcon from "../resources/images/techIcons/aws.png"
import htmlcssjsIcon from "../resources/images/techIcons/htmlcssjs.png"
import jsIcon from "../resources/images/techIcons/js.png"
import pytestIcon from "../resources/images/techIcons/pytest.png"
import muiIcon from  "../resources/images/techIcons/mui.png"
import reduxIcon from "../resources/images/techIcons/redux.png"
import firebaseIcon from "../resources/images/techIcons/firebase.png"
import javaIcon from "../resources/images/techIcons/java.jpg"
import nextIcon from "../resources/images/techIcons/nextjs.png"
import exIcon from "../resources/images/techIcons/express.png"
import flutter from "../resources/images/techIcons/flutter.png"
import postgresIcon from "../resources/images/techIcons/postgre.png"
import git from "../resources/images/techIcons/git.png"
import mysqlIcon from "../resources/images/techIcons/mysql.png"
import vercelIcon from "../resources/images/techIcons/vercel.png"
import scikitIcon from "../resources/images/techIcons/scikit.png"
import pandasIcon from "../resources/images/techIcons/pandas.png"
import numpyIcon from "../resources/images/techIcons/numpy.png"
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
                <ImageCarousel images={[sr3image,sr4image,sr1image, sr2image]} />
              </a>
            </Box>
            <Box className="projectGridItem" sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <h2 style={{marginBottom: "10px"}}>scanrecs' Website and Artist Dashboard</h2>
              <p style={{marginBottom: "10px"}}>This project for Scan Records, an international underground record label for electronic music, contained a homepage, a webstore using payhip.com and an artist dashboard, which collects, aggregates and displays
              key insights into an artists performance.</p>
              <Box sx={{display: "flex", justifyContent: "flex-start", height: smallIconsHeight}}>
                <Image src={firebaseIcon} alt="firebase" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image src={exIcon} alt="express.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "10px", marginLeft: "5px"}} />
                <Box sx={{height: "100%", width: "1px", backgroundColor: "white", borderRadius: "2px", marginRight: "5px"}} />
                <Image src={reactIcon} alt="react.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image src={muiIcon} alt="Material ui" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image src={vercelIcon} alt="vercel" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
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
                <Image src={pythonIcon} alt="python" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image src={scikitIcon} alt="scikitlearn" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image src={numpyIcon} alt="numpy" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image src={pandasIcon} alt="pandas" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
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
                <ImageCarousel images={[cd1image,cd2image]} />
              </a>
            </Box>
          </Box>
          <Box className="flexCollapse" sx={{display: "flex", width: "100%", justifyContent: "space-between", marginTop: "30px"}}>
            <Box className="projectGridItem">
              <a href="https://scanrecs.com" target="_blank" rel="no-referrer">
                <ImageCarousel images={[sr3image,sr4image,sr1image, sr2image]} />
              </a>
            </Box>
            <Box className="projectGridItem" sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <h2 style={{marginBottom: "10px"}}>Project Three</h2>
              <p style={{marginBottom: "10px"}}>This is another project that has been butifully executed and is completely done...</p>
              <Box sx={{display: "flex", justifyContent: "flex-start", height: smallIconsHeight}}>
                <Image src={firebaseIcon} alt="firebase" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image src={exIcon} alt="express.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "10px", marginLeft: "5px"}} />
                <Box sx={{height: "100%", width: "1px", backgroundColor: "white", borderRadius: "2px", marginRight: "5px"}} />
                <Image src={reactIcon} alt="react.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image src={muiIcon} alt="react.js" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
                <Image src={vercelIcon} alt="vercel" style={{maxHeight: "100%", maxWidth: "100px", height: "auto", width: "auto", marginRight: "5px"}} />
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