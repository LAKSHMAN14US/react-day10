import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">Submit</button>
          </form>
        </li>
        <li>
          <button>Sign In</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
