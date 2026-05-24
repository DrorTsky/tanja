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

import dMarketlog1 from "../assets/portfolio/Marketlog/d-marketlog-1.png";
import dMarketlog2 from "../assets/portfolio/Marketlog/d-marketlog-2.png";
import dMarketlog3 from "../assets/portfolio/Marketlog/d-marketlog-3.png";
import tMarketlog1 from "../assets/portfolio/Marketlog/t-marketlog-1.png";
import tMarketlog2 from "../assets/portfolio/Marketlog/t-marketlog-2.png";
import tMarketlog3 from "../assets/portfolio/Marketlog/t-marketlog-3.png";
import mMarketlog1 from "../assets/portfolio/Marketlog/m-marketlog-1.png";
import mMarketlog2 from "../assets/portfolio/Marketlog/m-marketlog-2.png";
import mMarketlog3 from "../assets/portfolio/Marketlog/m-marketlog-3.png";

const SECTION_HEADING_CLASS =
  "font-medium text-[24px] md:text-[36px] leading-normal tracking-[-1.97px] text-text-primary";
const BODY_TEXT_CLASS =
  "font-normal text-[15px] leading-[20px] text-text-primary";
const RESULT_HEADING = "The result";
const TITLE = "Marketlog";
const SUBTITLE = "Product Design | January 2022 - Today";
const PRODUCT_HEADING = "The product";
const PROBLEM_HEADING = "The problem";
const USER_MARKET_HEADING = "Understanding the user & the market";
const CLICK_HERE_LABEL = "Click here";
const CLICK_HERE_SUFFIX = " for more about the human eye pattern.";

interface ResponsiveImageProps {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
  className?: string;
}

function ResponsiveImage({ desktop, tablet, mobile, alt, className = "" }: ResponsiveImageProps) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <img src={mobile} alt={alt} className={`w-full h-auto ${className}`} />
    </picture>
  );
}

export default function MarketlogPage() {
  return (
    <div className="flex flex-col w-full max-w-[997px] lg:max-w-none px-[var(--grid-padding)] lg:px-0 lg:pr-[var(--grid-padding)]">
      {/* Title */}
      <div className="flex flex-col gap-0 md:gap-[10px] py-[50px] text-text-primary">
        <h1 className="font-medium text-[32px] md:text-[64px] leading-normal md:leading-[68px] tracking-[-1.974px]">
          {TITLE}
        </h1>
        <p className="text-[12px] md:text-[15px] font-normal leading-[20px]">
          {SUBTITLE}
        </p>
      </div>

      {/* Content: text + phone mockup + body text */}
      <div className="flex flex-col gap-[50px] md:gap-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-[var(--grid-gutter)]">
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

          {/* Phone mockup */}
          <div className="flex justify-center md:shrink-0">
            <ResponsiveImage
              desktop={dMarketlog1}
              tablet={tMarketlog1}
              mobile={mMarketlog1}
              alt="Marketlog mobile calendar view"
              className="themed-img w-auto max-h-[307px] md:max-h-[454px] lg:max-h-[586px]"
            />
          </div>

          {/* Full-width body text */}
          <div className="md:col-span-2 text-text-primary text-[15px] font-normal leading-normal space-y-5">
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
      <div className="flex flex-col gap-[60px] pt-[50px] md:pt-[100px]">
        <h2 className="font-medium text-[24px] md:text-[34px] leading-normal tracking-[-1.974px] text-text-primary">
          {RESULT_HEADING}
        </h2>

        <ResponsiveImage
          desktop={dMarketlog2}
          tablet={tMarketlog2}
          mobile={mMarketlog2}
          alt="Marketlog economic calendar - desktop and mobile"
        />

        <ResponsiveImage
          desktop={dMarketlog3}
          tablet={tMarketlog3}
          mobile={mMarketlog3}
          alt="Marketlog earnings calendar - desktop and mobile"
        />
      </div>

      {/* Divider + Next Project */}
      <div className="flex flex-col gap-[35px] pb-[50px] lg:pb-0 pt-[50px] md:pt-[100px]">
        <hr className="w-full border-t border-text-muted/30" />
        <ScrollDownLink
          to={MARKETLOG_NEXT_PROJECT.href}
          className="flex items-center justify-end group"
        >
          <span className="font-medium text-[24px] md:text-[36px] leading-normal tracking-[-1.97px] text-text-primary group-hover:opacity-70 transition-opacity">
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
