import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ videoUrl, onVideoEnd }) => {
  const iframeRef = useRef();

  useEffect(() => {
    const handleVideoMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.event === "onStateChange" && data.info === 0) {
        onVideoEnd();
      }
    };

    window.addEventListener("message", handleVideoMessage);
    return () => window.removeEventListener("message", handleVideoMessage);
  }, [onVideoEnd]);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md">
      <iframe
        ref={iframeRef}
        width="75%"
        height="450"
        src={`${videoUrl}&enablejsapi=1`}
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        className="rounded-md"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
