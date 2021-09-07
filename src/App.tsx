import React, { useEffect, useState } from "react";
import { Border, Container, Item } from "./styles";
import MediaItem from "./components/MediaItem";
import GlobalStyle from "./globalStyles";

const movies = [
  {
    id: 1,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'http://localhost:3000/la-casa-de-papel.mp4',
    position: { x: 80, y: 198 },
  },
  {
    id: 2,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'http://localhost:3000/la-casa-de-papel.mp4',
    position: { x: 432, y: 198 },
  },
  {
    id: 3,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'http://localhost:3000/la-casa-de-papel.mp4',
    position: { x: 785, y: 198 },
  },
  {
    id: 4,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'http://localhost:3000/la-casa-de-papel.mp4',
    position: { x: 1137, y: 198 },
  },
  {
    id: 5,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    video: 'http://localhost:3000/la-casa-de-papel.mp4',
    position: { x: 1490, y: 198 },
  },
];

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [lastIdHovered, setLastIdHovered] = useState(null);
  const [expand, setExpand] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const getPosition = (id: any) => {
    if (id !== undefined) {
      setX(movies[id - 1]?.position.x);
      setExpand(true);
      setLastIdHovered(id);

      setTimeout(() => {
        setShowVideo(true);
      }, 1000)
    }
  };

  const setInitialPosition = () => {
    setX(movies[0]?.position.x + 10);
    setY(movies[0]?.position.y);
  };

  const closeVideoShow = () => {
    console.log('passei aqui');

    setShowVideo(false);
    setExpand(false);
  };

  useEffect(() => {
    lastIdHovered !== null ? getPosition(lastIdHovered) : setInitialPosition();
  }, [lastIdHovered]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Border y={y + 10} x={x && expand ? x - 80 : x} expand={expand} />
        {movies.map((item) => {
          return (
            <Item key={item.id}>
              <MediaItem
                closeVideo={closeVideoShow}
                expand={expand && item.id === lastIdHovered}
                item={item}
                showVideo={showVideo && item.id === lastIdHovered}
                sourceVideo={item.video}
                getPosition={() => getPosition(item.id)}
              />
            </Item>
          );
        })}
      </Container>
    </>
  );
};

export default App;
