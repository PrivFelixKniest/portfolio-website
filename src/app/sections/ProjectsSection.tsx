import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { ImageCarousel } from "../components/ImageCarousel";
import { H1Header } from "../components/H1Header";

export const ProjectsSection: React.FC<any> = () => {
  const smallIconsHeight = "35px";
  return (
    <Box id="projects" className="section">
      <Box className="alignContent">
        <Box className="contentContainer">
          <Box
            sx={{
              position: "absolute",
              top: "180px",
              right: "0",
              overflow: "hidden",
            }}
          >
            <Box sx={{ transform: "translateX(60%)" }}>
              <Image
                width={600}
                height={600}
                src="/decals/creativityproductivityLarge.png"
                alt="decal"
                className="rotateDecal"
                style={{ width: "200px", height: "200px" }}
              />
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <H1Header title="Projects" />
            {/** Arrow Decal */}
            <Box
              className="arrowDecalBig"
              sx={{ position: "absolute", top: "0", left: "-40px" }}
            >
              <Image
                src="/decals/Slice2.png"
                width={40}
                height={40}
                alt="arrow"
                style={{ transform: "rotate(67deg)" }}
              />
              <p
                className="daniel"
                style={{
                  position: "absolute",
                  right: "-60px",
                  bottom: "-125px",
                  transform: "rotate(-84deg)",
                  width: "230px",
                }}
              >
                Some of my Projects ...
              </p>
            </Box>
          </Box>
          {/** WAILL */}
          <h1 className="projectNumber">1.</h1>
          <Box
            className="flexCollapse"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box className="gridItem">
              <ImageCarousel
                images={[
                  "/projects/waill/home.png",
                  "/projects/waill/tutorial.png",
                  "/projects/waill/mobile.png",
                ]}
              />
            </Box>
            <Box
              className="gridItem"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>Waill Document Search AI</h2>
              <p style={{ marginBottom: "10px" }}>
                Waill is a web service for document information exctraction
                currently based on OpenAI beta API features. Sign up on Waill
                and OpenAI and start asking your documents questions to gain
                insights faster. <br />
                <span style={{ opacity: 0.6 }}>
                  (After logging in, loadtimes of the platform might be a bit
                  longer than expected due to server coldstarts.)
                </span>
              </p>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: smallIconsHeight,
                }}
              >
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/kisspng-python-high-level-programming-language-language-5abd4cc1374351.5140760915223553932264.png"
                  alt="python"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/openai.webp"
                  alt="express.js"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "10px",
                    marginLeft: "5px",
                  }}
                />
                <Box
                  sx={{
                    height: "100%",
                    width: "2px",
                    backgroundColor: "white",
                    borderRadius: "2px",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/pngwing.png"
                  alt="react.js"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/mui.png"
                  alt="Material ui"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/vercel.png"
                  alt="vercel"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
              </Box>
              {/** Links */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontStyle: "italic",
                  margin: "30px 0 0px",
                }}
              >
                <h3 style={{ marginRight: "10px" }}>Visit Project:</h3>
                <a
                  href="https://waill.net"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  waill.net
                </a>
                <a
                  href="https://github.com/PrivFelixKniest/waill"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  Github
                </a>
              </Box>
            </Box>
          </Box>
          {/** SCANRECS ADMIN */}
          <h1 className="projectNumber">2.</h1>
          <Box
            className="flexCollapseReverse"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              className="gridItem"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/** Text */}
              <h2 style={{ marginBottom: "10px" }}>
                Scan Admin Platform / labeltrackr.
              </h2>
              <p style={{ marginBottom: "10px" }}>
                In order to simplify the operation of Scan Records, an
                indipendent music label for electronic music, I developed the
                Scan Admin Platform, a Next.JS web application that collects,
                stores and manages artist and release data, allowing artists to
                add information to their own releases and submit songs
                independently. <br />
                I&apos;m currently working on generalising the Admin Platform as
                a standalone SaaS product &quot;labeltrackr&quot; (Not open to
                the public yet). Visit{" "}
                <a
                  href="https://labeltrackr.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  labeltrackr.com
                </a>{" "}
                for more Information.
              </p>
              {/** Technologies */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: smallIconsHeight,
                }}
              >
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/next.png"
                  alt="next js"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/tailwind.svg"
                  alt="tailwind"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/mui.png"
                  alt="mui"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
              </Box>
              {/** Links */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontStyle: "italic",
                  margin: "30px 0 0px",
                }}
              >
                <h3 style={{ marginRight: "10px" }}>Visit Project:</h3>
                <a
                  href="https://admin.scanrecs.com/submit-your-song"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  Submit Songs
                </a>
                <a
                  href="https://admin.scanrecs.com/submit-song-release-information"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  Submit Release Information
                </a>
              </Box>
            </Box>
            <Box className="gridItem">
              <ImageCarousel
                images={[
                  "/projects/scan-admin/home.png",
                  "/projects/scan-admin/songinfo.png",
                  "/projects/scan-admin/releaseinfo.png",
                  "/projects/scan-admin/submit.png",
                ]}
              />
            </Box>
          </Box>
          {/** SCANRECS ARTIST DASHBOARD */}
          <h1 className="projectNumber">3.</h1>
          <Box
            className="flexCollapse"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box className="gridItem">
              <ImageCarousel
                images={[
                  "/projects/scanrecs/3.jpg",
                  "/projects/scanrecs/4.jpg",
                  "/projects/scanrecs/scanrecsToDash.gif",
                  "/projects/scanrecs/1.jpg",
                  "/projects/scanrecs/2.jpg",
                  "/projects/scanrecs/scanrecsAddNew.gif",
                ]}
              />
            </Box>
            <Box
              className="gridItem"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>
                scanrecs&apos; Website and Artist Dashboard
              </h2>
              <p style={{ marginBottom: "10px" }}>
                This project for Scan Records, an international underground
                record label for electronic music, contained a homepage, a
                webstore using payhip.com and an artist dashboard, which
                collects, aggregates and displays key insights into an artists
                performance.
              </p>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: smallIconsHeight,
                }}
              >
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/firebase.png"
                  alt="firebase"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/express.png"
                  alt="express.js"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "10px",
                    marginLeft: "5px",
                  }}
                />
                <Box
                  sx={{
                    height: "100%",
                    width: "2px",
                    backgroundColor: "white",
                    borderRadius: "2px",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/pngwing.png"
                  alt="react.js"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/mui.png"
                  alt="Material ui"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/vercel.png"
                  alt="vercel"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
              </Box>
              {/** Links */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontStyle: "italic",
                  margin: "30px 0 0px",
                }}
              >
                <h3 style={{ marginRight: "10px" }}>Visit Project:</h3>
                <a
                  href="https://scanrecs.com"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  scanrecs.com
                </a>
              </Box>
            </Box>
          </Box>
          {/** COVID PREDICTIONS */}
          <h1 className="projectNumber">4.</h1>
          <Box
            className="flexCollapseReverse"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              className="gridItem"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/** Text */}
              <h2 style={{ marginBottom: "10px" }}>
                Predict Covid Deaths ML Algorithm
              </h2>
              <p style={{ marginBottom: "10px" }}>
                This project is a machine learning algorithm for predicting
                corona death numbers for a given week based on an infection data
                set (Kaggle competition). The algorithm was written in Python in
                a jupyter notebook, primarily using the libraries scikit-learn,
                numpy and pandas. <i>(Competition place 38/80)</i>
              </p>
              {/** Technologies */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: smallIconsHeight,
                }}
              >
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/kisspng-python-high-level-programming-language-language-5abd4cc1374351.5140760915223553932264.png"
                  alt="python"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/scikit.png"
                  alt="scikitlearn"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/numpy.png"
                  alt="numpy"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/pandas.png"
                  alt="pandas"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
              </Box>
              {/** Links */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontStyle: "italic",
                  margin: "30px 0 0px",
                }}
              >
                <h3 style={{ marginRight: "10px" }}>Visit Project:</h3>
                <a
                  href="https://github.com/PrivFelixKniest/covid-death-prediction/tree/master"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  Github
                </a>
                <a
                  href="https://www.kaggle.com/competitions/Covid19-Death-Predictions/overview"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  Kaggle
                </a>
                <a
                  href="https://www.kaggle.com/competitions/Covid19-Death-Predictions/leaderboard"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  Leaderboard
                </a>
              </Box>
            </Box>
            <Box className="gridItem">
              <ImageCarousel
                images={[
                  "/projects/coronadeaths/1.jpg",
                  "/projects/coronadeaths/2.jpg",
                  "/projects/coronadeaths/3.jpg",
                ]}
              />
            </Box>
          </Box>
          {/** SWIPING HEADER */}
          <h1 className="projectNumber">5.</h1>
          <Box
            className="flexCollapse"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box className="gridItem">
              <ImageCarousel
                images={[
                  "/projects/swiping-header/TrafficJamExample.gif",
                  "/projects/swiping-header/npm.jpg",
                ]}
              />
            </Box>
            <Box
              className="gridItem"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>
                &quot;swiping-header&quot; npm Package
              </h2>
              <p style={{ marginBottom: "10px" }}>
                This npm package provides an easy to use API to integrate a
                &quot;Swipe Up&quot; header, as it can be found on this website,
                within your own React.js application.
              </p>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: smallIconsHeight,
                }}
              >
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/npm.png"
                  alt="firebase"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/rollup.png"
                  alt="react.js"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Box
                  sx={{
                    height: "100%",
                    width: "2px",
                    backgroundColor: "white",
                    borderRadius: "2px",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/storybook.png"
                  alt="react.js"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
                <Image
                  width={100}
                  height={100}
                  src="/techIcons/pngwing.png"
                  alt="react.js"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100px",
                    height: "auto",
                    width: "auto",
                    marginRight: "5px",
                  }}
                />
              </Box>
              {/** Links */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontStyle: "italic",
                  margin: "30px 0 0",
                }}
              >
                <h3 style={{ marginRight: "10px" }}>Visit Project:</h3>
                <a
                  href="https://github.com/PrivFelixKniest/swiping-header"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  Github
                </a>
                <a
                  href="https://www.npmjs.com/package/swiping-header?activeTab=readme"
                  style={{ marginRight: "10px" }}
                  target="_blank"
                  rel="no-referrer"
                >
                  npm
                </a>
              </Box>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", marginTop: "30px" }}>
            <p>
              <i>And many more...</i>
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
