import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Icon from "../components/Icon";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email.trim())) next.email = "Enter a valid email address.";
    if (!message.trim()) next.message = "Please enter a message.";
    else if (message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    // Simulated network round-trip so the button gives real feedback instead
    // of flipping state instantly.
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 600);
  }

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Questions about your visit, group bookings, or press inquiries? We're here to help."
        crumb="Contact"
      />

      <div className="mx-auto mt-10 grid w-[90%] max-w-[1100px] grid-cols-1 gap-10 pb-20 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl text-gold">Visit Information</h2>
          <ul className="space-y-4 text-[#e0e0e0]">
            <li>
              <Icon name="location-dot" className="mr-2 text-gold" />
              Grand Egyptian Museum, Giza Plateau, Cairo, Egypt
            </li>
            <li>
              <Icon name="clock" className="mr-2 text-gold" />
              Open Daily &mdash; 9:00 AM to 6:00 PM (last entry 5:00 PM)
            </li>
            <li>
              <Icon name="phone" className="mr-2 text-gold" />
              <a href="tel:+20223456789" className="text-wheat no-underline hover:text-gold">
                +20 2 2345 6789
              </a>
            </li>
            <li>
              <Icon name="envelope" className="mr-2 text-gold" />
              <a href="mailto:info@losttombexplorer.com" className="text-wheat no-underline hover:text-gold">
                info@losttombexplorer.com
              </a>
            </li>
          </ul>

          <div className="mt-6 overflow-hidden rounded-[10px] border border-gold">
            <iframe
              title="Museum Location Map"
              className="h-[280px] w-full"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=31.0900%2C29.9500%2C31.1700%2C30.0100&layer=mapnik&marker=29.9773%2C31.1325"
            />
          </div>
        </div>

        <div>
          {sent ? (
            <div className="rounded-[10px] border border-gold bg-panel p-8 text-center">
              <Icon name="paper-plane" className="mb-4 text-4xl text-gold" />
              <h2 className="text-xl text-gold">Message Sent</h2>
              <p className="mt-3 text-[#e0e0e0]">
                Thank you, {name || "friend"}. Our visitor services team will reply to {email || "your email"}{" "}
                within one business day.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                  setErrors({});
                }}
                className="btn mt-6"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[10px] border border-[#222] bg-panel p-6 sm:p-8"
            >
              <h2 className="mb-6 text-xl text-gold">Send a Message</h2>
              <label className="mb-4 block text-sm text-[#aaa]">
                Name
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`mt-1 h-[42px] w-full rounded-[10px] border bg-[#1a1a1a] px-3 text-wheat outline-none focus:border-gold ${
                    errors.name ? "border-oxblood" : "border-[#333]"
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs normal-case text-oxblood" role="alert">
                    {errors.name}
                  </p>
                )}
              </label>
              <label className="mb-4 block text-sm text-[#aaa]">
                Email
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`mt-1 h-[42px] w-full rounded-[10px] border bg-[#1a1a1a] px-3 text-wheat outline-none focus:border-gold ${
                    errors.email ? "border-oxblood" : "border-[#333]"
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs normal-case text-oxblood" role="alert">
                    {errors.email}
                  </p>
                )}
              </label>
              <label className="mb-6 block text-sm text-[#aaa]">
                Message
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`mt-1 w-full resize-none rounded-[10px] border bg-[#1a1a1a] px-3 py-2 text-wheat outline-none focus:border-gold ${
                    errors.message ? "border-oxblood" : "border-[#333]"
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs normal-case text-oxblood" role="alert">
                    {errors.message}
                  </p>
                )}
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-solid w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Icon name="circle-notch" spin /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
