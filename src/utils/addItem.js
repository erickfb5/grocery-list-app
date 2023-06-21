export const addItem = (items, setItems, item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const newAddedItem = { id, checked: false, item };
  const listItems = [...items, newAddedItem];
  setItems(listItems);
};
