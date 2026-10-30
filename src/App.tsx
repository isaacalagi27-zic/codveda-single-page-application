import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <Link to="/" className="brand">
          Nexa<span>Space.</span>
        </Link>

        <nav aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} NexaSpace. Built for Codveda Task 1.</p>
      </footer>
    </div>
  );
}
