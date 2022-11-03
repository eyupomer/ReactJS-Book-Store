import BasketItem from "../BasketItem/BasketItem";
import "./Basket.css";

const Basket = ({ basket, books, total, resetBasket }) => {
  return (
    <div className="container basket-container">
      <h3>Sepetim</h3>
      <ul>
        {basket.map((item) => (
          <BasketItem
            book={books.find((b) => b.id === item.id)}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
      <div className="total">Toplam Fiyat : ${total}</div>
      <div>
        <button className="reset-btn" onClick={resetBasket}>Sepeti Temizle</button>
      </div>
    </div>
  );
};

export default Basket;
