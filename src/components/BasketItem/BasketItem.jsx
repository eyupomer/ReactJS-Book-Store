import "./BasketItem.css";

const BasketItem = ({item, book}) => {
  return (
    <li className="basket-item">
        {book.title} <span>x {item.amount}</span> 
    </li>
  )
}

export default BasketItem