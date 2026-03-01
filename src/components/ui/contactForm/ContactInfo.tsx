"use client";

import {  ChevronLeft, ChevronRight } from "lucide-react";
import Text from "@/components/ui/basics/Text";
import { useIntlayer } from "next-intlayer";
import { motion } from "framer-motion";
import { isValidElement, useEffect, useRef, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const toStr = (v: unknown): string => {
  if (typeof v === "string") return v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (isValidElement(v)) return renderToStaticMarkup(v);
  return "";
};

const toInt = (v: unknown, fallback = 0): number => {
  const s = toStr(v).trim();
  if (!s) return fallback;

  const asNumber = Number(s);
  if (Number.isFinite(asNumber)) return Math.trunc(asNumber);

  return fallback;
};

const buildReviewsPages = <T,>(items: T[], size: number): T[][] => {
  if (!items.length || size <= 0) return [];
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
};

export default function ContactInfo() {
  const t = useIntlayer("contact-info");
  const reviewsT = useIntlayer("reviews-popup");

  const reviews = Array.isArray(reviewsT.reviews)
    ? reviewsT.reviews.map((review) => ({
        id: toInt(review.id),
        name: toStr(review.name),
        rating: toInt(review.rating),
        date: toStr(review.date),
        text: toStr(review.text),
        avatar: toStr(review.avatar),
        reviewUrl: toStr(review.reviewUrl),
      }))
    : [];

  const [reviewsPage, setReviewsPage] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      setPageSize(width < 1280 ? 1 : 2);
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const reviewsPages = buildReviewsPages(reviews, pageSize);

  const currentReviews = reviewsPages[reviewsPage] ?? [];
  const hasPrev = reviewsPage > 0;
  const hasNext = reviewsPage < reviewsPages.length - 1;

  useEffect(() => {
    if (!reviewsPages.length) return;
    setReviewsPage((prev) => Math.min(prev, reviewsPages.length - 1));
  }, [reviewsPages.length]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (pageSize !== 1) return;
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (pageSize !== 1) return;
    const startX = touchStartXRef.current;
    if (startX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? startX;
    const deltaX = endX - startX;

    if (Math.abs(deltaX) < 40) return;
    if (deltaX < 0 && hasNext) {
      setReviewsPage((prev) => Math.min(reviewsPages.length - 1, prev + 1));
    } else if (deltaX > 0 && hasPrev) {
      setReviewsPage((prev) => Math.max(0, prev - 1));
    }
    touchStartXRef.current = null;
  };

  return (
    <div className="flex flex-col h-full xl:pr-4 ">
      {/* Contenido que se reparte en toda la altura */}
      <motion.div
        className="flex flex-col flex-grow justify-between mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Text variant="contactTitle">
          {t.title.value}
        </Text>

        <div className="flex flex-col flex-grow justify-evenly">
          {t.info.map((text, index) => (
            <Text key={index} variant="contactBody">
              {text}
            </Text>
          ))}

          
        </div>
      </motion.div>

      <div className="mt-auto flex items-end justify-between">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-full">
            <button
              type="button"
              aria-label="Previous reviews"
              disabled={!hasPrev}
              onClick={() => setReviewsPage((prev) => Math.max(0, prev - 1))}
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 md:h-9 md:w-9 rounded-full border md:border flex items-center justify-center transition-colors duration-200 z-10 ${
                hasPrev
                  ? "border-gray-600 text-gray-200 hover:text-white hover:border-gray-400"
                  : "border-gray-700 text-gray-500 cursor-default"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              aria-label="Next reviews"
              disabled={!hasNext}
              onClick={() => setReviewsPage((prev) => Math.min(reviewsPages.length - 1, prev + 1))}
              className={`absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 md:h-9 md:w-9 rounded-full border md:border flex items-center justify-center transition-colors duration-200 z-10 ${
                hasNext
                  ? "border-gray-600 text-gray-200 hover:text-white hover:border-gray-400"
                  : "border-gray-700 text-gray-500 cursor-default"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              className="grid grid-cols-1 xl:grid-cols-2 gap-3 w-full px-10 md:px-14"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {currentReviews.map((review) => (
                <a
                  key={review.id}
                  href={review.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/60 rounded-lg p-3 border border-gray-700 hover:bg-gray-900/80 hover:border-gray-600 transition-colors duration-200 cursor-pointer block relative"
                >
                  <div className="hidden xl:flex items-center gap-0.5 absolute top-2 right-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-600"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex flex-col md:flex-row md:gap-2 md:items-center xl:flex-col xl:gap-0 xl:items-stretch">
                    <div className="md:w-1/5 xl:w-full">
                      <div className="flex items-center mb-2">
                        <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-semibold mr-2">
                          {review.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-semibold text-white">
                            {review.name}
                          </h4>
                          <span className="text-[10px] text-gray-400">{review.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-4/5 xl:w-full">
                      <div className="flex items-center mb-1 xl:hidden">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-600"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-[11px] text-gray-300 leading-relaxed line-clamp-2 md:line-clamp-2 xl:line-clamp-3">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          
        </motion.div>
      </div>
    </div>
  );
}
