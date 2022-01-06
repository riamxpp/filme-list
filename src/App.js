import React from "react";
import "./App.css";
import myList from "./Components/MoviesRequest";

function App() {
  const [dados, setDados] = React.useState(null);
  const [img, setImg] = React.useState("");
  const imageRef = React.useRef();

  React.useEffect(() => {
    // setDados({});
    const loadingAll = async () => {
      const data = await myList.getHomeList();
      const imagem = await myList.getImageMovie(5);
      setDados(data);
      setImg(imagem);
      console.log(imagem);
      console.log(data);
    };
    loadingAll();
  }, []);

  return (
    <div className="App">
      <ul>
        {dados &&
          dados.map((item, index) => (
            <li key={index}>
              <h5>{item.categoria}</h5>
              {item.itens.results.map((filme) => (
                <div key={filme.id}>
                  <span>
                    {filme.title}
                    {" --  "}
                  </span>
                  <img
                    href={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
                    alt={`${filme.title}`}
                  />
                </div>
              ))}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
