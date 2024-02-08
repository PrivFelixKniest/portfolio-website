import { Box } from "@mui/material";
import React from "react";

interface H1HeaderProps {
  title: string;
}

export const H1Header: React.FC<H1HeaderProps> = (props) => {
  const { title } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          overflow: "hidden",
          marginRight: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#C6BA9C",
        }}
      >
        <Box className="h1HeaderBlock b1" />
        <Box className="h1HeaderBlock b2" />
        <Box className="h1HeaderBlock b3" />
        <Box className="h1HeaderBlock b4" />
        <Box className="h1HeaderBlock b5" />
        <Box className="h1HeaderBlock b6" />
        <Box className="h1HeaderBlock b7" />
        <Box className="h1HeaderBlock b8" sx={{ marginRight: "0" }} />
      </Box>
      <Box className="hover-underline-animation">
        <h1 style={{ whiteSpace: "nowrap" }}>{title}</h1>
      </Box>

      <Box sx={{ flexGrow: "1", overflow: "hidden" }}>
        <Box
          className="h1HeaderLine"
          sx={{
            width: "50%",
            height: "3px",
            backgroundColor: "#C6BA9C",
            borderRadius: "2px",
          }}
        />
      </Box>
    </Box>
  );
};
