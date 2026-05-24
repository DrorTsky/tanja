import { map } from "lodash-es";
import ScrollDownLink from "./ScrollDownLink";
import {
  KILLBILLS_PRODUCT_TEXT,
  KILLBILLS_PROBLEM_TEXT_1,
  KILLBILLS_PROBLEM_TEXT_2,
  KILLBILLS_SOLUTION_TEXT,
  KILLBILLS_USER_TEXT,
  KILLBILLS_WIREFRAMES_TEXT,
  KILLBILLS_IMPACT_TEXT,
  KILLBILLS_LEARNED_TEXT,
  KILLBILLS_NEXT_STEPS,
  KILLBILLS_NEXT_PROJECT,
} from "../constants";

import dKillbills1 from "../assets/portfolio/Killbills/d-killbills-1.png";
import dKillbills2 from "../assets/portfolio/Killbills/d-killbills-2.png";
import dKillbills3 from "../assets/portfolio/Killbills/d-killbills-3.png";
import dKillbills4 from "../assets/portfolio/Killbills/d-killbills-4.png";
import dKillbills5 from "../assets/portfolio/Killbills/d-killbills-5.png";
import dKillbills6 from "../assets/portfolio/Killbills/d-killbills-6.png";
import dKillbills7 from "../assets/portfolio/Killbills/d-killbills-7.png";
import tKillbills1 from "../assets/portfolio/Killbills/t-killbills-1.png";
import tKillbills2 from "../assets/portfolio/Killbills/t-killbills-2.png";
import tKillbills3 from "../assets/portfolio/Killbills/t-killbills-3.png";
import tKillbills4 from "../assets/portfolio/Killbills/t-killbills-4.png";
import tKillbills5 from "../assets/portfolio/Killbills/t-killbills-5.png";
import tKillbills6 from "../assets/portfolio/Killbills/t-killbills-6.png";
import tKillbills7 from "../assets/portfolio/Killbills/t-killbills-7.png";
import mKillbills1 from "../assets/portfolio/Killbills/m-killbills-1.png";
import mKillbills2 from "../assets/portfolio/Killbills/m-killbills-2.png";
import mKillbills3 from "../assets/portfolio/Killbills/m-killbills-3.png";
import mKillbills4 from "../assets/portfolio/Killbills/m-killbills-4.png";
import mKillbills5 from "../assets/portfolio/Killbills/m-killbills-5.png";
import mKillbills6 from "../assets/portfolio/Killbills/m-killbills-6.png";
import mKillbills7 from "../assets/portfolio/Killbills/m-killbills-7.png";

const SECTION_HEADING_CLASS =
  "font-medium text-[24px] md:text-[36px] leading-normal tracking-[-1.97px] text-text-primary";
const BODY_TEXT_CLASS =
  "font-normal text-[15px] leading-[20px] text-text-primary";
const TITLE = "KillBills";
const SUBTITLE = "Product Design | November 2021 - January 2022";
const PRODUCT_HEADING = "The product";
const PROBLEM_HEADING = "The problem";
const SOLUTION_HEADING = "The Solution";
const USER_HEADING = "Understanding the user";
const PAINPOINTS_HEADING = "Painpoints";
const WIREFRAMES_HEADING = "Wireframes";
const IMPACT_HEADING = "Impact";
const LEARNED_HEADING = "What I learned";
const NEXT_STEPS_HEADING = "Next steps";

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

