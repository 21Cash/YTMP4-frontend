import React, { useEffect } from "react";
import FastBox from "./FastBox";
import ServerStatus from "../ServerStatus/ServerStatus";
import { Link } from "react-router-dom";

const Fast = () => {
  const styles = {
    title: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      textAlign: "center",
      width: "100%",
    },
    navTitle: {
      padding: "0px 0px 0px 10px",
      fontSize: "2rem",
      margin: 0,
    },
  };

  const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <p>
          © {currentYear} Sushil L, No Rights Reserved |{" "}
          <a
            href="https://github.com/21Cash/YTMP4-frontend"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4a90e2", textDecoration: "none" }}
          >
            View Source Code
          </a>
        </p>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#333",
          color: "#4a90e2",
          padding: "10px",
          textAlign: "center",
          boxSizing: "border-box",
          height: "60px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#4a90e2" }}>
          <h1 style={styles.navTitle}>21YTMP4</h1>
        </Link>

        <ServerStatus />
      </div>

      <div
        style={{
          backgroundColor: "#1e1e1e",
          height: "calc(100vh - 60px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#4a90e2",
          padding: "20px",
          boxSizing: "border-box",
          marginTop: "60px",
        }}
      >
        <h1 style={styles.title}>Download Video</h1>
        <FastBox />
      </div>

      <Footer />
    </>
  );
};

export default Fast;
