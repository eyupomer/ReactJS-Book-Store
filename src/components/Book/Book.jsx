import "./Book.css";

const Book = ({ book, basket, setBasket, money, total }) => {
  const basketItem = basket.find((item) => item.id === book.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === book.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([...basket.filter((item) => item.id !== book.id), checkBasket]);
    } else {
      setBasket([
        ...basket,
        {
          id: book.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === book.id);
    const basketWithoutCurrent = basket.filter(item => item.id !== book.id)
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
        setBasket([...basketWithoutCurrent])
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  

  return (
    <div className="book">
      <h5>{book.title}</h5>
      <img src={book.img} alt="" />
      <h6>{book.author}</h6>
      <div className="price">${book.price}</div>
      <div className="actions">
        <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Çıkart</button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button className="buy-btn" disabled={book.price > (money - total) } onClick={addBasket}>Ekle</button>
      </div>
    </div>
  );
};

export default Book;
