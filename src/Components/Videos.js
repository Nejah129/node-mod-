import React from "react";
import video from "../Components/Videos-sorces/video.mp4"
export const Videos = () => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source
          src={video}
          type="video/mp4"
        ></source>
      </video>{" "}
      ||{" "}
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/iLwI3-DpLuY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Videos;
