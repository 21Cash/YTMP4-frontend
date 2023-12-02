import React, { useState } from "react";
import { backendUrl } from "../../constants";

const InputBox = () => {
  const [inputFieldData, setInputFieldData] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("144p");

  const handleDownloadClick = () => {
    const apiUrl = `${backendUrl}/download?url=${inputFieldData}&quality=${selectedQuality}`;

    const downloadLink = document.createElement("a");
    downloadLink.href = apiUrl;
    downloadLink.download = "audio_file.mp4";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const handleContainerClick = () => {
    // setInputFieldData("");
  };

  const handleQualityChange = (e) => {
    setSelectedQuality(e.target.value);
  };

  const qualityOptions = [
    "144p",
    "240p",
    "360p",
    "480p",
    "720p",
    "1080p",
    "1440p",
    "2160p",
  ];

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      backgroundColor: "#333",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%", // Set width to 100% for responsiveness
      maxWidth: "500px", // Add maxWidth to limit the width on larger screens
      boxSizing: "border-box",
      padding: "20px", // Add padding for better spacing
    },
    label: {
      marginBottom: "10px",
      color: "#fff",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #555",
      backgroundColor: "#555",
      color: "#fff",
    },
    button: {
      marginTop: "10px",
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      backgroundColor: "#61dafb",
      color: "#black",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container} onClick={handleContainerClick}>
      <label style={styles.label}>
        Link:
        <input
          type="text"
          value={inputFieldData}
          onChange={(e) => setInputFieldData(e.target.value)}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Quality:
        <select
          value={selectedQuality}
          onChange={handleQualityChange}
          style={styles.input}
        >
          {qualityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleDownloadClick} style={styles.button}>
        Download
      </button>
    </div>
  );
};

export default InputBox;
