import { LineItem } from "./";

const ItemList = ({ items, setItems }) => (
  <ul>
    {items.map((item) => (
      <LineItem key={item.id} item={item} items={items} setItems={setItems} />
    ))}
  </ul>
);

export default ItemList;