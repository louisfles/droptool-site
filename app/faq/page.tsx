import { faqs } from "@/lib/faqs";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
          FAQ
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Common questions
        </h1>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-medium">{item.question}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
