const getDataFromApi = () => {
  return fetch('//rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          status: character.status,
          episode: character.episode.length,
        };
      });
    });
};

export default getDataFromApi;
