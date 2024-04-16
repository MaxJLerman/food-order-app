export const Header: React.FC = () => {
  return (
    <header id={"main-header"}>
      <div id={"title"}>
        <img src={"src/assets/logo.jpg"} />
        <h1>ReadFood</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
};
