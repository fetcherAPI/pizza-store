import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../App";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState(0);

  const [selectedSort, setSelectedSort] = useState({
    name: "популярности",
    sortProp: "rating",
  });

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://629386a6089f87a57ac1c33e.mockapi.io/items?${
        activeCategory ? `category=${activeCategory}` : ""
      }&sortBy=${selectedSort.sortProp}&order=desc`
    )
      .then((res) => res.json())
      .then((body) => {
        setPizzas(body);
        setIsLoading(false);
      });
  }, [activeCategory, selectedSort]);

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
          activeCategory={activeCategory}
          setActiveCategory={(id) => setActiveCategory(id)}
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
