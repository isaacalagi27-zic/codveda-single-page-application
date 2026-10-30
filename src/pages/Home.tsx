import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero">
      <span className="eyebrow">WELCOME TO NEXASPACE</span>
      <h1>
        One space.
        <br />
        <span>Endless possibilities.</span>
      </h1>
      <p>
        Discover a smoother digital experience built to connect ideas, share
        information, and bring people together.
      </p>
      <div className="hero-actions">
        <Link to="/about" className="btn btn-primary">
          Explore More
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
