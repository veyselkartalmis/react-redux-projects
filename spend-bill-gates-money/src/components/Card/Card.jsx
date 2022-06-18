import "./card.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateCount } from "../../redux/Product/productSlice";

function Card({ id }) {
  const items = useSelector((state) => state.product.items);
  console.log(items);
  const money = useSelector((state) => state.product.money);
  const initialMoney = useSelector((state) => state.product.initialMoney);

  const item = items.find((tmp) => tmp.id === id);
  const dispatch = useDispatch();

  const [count, setCount] = useState();
  const [isBuyable, setIsBuyable] = useState(false);
  const [isSellable, setIsSellable] = useState(false);
  let maximumBuy = Math.floor(money / item.productPrice);
  let maximum = Number(count) + Number(maximumBuy);

  const control = () => {
    if (count > 0) {
      setIsSellable(false);
    }
    if (count == 0) {
      setIsSellable(true);
    }
  }

  useEffect(() => {
    dispatch(updateCount({ id: item.id, count: count }));
    control();
  });

  useEffect(() => {
    
  });

  return (
    <div className='card-wrap'>
      deneme
    </div>
  )
}

export default Card;