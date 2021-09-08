import React, { ForwardedRef} from "react";
import { Video } from "./styles";

interface VideoItemProps {
  blur?: number;
  source: string;
  expand: boolean;
  getPosition: any;
  closeVideo: any;
  itemId: number;
  ref?: any;
}

const VideoItem = ({ source, blur, expand, getPosition, itemId, closeVideo, ref }: VideoItemProps) => {
  // const refVideo = React.forwardRef(ref);
  
  return (
    <>
      <Video
        style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
        onMouseMove={() => getPosition(itemId)}
        onMouseDown={() => closeVideo()}
        expand={expand}
        // ref={refVideo}
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
