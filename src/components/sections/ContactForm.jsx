import { useId, useState } from "react";
import clsx from "clsx";
import { Button } from "../ui/Button";

const FORM_ENDPOINT_ID = import.meta.env.VITE_FORM_ENDPOINT;
const IS_CONFIGURED = Boolean(FORM_ENDPOINT_ID) && FORM_ENDPOINT_ID !== "your-formspree-id";

const EMPTY_VALUES = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!values.subject.trim()) errors.subject = "Let me know what this is about.";
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div className="mb-7">
      <label htmlFor={id} className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-muted-dark">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-mono text-xs text-rust-dark">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const inputClass =
    "w-full border-0 border-b border-line-dark bg-transparent px-0 py-2.5 text-bone placeholder:text-muted-dark/70 transition-[border-color] duration-200 ease-io focus:border-b-2 focus:border-teal-dark focus:outline-none";

  function handleChange(field) {
    return (event) => setValues((v) => ({ ...v, [field]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // honeypot: bots tend to fill every field, humans never see or fill this one
    if (event.target.elements._gotcha?.value) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!IS_CONFIGURED) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ENDPOINT_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.target),
      });
      if (response.ok) {
        setStatus("success");
        setValues(EMPTY_VALUES);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="border border-moss-dark/40 bg-moss-dark/10 p-8">
        <p className="text-lg font-medium text-bone">Message sent.</p>
        <p className="mt-2 text-sm text-muted-dark">I'll get back to you within 24–48h.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-swap mt-6 font-mono text-xs uppercase tracking-[0.06em] text-teal-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
      />

      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        <Field id={`${uid}-name`} label="Name" error={errors.name}>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            disabled={status === "sending"}
            className={clsx(inputClass, errors.name && "border-rust-dark")}
          />
        </Field>

        <Field id={`${uid}-email`} label="Email" error={errors.email}>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="you@email.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${uid}-email-error` : undefined}
            disabled={status === "sending"}
            className={clsx(inputClass, errors.email && "border-rust-dark")}
          />
        </Field>
      </div>

      <Field id={`${uid}-subject`} label="Subject" error={errors.subject}>
        <input
          id={`${uid}-subject`}
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange("subject")}
          placeholder="What can I help you with?"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? `${uid}-subject-error` : undefined}
          disabled={status === "sending"}
          className={clsx(inputClass, errors.subject && "border-rust-dark")}
        />
      </Field>

      <Field id={`${uid}-message`} label="Message" error={errors.message}>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange("message")}
          placeholder="Tell me about your project"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${uid}-message-error` : undefined}
          disabled={status === "sending"}
          className={clsx(inputClass, "resize-y", errors.message && "border-rust-dark")}
        />
      </Field>

      <div role="status" aria-live="polite">
        {status === "error" && (
          <p className="mb-5 font-mono text-xs text-rust-dark">
            {IS_CONFIGURED
              ? "Something went wrong sending your message — please try again or email me directly."
              : "Contact form isn't connected yet (missing VITE_FORM_ENDPOINT)."}
          </p>
        )}
      </div>

      <Button as="button" type="submit" variant="primary-dark" disabled={status === "sending"} className="disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message ↗"}
      </Button>
    </form>
  );
}
