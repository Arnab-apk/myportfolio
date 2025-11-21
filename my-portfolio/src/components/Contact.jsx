import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { useRef, useState } from "react";

function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill in all fields'
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please enter a valid email address'
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Using FormSubmit.co - a free form backend service
      const response = await fetch('https://formsubmit.co/ajax/arnabmandal261@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try emailing directly.'
      });
    }
  };

  return (
    <section className="pt-14 sm:pt-20 pb-16" id="contact" ref={containerRef}>
      <AnimatedSection animation="fade-up">
        <SectionHeader
          id="contact"
          title="CONTACT"
          containerRef={containerRef}
        />
      </AnimatedSection>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr,1fr]">
        <AnimatedSection animation="fade-right" delay={100}>
          <form
            className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6 hover:border-white/30 transition-all duration-500"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 sm:py-3 text-sm text-white outline-none focus:border-white focus:bg-white/10 transition-all duration-300 placeholder:text-slate-600 min-h-[44px]"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 sm:py-3 text-sm text-white outline-none focus:border-white focus:bg-white/10 transition-all duration-300 placeholder:text-slate-600 min-h-[44px]"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 sm:py-3 text-sm text-white outline-none focus:border-white focus:bg-white/10 resize-none transition-all duration-300 placeholder:text-slate-600 min-h-[120px]"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Status Messages */}
            {status.error && (
              <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                {status.error}
              </div>
            )}
            {status.submitted && (
              <div className="text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-3 rounded-full bg-white text-black font-bold text-sm shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 min-h-[44px]"
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
            <p className="text-xs text-slate-500 mt-4 text-center sm:text-left">
              Or mail me directly at{" "}
              <a
                href="mailto:arnabmandal261@gmail.com"
                className="text-white hover:underline decoration-white/50 underline-offset-4 transition-all"
              >
                arnabmandal261@gmail.com
              </a>
            </p>
          </form>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={200}>
          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full hover:border-white/30 transition-all duration-500">
            <div>
              <div className="mb-6">
                <p className="text-2xl font-display font-bold text-white mb-2">
                  Let's Connect
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Open to internships & freelance opportunities",
                  "Collaborations on AI, AR, and web projects",
                  "Technical discussions & knowledge sharing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", url: "https://github.com/Arnab-apk" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/arnab-mandal-b3a8b4250" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 sm:py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 min-h-[44px] inline-flex items-center justify-center"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Contact;
