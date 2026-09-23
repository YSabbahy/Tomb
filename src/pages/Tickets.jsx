import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { plans } from "../data/plans";
import Icon from "../components/Icon";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const faqs = [
  {
    q: "Can I reschedule my visit?",
    a: "Yes, passes can be rescheduled free of charge up to 24 hours before your selected date from your confirmation email.",
  },
  {
    q: "Are group discounts available?",
    a: "Groups of 10 or more receive a 15% discount. Contact our visitor services team to arrange group bookings.",
  },
  {
    q: "Is the museum accessible?",
    a: "All galleries are wheelchair accessible, and complimentary mobility aids are available at the main entrance.",
  },
];

export default function Tickets() {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get("plan");
  const [selectedPlan, setSelectedPlan] = useState(preselected || "explorer");
  const [visitors, setVisitors] = useState(1);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(null);

  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email.trim())) next.email = "Enter a valid email address.";
    if (!date) next.date = "Please choose a visit date.";
    if (visitors === "" || Number.isNaN(Number(visitors)) || Number(visitors) < 1) {
      next.visitors = "Enter at least 1 visitor.";
    }
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      const plan = plans.find((p) => p.id === selectedPlan);
      setConfirmed({ plan, visitors, date, name, email });
      setSubmitting(false);
    }, 600);
  }

  if (confirmed) {
    return (
      <div>
        <PageHeader title="Booking Confirmed" crumb="Tickets" />
        <div className="mx-auto w-[90%] max-w-[600px] py-16 text-center">
          <Icon name="circle-check" className="mb-4 text-5xl text-gold" />
          <h2 className="text-2xl text-gold">Thank you, {confirmed.name || "Explorer"}!</h2>
          <p className="mt-4 text-[#e0e0e0]">
            Your <span className="text-gold">{confirmed.plan?.name}</span> for {confirmed.visitors}{" "}
            visitor{confirmed.visitors > 1 ? "s" : ""} on{" "}
            <span className="text-gold">{confirmed.date || "your selected date"}</span> has been
            reserved. A confirmation has been sent to {confirmed.email || "your email"}.
          </p>
          <button
            onClick={() => {
              setConfirmed(null);
              setName("");
              setEmail("");
              setDate("");
              setVisitors(1);
              setErrors({});
            }}
            className="btn mt-8"
          >
            Book Another Visit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Plan Your Visit"
        subtitle="Choose a pass and reserve your date. Confirmation is instant."
        crumb="Tickets"
      />

      <div className="mx-auto mt-10 w-[90%] max-w-[1200px] pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`rounded-[10px] border p-5 text-left transition duration-300 ${
                selectedPlan === plan.id
                  ? "border-gold bg-gold/10"
                  : "border-[#333] bg-panel hover:border-gold/60"
              }`}
            >
              <h2 className="text-lg text-gold">{plan.name}</h2>
              <p className="mt-1 text-2xl text-white">{plan.price}</p>
              <ul className="mt-3 space-y-1 text-sm text-[#aaa]">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" className="mr-1 text-gold" /> {f}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-12 max-w-[600px] rounded-[10px] border border-[#222] bg-panel p-6 sm:p-8"
        >
          <h2 className="mb-6 text-xl text-gold">Reservation Details</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm text-[#aaa]">
              Full Name
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
            <label className="block text-sm text-[#aaa]">
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
            <label className="block text-sm text-[#aaa]">
              Visit Date
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? "date-error" : undefined}
                className={`mt-1 h-[42px] w-full rounded-[10px] border bg-[#1a1a1a] px-3 text-wheat outline-none focus:border-gold ${
                  errors.date ? "border-oxblood" : "border-[#333]"
                }`}
              />
              {errors.date && (
                <p id="date-error" className="mt-1 text-xs normal-case text-oxblood" role="alert">
                  {errors.date}
                </p>
              )}
            </label>
            <label className="block text-sm text-[#aaa]">
              Number of Visitors
              <div
                className={`mt-1 flex h-[42px] w-full items-center rounded-[10px] border bg-[#1a1a1a] ${
                  errors.visitors ? "border-oxblood" : "border-[#333]"
                }`}
              >
                <button
                  type="button"
                  aria-label="Decrease visitors"
                  disabled={visitors <= 1}
                  onClick={() => setVisitors((v) => Math.max(1, v - 1))}
                  className="flex h-full w-10 items-center justify-center text-lg text-gold transition disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:text-white"
                >
                  <Icon name="minus" />
                </button>
                <input
                  type="number"
                  min={1}
                  max={20}
                  required
                  inputMode="numeric"
                  value={visitors}
                  onChange={(e) => {
                    const raw = e.target.value;
                    if (raw === "") {
                      setVisitors("");
                      return;
                    }
                    const n = Number(raw);
                    if (Number.isNaN(n)) return;
                    setVisitors(Math.min(20, Math.max(1, n)));
                  }}
                  onBlur={() => {
                    if (visitors === "" || Number.isNaN(Number(visitors))) setVisitors(1);
                  }}
                  onWheel={(e) => e.currentTarget.blur()}
                  className="h-full w-full [appearance:textfield] border-0 bg-transparent text-center text-wheat outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  aria-label="Increase visitors"
                  disabled={visitors >= 20}
                  onClick={() => setVisitors((v) => Math.min(20, v + 1))}
                  className="flex h-full w-10 items-center justify-center text-lg text-gold transition disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:text-white"
                >
                  <Icon name="plus" />
                </button>
              </div>
              {errors.visitors && (
                <p className="mt-1 text-xs normal-case text-oxblood" role="alert">
                  {errors.visitors}
                </p>
              )}
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-solid mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Icon name="circle-notch" spin /> Confirming...
              </>
            ) : (
              "Confirm Booking"
            )}
          </button>
        </form>

        <div id="faq" className="mx-auto mt-16 max-w-[700px] scroll-mt-[70px]">
          <h2 className="mb-6 text-center text-xl text-gold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-[10px] border border-[#222] bg-panel p-4">
                <summary className="cursor-pointer font-bold text-wheat">{f.q}</summary>
                <p className="mt-2 text-sm text-[#aaa]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
