import React from "react"
import { Box } from "@mui/material";
import { H1Header } from "../components/H1Header";

export const CareerSection: React.FC<any> = () => {

  let careerPoint = 0;
  const carrerPointSpacer = 50;

  const renderCareerPoint = (title: string, text: string) => {
    careerPoint += 1
    return (
      <Box sx={{display: "flex", position: "absolute", top: `${(careerPoint-1) * carrerPointSpacer}px`, left: "8px"}}>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "15px"}}>
          <Box sx={{width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#C6BA9C"}} />
        </Box>
        <p>
          <b>{title}</b> - {text}
        </p>
      </Box>
    )
  }

  return (
    <Box id="career" className="section" sx={{backgroundColor: "#202020", position: "relative"}}>
      <Box sx={{ position: "absolute",top: "-10px", left: "0", right: "0" , width: "100%", height: "60px", background: "linear-gradient(#131313,#202020)"}} />
      <Box className="alignContent">
        <Box className="contentContainer">
          <H1Header title="Career & Experience" />
          <Box className="flexCollapse" sx={{display: "flex", justifyContent: "space-between" }}>
            <Box className="gridItem">
              <Box sx={{display: "flex", justifyContent:"flex-start", position: "relative"}}>
                  {renderCareerPoint("Abitur | 2014-2022", "Carl Schurz Schule Frankfurt (1,0/ 4.0 GPA) ")}
                  {renderCareerPoint("Computer Science B.Sc. | 2022-2025", "Berufsakademie Rhein Main")}
                  {renderCareerPoint("Full Stack Developer | 2022-2025", "creditshelf AG")}
                  <Box sx={{ height: `${(careerPoint)*carrerPointSpacer-carrerPointSpacer*0.61}px`, width: "3px", borderRadius: "2px", backgroundColor: "#C6BA9C", margin: "0 10px"}} />
              </Box>
            </Box> 
            <Box className="gridItem">
              Experience
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}