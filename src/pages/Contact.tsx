import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please complete every field.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setStatus(`Thanks, ${name}! Your message has been validated.`);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section className="page-content contact-layout">
      <div>
        <span className="eyebrow">LET'S CONNECT</span>
        <h1>
          Get in <span>touch.</span>
        </h1>
        <p>Have a question or idea? Send us a message.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
        />

        <button className="btn btn-primary" type="submit">
          Send Message
        </button>
        {status && (
          <p className="form-status" role="status">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
