import { useEffect, useState } from "react";

import { Header, Content, Footer, AddItem, SearchItem } from "./components";

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => { localStorage.setItem("shoppingList", JSON.stringify(items)) }, [items]);

  return (
    <div className="App">
      <Header title="Grocery List App" />
      <AddItem items={items} setItems={setItems} newItem={newItem} setNewItem={setNewItem} />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) => item?.item?.toLowerCase().includes(search.toLowerCase()))}
        setItems={setItems}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;