export default function Categories({ activeCategory, setActiveCategory }) {
  const cotegotyes = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Десерты",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className='categories'>
      <ul>
        {cotegotyes.map((cotegory, index) => (
          <li
            key={cotegory}
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? "active" : ""}
          >
            {cotegory}
          </li>
        ))}
      </ul>
    </div>
  );
}
