export const handleDelete = (id, items, setItems) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
};