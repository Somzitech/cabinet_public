import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Medical Services</h1>
        <nav>
          <Link className="text-white px-3 text-decoration-none" to="/">Home</Link>
          <Link className="text-white px-3 text-decoration-none" to="/services">Services</Link>
          <Link className="text-white px-3 text-decoration-none" to="/about">About</Link>
          <Link className="text-white px-3 text-decoration-none" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
