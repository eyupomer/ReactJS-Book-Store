import Header from "./components/Header/Header";
import { useState } from "react";
import books from "./helpers/Books.json";
import Book from "./components/Book/Book";
import { useEffect } from "react";
import Basket from "./components/Basket/Basket";

function App() {
  const [money, setMoney] = useState(1000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (books.find(book => book.id === item.id).price))
    }, 0))
  }, [basket])

  return (
    <>
      <Header total={total} money={money} />
      <div className="container books">
        {books.map(book => (
          <Book money={money} total={total} key={book.id} basket={basket} setBasket={setBasket} book={book} />
        ))}
      </div>
      {total > 0 && (
        <Basket resetBasket={resetBasket} total={total} books={books} basket={basket} />
      )}
    </>
  );
}

export default App;
