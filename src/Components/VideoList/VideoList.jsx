import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { backendUrl } from "../../constants";

const VideoList = () => {
  const [videoData, setVideoData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const urlParam = searchParams.get("url");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${backendUrl}/formats?url=${urlParam}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setVideoData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (urlParam) {
      fetchData();
    }
  }, [urlParam]);

  const redirectToLink = async (video) => {
    const apiUrl = `${backendUrl}/fastdownload?url=${urlParam}&itag=${video.itag}`;

    const downloadLink = document.createElement("a");
    downloadLink.href = apiUrl;
    downloadLink.download = "audio_file.mp4";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const extractMimeType = (mimeType, itag) => {
    const modifiedMimeType = mimeType.replace(";", ` (${itag});`);
    return modifiedMimeType;
  };

  function formatBytes(bytes) {
    if (bytes < 1024) {
      return bytes + " bytes";
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(2) + "KB";
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(2) + "MB";
    } else {
      return (bytes / 1073741824).toFixed(2) + "GB";
    }
  }

  // Prioritize videos with both hasAudio and hasVideo
  const prioritizedVideos = videoData.filter(
    (video) => video.hasAudio && video.hasVideo
  );
  const otherVideos = videoData.filter(
    (video) => !video.hasAudio || !video.hasVideo
  );
  const sortedVideoData = [...prioritizedVideos, ...otherVideos];

  const styles = {
    videoListContainer: {
      backgroundColor: "#1e1e1e",
      color: "#fff",
      padding: "20px",
      maxWidth: "100%", // Adjusts container width for smaller screens
      overflowX: "auto", // Allows horizontal scrolling for small screens
    },
    videoTable: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    tableCell: {
      border: "1px solid #fff",
      padding: "8px",
      maxWidth: "150px", // Adjust maximum width of cells for smaller screens
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    tableHeader: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "8px",
    },
    linkButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "8px 15px", // Adjust button padding for better touch accessibility
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.videoListContainer}>
      <h2>Video List</h2>
      <table style={styles.videoTable}>
        <thead>
          <tr>
            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
              hasVideo
            </th>
            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
              hasAudio
            </th>
            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
              File Type
            </th>
            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
              qualityLabel
            </th>
            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedVideoData.map((video, index) => (
            <tr key={index}>
              <td style={styles.tableCell}>{video.hasVideo ? "Yes" : "No"}</td>
              <td style={styles.tableCell}>{video.hasAudio ? "Yes" : "No"}</td>
              <td style={styles.tableCell}>
                {extractMimeType(video.mimeType, video.itag)}
              </td>
              <td style={styles.tableCell}>
                {video.qualityLabel}

                {` (${formatBytes(video.contentLength)})`}
              </td>
              <td style={{ ...styles.tableCell, textAlign: "center" }}>
                <button
                  style={styles.linkButton}
                  onClick={() => redirectToLink(video)}
                >
                  Download File
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoList;
