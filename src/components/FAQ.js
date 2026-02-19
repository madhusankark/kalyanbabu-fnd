import React, { useState } from 'react';

const FAQ = ({ image }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    { q: "What is Pawan Kalyan's real name?", a: "His birth name is Konidela Kalyan Babu." },
    { q: "When did he earn the title 'Power Star'?", a: "He was awarded the title 'Pawan' in 1997 after a public martial arts display." },
    { q: "What is the name of his political party?", a: "He founded the Jana Sena Party on March 14, 2014." },
    { q: "Which movie won him the National Award?", a: "Tholi Prema (1998) won the National Film Award for Best Feature Film in Telugu." },
    { q: "What is his current role in government?", a: "As of 2024, he serves as the Deputy Chief Minister of Andhra Pradesh." }
  ];

  return (
    <section className="flex flex-col md:flex-row bg-zinc-950 py-20 px-10">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <img 
          src={image} 
          /* Removed 'grayscale' and 'opacity-50' to keep full color */
          /* Added h-[500px] and object-cover to match Journey sections */
          className="rounded-xl w-full h-[500px] object-cover" 
          alt="Kalyan Portrait" 
        />
      </div>
      <div className="md:w-1/2 md:pl-10">
        <h2 className="text-3xl font-bold mb-8 text-white uppercase italic tracking-tighter">
          Common <span className="text-orange-500">Queries</span>
        </h2>
        {faqs.map((faq, i) => (
          <div key={i} className="mb-4 border-b border-zinc-800 pb-4">
            <button 
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full text-left text-lg font-semibold text-white hover:text-orange-500 transition uppercase"
            >
              {faq.q}
            </button>
            {activeIndex === i && (
              <p className="mt-3 text-zinc-500 animate-fade-in">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;