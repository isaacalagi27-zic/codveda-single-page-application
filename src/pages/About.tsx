export default function About() {
  return (
    <section className="page-content">
      <span className="eyebrow">OUR STORY</span>
      <h1>
        About <span>NexaSpace</span>
      </h1>
      <p>
        NexaSpace is a simple, modern single-page application designed to
        demonstrate seamless navigation and a smooth user experience.
      </p>

      <div className="feature-grid">
        <article className="feature-card">
          <h3>⚡ Fast Navigation</h3>
          <p>Move between pages without reloading the entire website.</p>
        </article>
        <article className="feature-card">
          <h3>🔗 Connected Experience</h3>
          <p>Share information across pages using React Context.</p>
        </article>
        <article className="feature-card">
          <h3>📱 Responsive Design</h3>
          <p>Enjoy a layout designed for different screen sizes.</p>
        </article>
      </div>
    </section>
  );
}
