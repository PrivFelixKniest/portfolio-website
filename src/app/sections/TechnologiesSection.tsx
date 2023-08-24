"use client";

import React, { useState } from "react"
import { Box } from "@mui/material";
import { TechnologyCard } from "../components/TechnologyCard";
import Image, { StaticImageData } from "next/image";
import { H1Header } from "../components/H1Header";

export const TechnologiesSection: React.FC<any> = () => {

  const [smallIconTitle, setSmallIconTitle] = useState("‎");
  const [smallIconText, setSmallIconText] = useState("‎");
  const [smallIconExpertise, setSmallIconExpertise] = useState("‎");

  const handleIconEnter = (title: string, text: string, expertise: "Basic expertise"|"Basic/Medium expertise"|"Medium expertise"|"Medium/High expertise"|"High expertise" ) => {
    setSmallIconTitle(title)
    setSmallIconText(text)
    setSmallIconExpertise(expertise)
  }

  const handleIconLeave = () => {
    setSmallIconTitle("‎")
    setSmallIconText("‎")
    setSmallIconExpertise("‎")
  }

  const renderTechIcon = (icon: string) => {
    return (
      <Image width={200} height={300} className="lesserExpTechIcon" src={icon} alt="Less experienced technologies" style={{maxHeight: "80px", maxWidth: "150px", width: "auto", height: "auto", borderRadius: "20px", margin: "10px"}}/>
    )
  }
  return (
    <Box id="technologies" className="section">
      <Box className="alignContent">
        <Box className="contentContainer">
          <H1Header title="Technologies" />
          <p style={{marginBottom: "30px"}}>The Technologies I use frequently.</p>
          <Box className="flexCollapse" sx={{display: "flex", justifyContent: "center"}}>
            <TechnologyCard 
              images={["/techIcons/fastapi.png","/techIcons/aws.png","/techIcons/pytest.png",]} 
              image={"/techIcons/kisspng-python-high-level-programming-language-language-5abd4cc1374351.5140760915223553932264.png"} 
              title="Python" 
              text="Developing backend APIs and micro services, using FastAPI and deploying them to AWS EC2 via a CI/CD pipeline." 
            />
            <Box sx={{height: "40px", width: "40px"}} />
            <TechnologyCard images={["/techIcons/js.png","/techIcons/htmlcssjs.png","/techIcons/redux.png"]} image={"/techIcons/pngwing.png"} title="React.js" text="Designing and developing artistic dashboards and functional company platforms with React.js." />
          </Box>
        </Box>
      </Box>
      <Box className="alignContent" sx={{paddingBottom: "40px"}}>
        <Box className="contentContainer">
          <p style={{marginBottom: "30px",marginTop: "50px"}}>Technologies I have worked with.</p>
          <Box className="flexCollapseReverse" sx={{ display: "flex", flexDirection: "column"}}>
            <Box sx={{position: "relative", height: "200px"}}>
              <Box sx={{position: "absolute", top: "0", right: "0", transform: "translateY(-18%)"}}>
                <Image width={600} height={600} src="/decals/creativityproductivityLarge.png" alt="decal" className="rotateDecal" style={{width: "200px", height: "200px"}} />
              </Box>
              <Box className="flexCollapse highlightbar" sx={{position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", display: "flex", justifyContent: "center", padding: "10px", width: "100vw"}}>
                <Box className="hover-underline-animation" onMouseEnter={() => {
                  return handleIconEnter("PostgreSQL", "Managing and accessing relational AWS RDS PostgreSQL databases with Python and DBeaver.", "Medium expertise")
                }} onMouseLeave={() => handleIconLeave()}>
                  {renderTechIcon("/techIcons/postgre.png")}
                </Box>
                <Box className="hover-underline-animation" onMouseEnter={() => {
                  return handleIconEnter("MySQL", "Managing and accessing relational AWS RDS MySQL databases with Python and DBeaver.", "Basic/Medium expertise")
                }} onMouseLeave={() => handleIconLeave()}>
                  {renderTechIcon("/techIcons/mysql.png")}
                </Box>
                <Box className="hover-underline-animation" onMouseEnter={() => {
                  return handleIconEnter("Express.JS", "For JavaScript serverless Backend APIs using node.js.", "Basic expertise")
                }} onMouseLeave={() => handleIconLeave()}>
                  {renderTechIcon("/techIcons/expressbg.png")}
                </Box>
                <Box className="hover-underline-animation" onMouseEnter={() => {
                  return handleIconEnter("Firebase", "Managing and accessing NoSQL data in the Firestore document database.", "Basic expertise")
                }} onMouseLeave={() => handleIconLeave()}>
                  {renderTechIcon("/techIcons/firebase.png")}
                </Box>
                <Box className="hover-underline-animation" onMouseEnter={() => {
                  return handleIconEnter("Java", "Building object oriented systems, applications, CLIs and interfaces.", "Basic/Medium expertise")
                }} onMouseLeave={() => handleIconLeave()}>
                  {renderTechIcon("/techIcons/java.jpg")}
                </Box>
                <Box className="hover-underline-animation" onMouseEnter={() => {
                  return handleIconEnter("git - Github", "Code collaboration and teamwork both professionally and on side projects.", "Medium/High expertise")
                }} onMouseLeave={() => handleIconLeave()}>
                  {renderTechIcon("/techIcons/git.png")}
                </Box>
                <Box className="hover-underline-animation" onMouseEnter={() => {
                  return handleIconEnter("Flutter - Dart", "Building Android and IOS applications with Firestore and Fireauth.", "Basic expertise")
                }} onMouseLeave={() => handleIconLeave()}>
                  {renderTechIcon("/techIcons/flutter.png")}
                </Box>
                <Box className="hover-underline-animation" onMouseEnter={() => {
                  return handleIconEnter("Material UI", "Enhancing UI layout development speeds by utilising prebuilt components by MUI.", "Medium/High expertise")
                }} onMouseLeave={() => handleIconLeave()}>
                  {renderTechIcon("/techIcons/mui.png")}
                </Box>
                <Box className="hover-underline-animation" onMouseEnter={() => {
                  return handleIconEnter("Next.js", "Expanding the React.js workflow with Next.js.", "Medium expertise")
                }} onMouseLeave={() => handleIconLeave()}>
                  {renderTechIcon("/techIcons/nextjs.png")}
                </Box>
              </Box>
            </Box>
            <Box sx={{minHeight: "30px", maxHeight: "30px", minWidth: "30px", maxWidth: "30px"}} />
            <Box>
              <Box sx={{display: "flex"}}>
                <h3 style={{margin: "0 0 20px "}}>{smallIconTitle}</h3>
                <Box sx={{color: "rgba(255,255,255,0.7)", marginTop: "3px", marginLeft: "10px"}}>
                  {smallIconExpertise}
                </Box>
              </Box>
              <p>{smallIconText}</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    
    
  )
}