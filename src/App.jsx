import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Search from "./views/Search";
import * as BooksAPI from "./services";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home getAll={BooksAPI.getAll} update={BooksAPI.update} />}
        />
        <Route
          path="/search"
          element={
            <Search
              search={BooksAPI.search}
              update={BooksAPI.update}
              getAll={BooksAPI.getAll}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
