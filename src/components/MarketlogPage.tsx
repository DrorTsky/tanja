import { map } from "lodash-es";
import ScrollDownLink from "./ScrollDownLink";
import {
  MARKETLOG_PRODUCT_TEXT,
  MARKETLOG_PROBLEM_TEXT,
  MARKETLOG_USER_MARKET_INTRO,
  MARKETLOG_USER_MARKET_BODY,
  MARKETLOG_CLICK_HERE_URL,
  MARKETLOG_NEXT_PROJECT,
} from "../constants";
import marketlogPhone from "../assets/marketlog-phone.png";
import marketlogResult1 from "../assets/marketlog-result-1.png";
import marketlogResult2 from "../assets/marketlog-result-2.png";
import marketlogResult3 from "../assets/marketlog-result-3.png";
import marketlogResult4 from "../assets/marketlog-result-4.png";

const SECTION_HEADING_CLASS =
  "font-medium text-[24px] lg:text-[36px] leading-normal tracking-[-1.97px] text-text-primary";
const BODY_TEXT_CLASS =
  "font-normal text-[15px] leading-[20px] text-text-primary";
const RESULT_HEADING = "THE RESULT";
const TITLE = "Marketlog";
const SUBTITLE = "Product Design | January 2022 - Today";
const PRODUCT_HEADING = "The product";
const PROBLEM_HEADING = "The problem";
const USER_MARKET_HEADING = "Understanding the user & the market";
const CLICK_HERE_LABEL = "Click here";
const CLICK_HERE_SUFFIX = " for more about the human eye pattern.";

export default function MarketlogPage() {
  return (
    <div className="flex flex-col w-full max-w-[997px] px-[var(--grid-padding)] lg:px-0 lg:pr-[var(--grid-padding)]">
      {/* Title */}
      <div className="flex flex-col py-[50px] text-text-primary">
        <h1 className="font-medium text-[32px] lg:text-[64px] leading-normal lg:leading-[68px] tracking-[-1.974px]">
          {TITLE}
        </h1>
        <p className="text-[12px] lg:text-[15px] font-normal leading-[20px]">
          {SUBTITLE}
        </p>
      </div>

      {/* Content: text columns + phone mockup + body text */}
      <div className="flex flex-col gap-[50px]">
        {/* On desktop: 2-column grid. On mobile: single column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)]">
          {/* Text sections */}
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={SECTION_HEADING_CLASS}>{PRODUCT_HEADING}</h2>
            <p className={BODY_TEXT_CLASS}>{MARKETLOG_PRODUCT_TEXT}</p>
            <h2 className={SECTION_HEADING_CLASS}>{PROBLEM_HEADING}</h2>
            <p className={BODY_TEXT_CLASS}>{MARKETLOG_PROBLEM_TEXT}</p>
            <h2 className={SECTION_HEADING_CLASS}>{USER_MARKET_HEADING}</h2>
            <p className={`${BODY_TEXT_CLASS} leading-normal`}>
              {MARKETLOG_USER_MARKET_INTRO}
            </p>
          </div>

          {/* Phone mockup - desktop: right column, mobile: stacked below */}
          <div className="flex justify-center">
            <div className="w-[150px] h-[307px] md:w-[220px] md:h-[449px] lg:w-[287px] lg:h-[586px] relative overflow-hidden">
              <img
                src={marketlogPhone}
                alt="Marketlog mobile calendar view"
                className="themed-img absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Full-width body text */}
          <div className="lg:col-span-2 text-text-primary text-[15px] font-normal leading-normal space-y-5">
            {map(MARKETLOG_USER_MARKET_BODY, (paragraph, index) => (
              <p key={index}>
                {index === 0 ? (
                  <>
                    {paragraph}
                    <br />
                    <a
                      href={MARKETLOG_CLICK_HERE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {CLICK_HERE_LABEL}
                    </a>
                    {CLICK_HERE_SUFFIX}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* THE RESULT */}
      <div className="flex flex-col gap-[60px] pt-[50px] lg:pt-[100px]">
        <h2 className="font-medium text-[34px] leading-normal tracking-[-1.974px] text-text-primary">
          {RESULT_HEADING}
        </h2>

        {/* Desktop: horizontal layout */}
        <div className="hidden lg:flex gap-[var(--grid-gutter)] items-center justify-center">
          <div className="w-[285px] shrink-0">
            <img
              src={marketlogResult1}
              alt="Marketlog calendar result - earnings"
              className="themed-img w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between gap-[62px]">
            <img
              src={marketlogResult2}
              alt="Marketlog desktop view"
              className="themed-img w-full h-[234px] object-cover"
            />
            <img
              src={marketlogResult3}
              alt="Marketlog desktop view - events"
              className="themed-img w-full h-[234px] object-cover"
            />
          </div>
          <div className="w-[285px] shrink-0">
            <img
              src={marketlogResult4}
              alt="Marketlog calendar result - economic"
              className="themed-img w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Mobile/Tablet: vertical stacked layout */}
        <div className="flex lg:hidden flex-col gap-5 items-center">
          <img
            src={marketlogResult1}
            alt="Marketlog calendar result - earnings"
            className="themed-img w-[150px] h-[276px] md:w-[200px] md:h-[368px] object-cover"
          />
          <img
            src={marketlogResult2}
            alt="Marketlog desktop view"
            className="themed-img w-[337px] h-[204px] md:w-full md:h-auto object-cover"
          />
          <img
            src={marketlogResult3}
            alt="Marketlog desktop view - events"
            className="themed-img w-[337px] h-[204px] md:w-full md:h-auto object-cover"
          />
          <img
            src={marketlogResult4}
            alt="Marketlog calendar result - economic"
            className="themed-img w-[150px] h-[279px] md:w-[200px] md:h-[372px] object-cover"
          />
        </div>
      </div>

      {/* Divider + Next Project */}
      <div className="flex flex-col gap-[35px] pb-[50px] lg:pb-0 pt-[50px] lg:pt-[100px]">
        <hr className="w-full border-t border-text-muted/30" />
        <ScrollDownLink
          to={MARKETLOG_NEXT_PROJECT.href}
          className="flex items-center justify-end lg:justify-start group"
        >
          <span className="font-medium text-[36px] leading-normal tracking-[-1.97px] text-text-primary group-hover:opacity-70 transition-opacity">
            {MARKETLOG_NEXT_PROJECT.label}
          </span>
          <svg
            className="w-6 h-6 ml-1 text-text-primary"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
              fill="currentColor"
            />
          </svg>
        </ScrollDownLink>
      </div>
    </div>
  );
}
