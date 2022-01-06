const DEFAULT_API = "https://api.themoviedb.org/3";
const KEY_API = "030626899641577cb975e81de64d3949";

async function fetchBasico(link) {
  const response = await fetch(`${DEFAULT_API}${link}`);
  const json = await response.json();
  return json;
}

const myList = {
  getHomeList: async () => {
    return [
      {
        categoria: "Recomendados",
        itens: await fetchBasico(
          `/trending/all/week?&language=pt-BR&api_key=${KEY_API}`
        ),
      },
      {
        categoria: "Em alta",
        itens: await fetchBasico(
          `/movie/top_rated?&language=pt-BR&api_key=${KEY_API}`
        ),
      },
      {
        categoria: "Ação",
        itens: await fetchBasico(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${KEY_API}`
        ),
      },
      {
        categoria: "Ação",
        itens: await fetchBasico(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${KEY_API}`
        ),
      },
      {
        categoria: "Animação",
        itens: await fetchBasico(
          `/discover/movie?with_genres=16&language=pt-BR&api_key=${KEY_API}`
        ),
      },
      {
        categoria: "Comédia",
        itens: await fetchBasico(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${KEY_API}`
        ),
      },
      {
        categoria: "Documentário",
        itens: await fetchBasico(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${KEY_API}`
        ),
      },
    ];
  },
  getImageMovie: async (id) => {
    return {
      image: `${DEFAULT_API}/movie/${id}/images?api_key=${KEY_API}&language=pt-BR`,
    };
  },
};

export default myList;
