const Footer = ({ length }) => (
  <footer>
    {length !== 0 && <p>{length} List {length === 1 ? "item" : "items"}</p>}
  </footer>
);

export default Footer;