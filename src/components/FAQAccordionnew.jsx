import React from "react";
import { ChevronDown } from "lucide-react";
import "./FAQAccordion.css";

const FAQAccordionnew = ({
  content,
  title = "Frequently Asked",
  subtitle = "Questions",
}) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="faq-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {title}
          </span>
          <br />
          <span className="text-gray-800">{subtitle}</span>
        </h2>
        <div className="w-24 h-1.5 mb-4 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full" />
      </div>

      <div className="space-y-4">
        {content.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="faq-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="border-b border-gray-300 bg-pink-100 rounded-3px px-5">
                <button
                  type="button"
                  className="w-full py-6 flex justify-between items-center text-left"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg">{item.question}</span>
                  <ChevronDown
                    className={`faq-chevron w-5 h-5 text-gray-500 ${
                      isOpen ? "faq-chevron-open" : ""
                    }`}
                  />
                </button>

                <div className={`faq-panel ${isOpen ? "faq-panel-open" : ""}`}>
                  <div>
                    <p className="pb-6 text-start text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordionnew;