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
import { increment, decrement } from "./redux/slices/filterSlice";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
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
