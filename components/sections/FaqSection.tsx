// components/sections/FaqSection.tsx
"use client";

import { useState } from "react";
import { faqItems } from "@/lib/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="w-full py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Questions fréquentes</h2>
      <p className="text-slate-600 mb-8 text-base md:text-lg">
        Quelques réponses rapides aux questions les plus fréquentes avant votre séjour. (placeholder)
      </p>
      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="rounded-2xl border bg-white p-4 md:p-5 shadow-sm transition"
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-sm md:text-base font-medium text-ink">{item.question}</span>
                <span className="ml-4 text-xl font-semibold text-ink/70">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <div
                  id={`faq-answer-${index}`}
                  className="mt-3 text-slate-600 text-sm md:text-base"
                >
                  {item.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
