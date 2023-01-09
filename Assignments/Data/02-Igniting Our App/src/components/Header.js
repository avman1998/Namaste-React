export const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  );
};
const Title = () => {
  return (
    <img
      src="https://i.pinimg.com/originals/fb/75/20/fb75202024ca3de15339e368ce1eb3de.jpg"
      className="logo"
    />
  );
};
