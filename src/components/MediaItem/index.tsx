import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ImageItem, Item } from "./styles";
import VideoItem from "../VideoItem";

interface MediaItemProps {
  expand: boolean;
  showVideo: boolean;
  item: any;
  diff: any;
  getPosition: any;
  closeVideo: any;
  sourceVideo: string;
}

interface PositionCordinatesProps {
  y: number;
  x: number;
}

const MediaItem = ({
  expand,
  item,
  getPosition,
  showVideo,
  sourceVideo,
  diff,
  closeVideo,
}: MediaItemProps) => {
  const itemHover: React.RefObject<HTMLDivElement> = useRef<any>(null);
  // const [blur, setBlur] = useState(true)
  const [position, setPosition] = useState<PositionCordinatesProps>({
    y: 0,
    x: 0,
  });

  useEffect(() => {
    const positionCordinates = itemHover.current?.getBoundingClientRect();

    console.log(itemHover.current?.getBoundingClientRect());
    setPosition({ y: positionCordinates!.y, x: positionCordinates!.x});
  }, []);

  return (
    <Item ref={itemHover}>
      {!expand && !showVideo ? (
        <ImageItem
          expand={expand}
          src={item.url}
          onMouseMove={() =>
            getPosition(
              item.id,
              diff,
              itemHover.current?.getBoundingClientRect().x,
              itemHover.current?.getBoundingClientRect().y
            )
          }
        />
      ) : (
        <VideoItem
          blur={0}
          source={sourceVideo}
          expand={expand}
          itemId={item.id}
          closeVideo={() => closeVideo()}
          getPosition={() =>
            getPosition(
              item.id,
              diff,
              itemHover.current?.getBoundingClientRect().x,
              itemHover.current?.getBoundingClientRect().y
            )
          }
        />
      )}
    </Item>
  );
};

export default MediaItem;
