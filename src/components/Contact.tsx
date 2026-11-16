import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Mail, Send } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/portfolioData';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formNotice, setFormNotice] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFormNotice('Please complete your name, email address, and message.');
      return;
    }

    const emailSubject = trimmedSubject || `Project Inquiry from ${trimmedName}`;
    const emailBody = [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      '',
      trimmedMessage,
    ].join('\n');

    const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoHref;

    setFormNotice(
      `Your email app should open addressed to ${CONTACT_EMAIL}. If it does not open automatically, click "Email Me" or copy ${CONTACT_EMAIL} directly.`
    );
  };

  return (
    <section
      id="contact"
      className="border-t border-[#EFEFF6] bg-[#FAFAFD] py-20 sm:py-24 lg:py-28 dark:border-[#1B1B29] dark:bg-[#0F0F17]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Email & Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#7050F5] dark:text-[#9B82FF]">
              Get In Touch
            </p>
            <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#292943] sm:text-4xl dark:text-white">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[#565672] dark:text-[#B4B4C9]">
              Let&apos;s work together and turn your ideas into something
              creative and memorable.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E7E7F1] bg-white p-6 dark:border-[#232334] dark:bg-[#14141E]">
              <p className="text-xs font-semibold tracking-wide uppercase text-[#6E6E88] dark:text-[#9898B0]">
                Direct Email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-display mt-1.5 block break-all text-lg font-bold text-[#292943] transition-colors hover:text-[#7050F5] dark:text-white dark:hover:text-[#9B82FF]"
              >
                {CONTACT_EMAIL}
              </a>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    'Graphic Design Inquiry'
                  )}`}
                  className="inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#7050F5] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#7050F5]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5E3EE0]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Me
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-[#E2E2EE] bg-[#F8F8FC] px-4 py-2.5 text-sm font-semibold text-[#292943] transition-colors hover:border-[#7050F5]/40 hover:text-[#7050F5] dark:border-[#29293D] dark:bg-[#1B1B29] dark:text-white dark:hover:border-[#8C70FF]/50 dark:hover:text-[#9B82FF]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Email-Composer Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#E7E7F1] bg-white p-6 shadow-sm shadow-[#292943]/4 sm:p-8 dark:border-[#232334] dark:bg-[#14141E] dark:shadow-none"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-[#292943] dark:text-[#EAEAF5]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-2 block w-full rounded-xl border border-[#DFDFEC] bg-[#FAFAFD] px-4 py-3 text-sm text-[#292943] placeholder-[#8A8AA2] transition-colors focus:border-[#7050F5] focus:bg-white focus:outline-none dark:border-[#2A2A3E] dark:bg-[#0D0D14] dark:text-white dark:placeholder-[#6E6E87] dark:focus:border-[#8C70FF] dark:focus:bg-[#11111A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-[#292943] dark:text-[#EAEAF5]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 block w-full rounded-xl border border-[#DFDFEC] bg-[#FAFAFD] px-4 py-3 text-sm text-[#292943] placeholder-[#8A8AA2] transition-colors focus:border-[#7050F5] focus:bg-white focus:outline-none dark:border-[#2A2A3E] dark:bg-[#0D0D14] dark:text-white dark:placeholder-[#6E6E87] dark:focus:border-[#8C70FF] dark:focus:bg-[#11111A]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-semibold text-[#292943] dark:text-[#EAEAF5]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Poster design, product ad, branding..."
                  className="mt-2 block w-full rounded-xl border border-[#DFDFEC] bg-[#FAFAFD] px-4 py-3 text-sm text-[#292943] placeholder-[#8A8AA2] transition-colors focus:border-[#7050F5] focus:bg-white focus:outline-none dark:border-[#2A2A3E] dark:bg-[#0D0D14] dark:text-white dark:placeholder-[#6E6E87] dark:focus:border-[#8C70FF] dark:focus:bg-[#11111A]"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-[#292943] dark:text-[#EAEAF5]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, timeline, and goals..."
                  className="mt-2 block w-full resize-y rounded-xl border border-[#DFDFEC] bg-[#FAFAFD] px-4 py-3 text-sm text-[#292943] placeholder-[#8A8AA2] transition-colors focus:border-[#7050F5] focus:bg-white focus:outline-none dark:border-[#2A2A3E] dark:bg-[#0D0D14] dark:text-white dark:placeholder-[#6E6E87] dark:focus:border-[#8C70FF] dark:focus:bg-[#11111A]"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#7050F5] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#7050F5]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5E3EE0]"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send via Email App
                </button>

                <span className="text-xs text-[#6E6E88] dark:text-[#8E8EA6]">
                  Opens your default email client addressed to {CONTACT_EMAIL}
                </span>
              </div>

              {formNotice && (
                <div
                  role="status"
                  className="mt-4 rounded-xl border border-[#7050F5]/25 bg-[#7050F5]/8 px-4 py-3 text-sm text-[#292943] dark:border-[#8C70FF]/35 dark:bg-[#7050F5]/15 dark:text-[#EFEFF8]"
                >
                  {formNotice}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
