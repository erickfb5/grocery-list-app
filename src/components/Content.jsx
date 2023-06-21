import { ItemList } from "./";

const Content = ({ items, setItems }) => (
  <main>
    {items.length ? (
      <ItemList
        items={items}
        setItems={setItems}
      />
    ) : (
      <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
    )}
  </main>
);

export default Content;