import React from "react";
import { Box } from "@mui/material";
import { H1Header } from "../components/H1Header";
import Image from "next/image";

const downloadFile = (fileName: string) => {
  const pdfUrl = "downloadable/" + fileName;
  console.log(pdfUrl);
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = fileName; // specify the filename
  document.body.appendChild(link);
  console.log(link);
  link.click();
  document.body.removeChild(link);
};

export const AboutMeSection: React.FC<any> = () => {
  return (
    <Box
      id="aboutme"
      className="section"
      sx={{
        backgroundColor: "#232323",
        position: "relative",
        marginBottom: "0",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          height: "80px",
          width: "100%",
          backgroundColor: "rgba(35,35,35,1)",
          background:
            "linear-gradient(180deg, rgba(19,19,19,1) 0%, rgba(35,35,35,1) 100%)",
        }}
      />
      <Box className="alignContent">
        <Box className="contentContainer">
          <H1Header title="About Me" />
          <Box
            className="flexCollapse noMargin"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box className="gridItem">
              <Image
                src={"/portrait-slim.png"}
                width={600}
                height={240}
                style={{ width: "100%", height: "auto" }}
                alt="portrait"
              />
              <p
                className="daniel"
                style={{ fontSize: "13px", textAlign: "right" }}
              >
                Photo by Anton Buddeberg: Me in front of the
                &quot;Honsellbrücke&quot; - Frankfurt
              </p>
            </Box>
            <Box
              className="gridItem"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p>
                I grew up in Frankfurt, Germany and quickly stumbled over game
                development as a child.
                <br />
                <br />
                With time, my passion for code matured and developed into what
                it is today and has enabled me to keep sharpening my software
                develoment skills.
                <br />
                <br />
                Today, I enjoy analyzing problems and developing solutions. I
                love conceptualising systems, finding real life applications for
                my skillset and seeing a project come to life piece by piece.
                <br />
                Next to my interest in software, I also enjoy utilising music
                and art as a creative outlet.
                <br />
                <br />
                <span style={{ color: "#C6BA9C" }}>
                  contact@felixkniest.com
                </span>{" "}
              </p>
            </Box>
          </Box>
          <p style={{ marginBottom: "4px" }}>
            After my Abitur at &quot;Carl Schurz Schule Frankfurt&quot; in 2022
            (Grade 1.0 or 4.0/4 GPA | Majors in Maths and Chemistry), I started
            studying Applied Computer Science in a cooperative study program
            (Duales Studium) at BA Rhein Main in 2022 (Current Grade 1.3 or
            96.3% avg) and will recieve my Bachelors of Science in 2025. The
            cooperative study program allows me to work full time at creditshelf
            AG for 6 months out of the year next to my 6 months of full time
            studies. For more information see my LinkedIn page linked below.
          </p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <button
              className="prim-button"
              onClick={() => {
                downloadFile("Notenbesch-FK.pdf");
              }}
            >
              Download Current Grades (Applied CS 12.02.2024)
            </button>
            <a
              className="prim-button"
              href="https://www.linkedin.com/in/felix-kniest/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
