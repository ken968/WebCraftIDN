import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, XCircle } from "lucide-react";
import image from "../assets/webcraftCD.jpg";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GetStartedForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    if (!email || !emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return false;
    }
    if (!message || message.trim().length < 5) {
      setErrorMsg("Please enter a message (at least 5 characters).");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Try to POST to a backend endpoint if available
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Server error");
      }
    } catch {
      // fallback: open mail client
      const subject = encodeURIComponent(`Get Started - ${name || "New Lead"}`);
      const body = encodeURIComponent(
        `${message}\n\n— ${name || "Anonymous"}\nEmail: ${email}`
      );
      window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-16 px-4 bg-gradient-to-b from-background/60 to-background">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        {/* Left - Marketing / Benefits */}
        <div className="relative px-6 py-10 rounded-2xl overflow-hidden">
          {/* Decorative background image */}
          <img
            src={image}
            alt="Team collaborating on a project"
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />
          {/* Optional subtle overlay to improve text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/80 pointer-events-none" />

          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 text-slate-800">
              Ready to build your digital future?
            </h1>
            <p className="text-lg text-primary-foreground/85 mb-6 text-slate-800">
              Tell us about your project and we'll propose a solution — fast, clear, and tailored to your goals.
            </p>

            
          </div>
        </div>

        {/* Right - Form Card */}
        <section className="bg-card/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg">
          <form
            action="https://formsubmit.co/indonesiawebcraft@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="block">
                <label className="block">
                  <span className="text-sm text-primary-foreground/80 text-slate-800">Name (optional)</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="Your name"
                />
              </div>

              <div className="block">
                <label className="block">
                  <span className="text-sm text-primary-foreground/80 text-slate-800">Email</span>
                </label>
                <input
                  name="Email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="you@domain.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <label className="block">
              <span className="text-sm text-primary-foreground/80 text-slate-800">Message</span>
            </label>
              <textarea
                name="Message"
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground min-h-[140px] focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder="Tell us about your project or request..."
                required
              />

            {/* {errorMsg && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <XCircle className="w-5 h-5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center gap-2 text-sm text-success">
                <CheckCircle className="w-5 h-5" />
                <span>Thanks — your message was sent.</span>
              </div>
            )} */}

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button type="submit" size="lg" className="flex-1" >
                {/* <Mail className="mr-2" /> */}
                {loading ? "Sending..." : "Send Message"}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setMessage("");
                  setErrorMsg("");
                  setStatus(null);
                }}
              >
                Reset
              </Button>
            </div>

            <p className="mt-3 text-xs text-primary-foreground/70">
              By sending you agree to our terms. We respect your privacy and won't share your information.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default GetStartedForm;