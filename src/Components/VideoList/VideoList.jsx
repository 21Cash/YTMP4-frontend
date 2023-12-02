// VideoList.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { backendUrl } from "../../constants";

const VideoList = () => {
  const [videoData, setVideoData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const urlParam = searchParams.get("url");

  useEffect(() => {
    console.log("Awake From VideoList Component");
    const fetchData = async () => {
      try {
        const apiUrl = `${backendUrl}/formats?url=${urlParam}`;
        console.log(apiUrl);
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

  const redirectToLink = (url) => {
    window.open(url, "_blank");
  };

  const extractMimeType = (mimeType) => {
    const index = mimeType.indexOf(";");
    return index !== -1 ? mimeType.substring(0, index) : mimeType;
  };

  return (
    <div>
      <h2>Video List</h2>
      <table>
        <thead>
          <tr>
            <th>hasVideo</th>
            <th>hasAudio</th>
            <th>mimeType</th>
            <th>qualityLabel</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {videoData.map((video, index) => (
            <tr key={index}>
              <td>{video.hasVideo ? "Yes" : "No"}</td>
              <td>{video.hasAudio ? "Yes" : "No"}</td>
              <td>{extractMimeType(video.mimeType)}</td>
              <td>{video.qualityLabel}</td>
              <td>
                <button onClick={() => redirectToLink(video.url)}>Link</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoList;
