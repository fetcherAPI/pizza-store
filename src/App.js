import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import "./scss/app.scss";
import Cart from "./pages/Cart";
import { useState } from "react";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className='App'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className='wrapper'>
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}
export default App;
