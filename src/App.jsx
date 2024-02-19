import GamesGallery from "./components/GamesGallery";
import "./app.css";
import InputPagination from "./components/InputPagination";
import { selectApiKey, setApiKey } from "./store/slices/api.slice";
import { selectGamesData } from "./store/slices/games.slice";
import { selectQuery, updateQuery } from "./store/slices/search.slice";
import { useDispatch, useSelector } from "react-redux";
import Input from "./components/Input";

function App() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectQuery);
  const apiKey = useSelector(selectApiKey);
  const gamesData = useSelector(selectGamesData);

  const gamesPerPage = 10;

  const handleApiKeyChange = (e) => {
    const newApiKey = e.target.value;
    dispatch(setApiKey(newApiKey))
  };

  const handleSearchChange = (e) => {
    const newSearchValue = e.target.value;
    dispatch(updateQuery(newSearchValue))
  };

  return (
    <div className="app">
      <div className="search-bar">
        <Input
          type="text"
          placeholder="search games"
          value={searchTerm}
          handleChange={handleSearchChange}
        />
        <Input
          type="text"
          placeholder="api key"
          value={apiKey}
          handleChange={handleApiKeyChange}
        />
      </div>

      <GamesGallery gamesPerPage={gamesPerPage} />
      <div className="pagination-container">
        <InputPagination
          gamesPerPage={gamesPerPage}
          gamesTotal={gamesData?.count || 0}
        />
      </div>
    </div>
  );
}

export default App;
