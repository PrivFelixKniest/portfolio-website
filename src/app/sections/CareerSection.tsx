import React from "react"
import { Box } from "@mui/material";
import { H1Header } from "../components/H1Header";
import { TechnologyCard } from "../components/TechnologyCard";
import Image from "next/image";

export const CareerSection: React.FC<any> = () => {

  let careerPoint = 0;
  const carrerPointSpacer = 70;

  const renderCareerPoint = (title: string, text: string) => {
    careerPoint += 1
    return (
      <Box sx={{display: "flex", position: "absolute", top: `${(careerPoint-1) * carrerPointSpacer + 10}px`, left: "8px", transform: "translateY(-50%)"}}>
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
      <Box sx={{ position: "absolute",top: "0px", left: "0", right: "0" , width: "100%", height: "60px", background: "linear-gradient(#131313,#202020)"}} />
      <Box className="alignContent">
        <Box className="contentContainer">
          <H1Header title="Career & Experience" />
          <Box className="flexCollapse" sx={{display: "flex", justifyContent: "space-between" }}>
            <Box className="gridItem careerPadding" >
              <Box sx={{height: "100%",display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Box sx={{display: "flex",marginBottom: "15px"}}>
                  <h2>Career Path</h2>
                  <Box sx={{width: "15px"}} />
                  <Box sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <a href="https://www.linkedin.com/in/felix-kniest-837b3a235/" rel="norefferer" target="_blank">LinkedIn (German)</a>
                  </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent:"flex-start", position: "relative", marginBottom: "30px"}}>
                  {renderCareerPoint("2014-2022 | Gymnasium, Abitur", "Carl Schurz Schule Frankfurt (1,0 / 4.0 US-4.0-GPA)")}
                  {renderCareerPoint("2022 | e-fellows Scholarship", "Rewarded for special results on the Abitur")}
                  {renderCareerPoint("2022-2025 | Computer Science B.Sc.", "Berufsakademie Rhein Main (Ongoing average grade: 96.5%)")}
                  {renderCareerPoint("2022-2025 | Full Stack Developer", "creditshelf AG")}
                  <Box sx={{ height: `${(careerPoint)*carrerPointSpacer-carrerPointSpacer*0.61}px`, width: "3px", borderRadius: "2px", backgroundColor: "#C6BA9C", margin: "0 10px"}} />
                </Box>
                <h2 style={{marginBottom: "10px"}}>Technologies and Skills</h2>
                <ul style={{marginLeft: "20px"}}>
                  <li><b>Python: </b><a href="https://www.freecodecamp.org/certification/felixkniest/data-analysis-with-python-v7" rel="norefferer" target="_blank">Data Science</a> and Backend Development<span className="skillLevel">Medium/High</span></li>
                  <li><b>React.js: </b>Websites, Business Frontends and Web-Dashboards<span className="skillLevel">Medium/High</span></li>
                  <li><b>Data Bases: </b>MySQL, PostgreSQL, Firestore (NoSQL)<span className="skillLevel">Medium/High</span></li>
                  <li><b>Software Architecture: </b>Conceptualising Software and developing Solutions<span className="skillLevel">Medium</span></li>
                  <li><b>AWS: </b>ECR Repositories, RDS Databases, EC2 Deployment, SSM Environment management<span className="skillLevel">Medium</span></li>
                  <li><b>Java: </b>Object Oriented Programming and principles<span className="skillLevel">Medium</span></li>
                  <li><b>Docker: </b>Containerisation and Container Deployment<span className="skillLevel">Basic/Medium</span></li>
                  <li><b>Express.js: </b>Node Backend<span className="skillLevel">Basic</span></li>
                  <li><b>Flutter: </b>App Development in Dart<span className="skillLevel">Basic</span></li>
                  {/** TODO: add expertise level and maybe icons */}
                </ul>
              </Box>
              
            </Box> 
            <Box className="gridItem">
              <h2>Primary Technologies</h2>
              <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box sx={{backgroundColor: "#131313", margin: "20px 0", padding: "20px", position: "relative"}}>
                  {/* box corners */}
                  <Box sx={{position: "absolute", top: "0", left: "0", overflow: "hidden", height: "50px", width: "50px"}}>
                    <Box sx={{transform: "rotate(45deg) translate(-90%, 0)", height: "200%", width: "100%", backgroundColor: "#202020"}} />
                  </Box>
                  <Box sx={{position: "absolute", bottom: "0", right: "0", overflow: "hidden", height: "50px", width: "50px"}}>
                    <Box sx={{transform: "rotate(225deg) translate(-22%, 0)", height: "200%", width: "100%", backgroundColor: "#202020"}} />
                  </Box>
                  {/** Arrow Decal */}
                  <Box className="arrowDecalBig" sx={{position: "absolute", top: "30%", right: "-10%"}}>
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100px"}}>
                      <Image src="/decals/Slice3.png" width={60} height={40} alt="arrow" style={{transform: "rotate(200deg)"}}/>
                      <Image src="/decals/Slice2.png" width={50} height={50} alt="arrow" style={{transform: "rotate(240deg)"}}/>
                    </Box>
                    <p className="daniel" style={{position: "absolute", right: "-40px", bottom: "38%", width: "60px"}}>Hover</p>
                  </Box>
                  <Box className="arrowDecalSmall" sx={{position: "absolute", top: "48%", right: "-10%", transform: "translateY(-50%)"}}>
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100px"}}>
                      <Image src="/decals/Slice3.png" width={60} height={40} alt="arrow" style={{transform: "rotate(200deg)"}}/>
                      <Image src="/decals/Slice2.png" width={50} height={50} alt="arrow" style={{transform: "rotate(240deg)"}}/>
                    </Box>
                    <p className="daniel" style={{position: "absolute", right: "-40px", bottom: "38%", width: "60px"}}>Tap</p>
                  </Box>
                  <Box sx={{ marginBottom: "40px"}}>
                    <TechnologyCard images={["/techIcons/js.png","/techIcons/htmlcssjs.png","/techIcons/redux.png"]} image={"/techIcons/pngwing.png"} title="React.js" text="Designing and developing artistic dashboards and functional company platforms with React.js." />
                  </Box>
                  <TechnologyCard 
                  images={["/techIcons/fastapi.png","/techIcons/aws.png","/techIcons/pytest.png",]} 
                  image={"/techIcons/kisspng-python-high-level-programming-language-language-5abd4cc1374351.5140760915223553932264.png"} 
                  title="Python" 
                  text="Developing backend APIs and micro services, using FastAPI and deploying them to AWS EC2 via a CI/CD pipeline." 
                  />
                </Box>
                
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}