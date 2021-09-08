import React, { useEffect, useState } from "react";
import { Border, Container, Item } from "./styles";
import MediaItem from "./components/MediaItem";
import GlobalStyle from "./globalStyles";

const movies = [
  {
    id: 1,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'la-casa-de-papel.mp4',
    position: { x: 80, y: 198, diff: -92 },
  },
  {
    id: 2,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'la-casa-de-papel.mp4',
    position: { x: 432, y: 198, diff: -60 },
  },
  {
    id: 3,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'la-casa-de-papel.mp4',
    position: { x: 785, y: 198, diff: -29 },
  },
  {
    id: 4,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'la-casa-de-papel.mp4',
    position: { x: 1137, y: 198, diff: 8 },
  },
  {
    id: 5,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'la-casa-de-papel.mp4',
    position: { x: 1490, y: 198, diff: 35 },
  },
];

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [diffX, setDiffX] = useState(0);

  const [lastIdHovered, setLastIdHovered] = useState(null);
  const [expand, setExpand] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const getPosition = (id: any, diff: any, x?: any, y?: any ) => {

    if (id && x !== undefined && y !== undefined) {
      setExpand(true);
      setX(parseInt(x));
      setDiffX(diff);
      setY(parseInt(y) - 25);
      setLastX(parseInt(x));
      setLastIdHovered(id);

      setTimeout(() => {
        setShowVideo(true);
      }, 1000)
    }
  };

  const setInitialPosition = () => {
    setX(movies[0]?.position.x - 58);
    setY(movies[0]?.position.y + 5);
  };

  const closeVideoShow = () => {
    setShowVideo(false);
    setExpand(false);
  };

  useEffect(() => {
    lastIdHovered !== null ? getPosition(lastIdHovered, movies[lastIdHovered]?.position.diff, lastX) : setInitialPosition();
  }, [lastIdHovered, lastX]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Border y={y} x={x && expand ? x + diffX : x} expand={expand} />
        {movies.map((item) => {
          return (
            <Item key={item.id}>
              <MediaItem
                closeVideo={closeVideoShow}
                expand={expand && item.id === lastIdHovered}
                item={item}
                diff={item.position.diff}
                showVideo={showVideo && item.id === lastIdHovered}
                sourceVideo={item.video}
                getPosition={getPosition}
              />
            </Item>
          );
        })}
      </Container>
    </>
  );
};

export default App;
