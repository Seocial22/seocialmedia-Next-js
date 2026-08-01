import React from "react";
import { ChevronDown } from "lucide-react";
import "./FAQAccordion.css";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const faqItems = [
    {
      question: "What digital marketing services do you offer?",
      answer:
        "At SEOcial Media Solutions, we provide a full range of digital marketing services, including SEO, social media marketing, pay-per-click (PPC) advertising, content marketing, and website design. Our goal is to help businesses in Jaipur and beyond grow their online presence and increase revenue.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy, and results typically start showing within 3 to 6 months. However, with our advanced SEO techniques and customized strategies, many businesses notice improvements in website traffic and rankings much sooner.",
    },
    {
      question: "Why should I choose SEOcial Media Solutions for digital marketing?",
      answer:
        "We are Jaipur's leading digital marketing agency with a proven track record of delivering high ROI for businesses. Our team of SEO experts, content strategists, and social media specialists create data-driven campaigns that drive traffic, boost engagement, and increase conversions.",
    },
    {
      question: "Can I manage my website and marketing campaigns myself?",
      answer:
        "Yes, we offer user-friendly website solutions and provide training so you can manage basic updates. However, to get the best results, ongoing SEO, content optimization, and ad campaign management require expert handling, which we offer through our monthly digital marketing plans.",
    },
    {
      question: "Do you provide ongoing support after launching a campaign?",
      answer:
        "Absolutely! We offer continuous support, performance tracking, and strategy updates to ensure your website and marketing campaigns stay ahead of competitors. Our monthly reports help you track progress and make informed business decisions.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="faq-fade-in text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Frequently Asked
          </span>
          <br />
          <span className="text-gray-800">Questions</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full" />
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="faq-fade-in border-b border-gray-200"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
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
                  <p className="pb-6 text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;