import { Link } from "react-router-dom";

const Header = () => {
  console.log('inside Header');
    return (
      <div className="header">
        <h2>Logo</h2>
        <nav>
          <Link to="/">Home</Link >
          <Link to="/about">About</Link >
          <Link to="/contact">Contact</Link >
        </nav>
      </div>
    )
  }

  export default Header;