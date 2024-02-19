import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../services/games.service";
import { selectCurrentPage } from "../store/slices/pagination.slice";
import { selectGamesData, setGamesData } from "../store/slices/games.slice";
import { selectQuery } from "../store/slices/search.slice";
import "./GamesGallery.css";
import { selectApiKey } from "../store/slices/api.slice";

const GamesGallery = ({ gamesPerPage }) => {
  const dispatch = useDispatch();
  const gamesData = useSelector(selectGamesData);
  const currentPage = useSelector(selectCurrentPage);
  const searchTerm = useSelector(selectQuery);
  const apiKey = useSelector(selectApiKey);

  const [currentSearchTerm, setCurrentSearchTerm] = React.useState(searchTerm);

  React.useEffect(() => {
    setCurrentSearchTerm(searchTerm);
  }, [searchTerm]);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      const params = {
        key: apiKey,
        search: currentSearchTerm,
        page: currentPage,
        page_size: gamesPerPage,
      };

      fetchGames(params)
        .then((data) => dispatch(setGamesData(data)))
        .catch((error) => {
          console.error("Error fetching games:", error);
        });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [currentSearchTerm, currentPage, apiKey, dispatch, gamesPerPage]);

  if (!apiKey) {
    return <p className="text">Add API key</p>;
  }

  if (gamesData === null) {
    return <p className="text">Loading...</p>;
  }

  if (!gamesData?.results || gamesData?.results.length === 0) {
    return <p className="text">No games found.</p>;
  }

  return (
    <div>
      <div className="games-container">
        {gamesData.results.map((game) => (
          <div key={game.id} className="game-container">
            <h3 className="game-rating text">rating: {game.metacritic}</h3>
            <img
              src={game.short_screenshots[0].image}
              className="game-img"
              alt={`Game ${game.id}`}
            />
            <h3 className="game-title text">{game.slug}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesGallery;