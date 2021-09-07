import React from "react";
import { ImageItem } from "./styles";
import VideoItem from "../VideoItem";

interface MediaItemProps {
  expand: boolean;
  showVideo: boolean;
  item: any;
  getPosition: any;
  closeVideo: any;
  sourceVideo: string;
}

const MediaItem = ({
  expand,
  item,
  getPosition,
  showVideo,
  sourceVideo,
  closeVideo,
}: MediaItemProps) => {
  return (
    <>
      {!expand && !showVideo ? (
        <ImageItem
          expand={expand}
          src={item.url}
          onMouseMove={() => getPosition(item.id)}
        />
      ) : (
        <VideoItem
          blur={0}
          source={sourceVideo}
          expand={expand}
          itemId={item.id}
          closeVideo={() => closeVideo()}
          getPosition={() => getPosition(item.id)}
        />
      )}
    </>
  );
};

export default MediaItem;
