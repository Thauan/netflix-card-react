import React from "react";
import { Video } from "./styles";

interface VideoItemProps {
  blur?: number;
  source: string;
  expand: boolean;
  getPosition: any;
  closeVideo: any;
  itemId: number;
}

const VideoItem = ({ source, blur, expand, getPosition, itemId, closeVideo }: VideoItemProps) => {
  
  return (
    <>
      <Video
        style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
        onMouseMove={() => getPosition(itemId)}
        onMouseDown={() => closeVideo()}
        expand={expand}
        muted
        autoPlay // working
        loop
      >
        <source src={source} type="video/mp4" />
      </Video>
    </>
  );
};

export default VideoItem;
