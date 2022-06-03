import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import { setCategoryID } from "../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../App";

function Home() {
  const dispath = useDispatch();
  const categoryID = useSelector((state) => state.filterSlice.categoryID);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const setActiveCategory = (id) => {
    dispath(setCategoryID(id));
  };

  const [selectedSort, setSelectedSort] = useState({
    name: "популярности",
    sortProp: "rating",
  });

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://629386a6089f87a57ac1c33e.mockapi.io/items?${
        categoryID ? `category=${categoryID}` : ""
      }&sortBy=${selectedSort.sortProp}&order=desc`
    )
      .then((res) => res.json())
      .then((body) => {
        setPizzas(body);
        setIsLoading(false);
      });
  }, [categoryID, selectedSort]);

  const items = pizzas
    .filter((pizza) => {
      if (pizza.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((pizza) => (
      <PizzaBlock
        key={pizza.id}
        id={pizza.id}
        title={pizza.title}
        price={pizza.price}
        img={pizza.imageUrl}
        sizesList={pizza.sizes}
        typesList={pizza.types}
      />
    ));

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={categoryID}
          setActiveCategory={setActiveCategory}
        />
        <Sort
          selectedSort={selectedSort}
          setSelectedSort={(id) => setSelectedSort(id)}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items}
      </div>
    </div>
  );
}

export default Home;
