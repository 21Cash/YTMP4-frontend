import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../constants";

const FastBox = () => {
  const [inputFieldData, setInputFieldData] = useState("");
  const navigate = useNavigate();
  const handleVideoListRedirect = () => {
    if (inputFieldData) {
      navigate(`/VideoList?url=${inputFieldData}`);
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      backgroundColor: "#333",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "500px",
      boxSizing: "border-box",
      padding: "20px",
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
      color: "black",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container} onClick={() => setInputFieldData("")}>
      <label style={styles.label}>
        Video URL:
        <input
          type="text"
          value={inputFieldData}
          onChange={(e) => setInputFieldData(e.target.value)}
          style={styles.input}
        />
      </label>
      {/* <button onClick={handleDownloadClick} style={styles.button}>
        Download
      </button> */}
      <button onClick={handleVideoListRedirect} style={styles.button}>
        Go to Video List
      </button>
    </div>
  );
};

export default FastBox;
