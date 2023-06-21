import { addItem } from "./addItem";

export const handleSubmit = (event, items, setItems, newItem, setNewItem) => {
  event.preventDefault();
  const regex = /^\S.*\S$|^\S$/
  if (!newItem  || !regex.test(newItem.trim())) return;
  addItem(items, setItems, newItem);
  setNewItem("");
};