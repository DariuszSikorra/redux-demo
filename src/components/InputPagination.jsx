import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/pagination.slice";
import Input from "./Input";
import "./inputPagination.css"

const InputPagination = ({ gamesPerPage, gamesTotal }) => {
  const dispatch = useDispatch();
  const [pageNumberInput, setPageNumberInput] = React.useState("");

  const handlePageNumberChange = (e) => {
    setPageNumberInput(e.target.value);
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(pageNumberInput, 10);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= Math.ceil(gamesTotal / gamesPerPage)) {
      dispatch(setCurrentPage(pageNumber));
      setPageNumberInput("");
    }
  };

  return (
    <div className="input-container">
      <Input
        type="text"
        placeholder="page"
        value={pageNumberInput}
        handleChange={handlePageNumberChange}
      />
      <button onClick={handleGoToPage}>Go</button>
    </div>
  );
};

export default InputPagination;