export default function KillBillsPage() {
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

      {/* Content sections */}
      <div className="flex flex-col gap-[50px] md:gap-[100px] items-center">
        {/* Product/Problem/Solution + Phone */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={SECTION_HEADING_CLASS}>{PRODUCT_HEADING}</h2>
            <p className={BODY_TEXT_CLASS}>{KILLBILLS_PRODUCT_TEXT}</p>
            <h2 className={SECTION_HEADING_CLASS}>{PROBLEM_HEADING}</h2>
            <div className={BODY_TEXT_CLASS}>
              <p className="mb-0">{KILLBILLS_PROBLEM_TEXT_1}</p>
              <p>{KILLBILLS_PROBLEM_TEXT_2}</p>
            </div>
            <h2 className={SECTION_HEADING_CLASS}>{SOLUTION_HEADING}</h2>
            <p className={BODY_TEXT_CLASS}>{KILLBILLS_SOLUTION_TEXT}</p>
          </div>

          <div className="flex justify-center items-start">
            <ResponsiveImage
              desktop={dKillbills1}
              tablet={tKillbills1}
              mobile={mKillbills1}
              alt="KillBills app mockup"
              className="themed-img w-auto max-h-[307px] md:max-h-[454px] lg:max-h-[586px]"
            />
          </div>
        </div>

        {/* Understanding the user */}
        <div className="flex flex-col gap-5 w-full">
          <h2 className={SECTION_HEADING_CLASS}>{USER_HEADING}</h2>
          <p className={BODY_TEXT_CLASS}>{KILLBILLS_USER_TEXT}</p>
          <ResponsiveImage
            desktop={dKillbills2}
            tablet={tKillbills2}
            mobile={mKillbills2}
            alt="User persona - Chen"
            className="themed-img"
          />
        </div>

        {/* Painpoints */}
        <div className="flex flex-col gap-5 w-full">
          <h2 className={SECTION_HEADING_CLASS}>{PAINPOINTS_HEADING}</h2>
          <ResponsiveImage
            desktop={dKillbills3}
            tablet={tKillbills3}
            mobile={mKillbills3}
            alt="User painpoints analysis"
            className="themed-img"
          />
        </div>

        {/* Wireframes: side-by-side on desktop, stacked on tablet/mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-center w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className="font-medium text-[36px] leading-normal tracking-[-1.97px] text-text-primary">
              {WIREFRAMES_HEADING}
            </h2>
            <p className={BODY_TEXT_CLASS}>{KILLBILLS_WIREFRAMES_TEXT}</p>
          </div>
          <div className="w-full">
            <ResponsiveImage
              desktop={dKillbills4}
              tablet={tKillbills4}
              mobile={mKillbills4}
              alt="KillBills wireframes"
              className="themed-img"
            />
          </div>
        </div>

        {/* App design system / style guide */}
        <div className="w-full">
          <ResponsiveImage
            desktop={dKillbills5}
            tablet={tKillbills5}
            mobile={mKillbills5}
            alt="KillBills design system"
            className="themed-img"
          />
        </div>

        {/* Phone mockups - single pre-composed image */}
        <div className="w-full">
          <ResponsiveImage
            desktop={dKillbills6}
            tablet={tKillbills6}
            mobile={mKillbills6}
            alt="KillBills app screens"
            className="themed-img"
          />
        </div>

        {/* Impact/Learned/Next steps + illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-center w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={SECTION_HEADING_CLASS}>{IMPACT_HEADING}</h2>
            <p className={BODY_TEXT_CLASS}>{KILLBILLS_IMPACT_TEXT}</p>
            <h2 className={SECTION_HEADING_CLASS}>{LEARNED_HEADING}</h2>
            <p className={BODY_TEXT_CLASS}>{KILLBILLS_LEARNED_TEXT}</p>
            <h2 className={SECTION_HEADING_CLASS}>{NEXT_STEPS_HEADING}</h2>
            <div className={BODY_TEXT_CLASS}>
              {map(KILLBILLS_NEXT_STEPS, (step, index) => (
                <p key={index} className={index === 0 ? "mb-0" : ""}>
                  {step}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <ResponsiveImage
              desktop={dKillbills7}
              tablet={tKillbills7}
              mobile={mKillbills7}
              alt="KillBills character illustration"
              className="themed-img"
            />
          </div>
        </div>
      </div>

      {/* Divider + Next Project */}
      <div className="flex flex-col gap-[35px] pb-[50px] lg:pb-0 pt-[50px] md:pt-[100px]">
        <hr className="w-full border-t border-text-muted/30" />
        <ScrollDownLink
          to={KILLBILLS_NEXT_PROJECT.href}
          className="flex items-center justify-end group"
        >
          <span className="font-medium text-[24px] md:text-[36px] leading-normal tracking-[-1.97px] text-text-primary group-hover:opacity-70 transition-opacity">
            {KILLBILLS_NEXT_PROJECT.label}
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
