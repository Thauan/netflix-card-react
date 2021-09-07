import React, { useEffect, useState } from "react";
import { Border, ImageItem, Container } from "./styles";
import './App.css';


const movies = [
  {
    id: 1,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    position: { x: 80, y: 196, expanded: {x: -2, y: 196}},
    
  },
  {
    id: 2,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    position: { x: 432, y: 196, expanded: {x: -2, y: 196}},
  },
  {
    id: 3,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    position: { x: 785, y: 196, expanded: {x: -2, y: 196}},
  },
  {
    id: 4,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    position: { x: 1137, y: 196, expanded: {x: -2, y: 196}},
  },
  {
    id: 5,
    url: "https://i2.wp.com/leninetudo.com/wp-content/uploads/2021/09/La-Casa-de-Papel-5a-Temporada-Completa-2021-Dublado.jpg?fit=1100%2C1049&ssl=1",
    position: { x: 1490, y: 196, expanded: {x: -2, y: 196}},
  },
];

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [lastIdHovered, setLastIdHovered] = useState(null);
  const [expand, setExpand] = useState(false);

  const getPosition = (id: any) => {
    if (id !== undefined) {
      setX(movies[id - 1]?.position.x);
      setExpand(true)
      setLastIdHovered(id);
    }
  };
  
  const setInitialPosition = () => {
    setX(movies[0]?.position.x);
    setY(movies[0]?.position.y);
  }

  useEffect(() => {
    lastIdHovered !== null ? getPosition(lastIdHovered) : setInitialPosition();
  }, [lastIdHovered]);

  return (
      <Container>
        <Border y={y + 5} x={x && expand ? x - 80 : x} expand={expand} />
        {movies.map((item) => {
          return (
            <div className="item-movie" key={item.id}>
              <ImageItem
                expand={expand && item.id === lastIdHovered}
                src={item.url}
                onMouseMove={() => getPosition(item.id)}
              />
            </div>
          );
        })}
      </Container>
  );
};

export default App;
