import { map } from "lodash-es";
import ScrollDownLink from "./ScrollDownLink";
import {
  ICHI_PRODUCT_TEXT,
  ICHI_PROBLEM_TEXT,
  ICHI_GOAL_TEXT,
  ICHI_RESPONSIBILITIES_TEXT,
  ICHI_UNDERSTANDING_USER_TEXT,
  ICHI_MEET_USER_TEXT,
  ICHI_PROBLEM_STATEMENT_TEXT,
  ICHI_USER_JOURNEY_TEXT,
  ICHI_PAPER_WIREFRAMES_TEXT,
  ICHI_DIGITAL_WIREFRAMES_TEXT,
  ICHI_LOFI_PROTOTYPE_TEXT,
  ICHI_LOFI_PROTOTYPE_URL,
  ICHI_USABILITY_ROUND_1,
  ICHI_USABILITY_ROUND_2,
  ICHI_MOCKUPS_TEXT,
  ICHI_MOCKUPS_CART_TEXT,
  ICHI_HIFI_PROTOTYPE_TEXT,
  ICHI_HIFI_PROTOTYPE_URL,
  ICHI_IMPACT_TEXT,
  ICHI_LEARNED_TEXT,
  ICHI_NEXT_STEPS,
  ICHI_NEXT_PROJECT,
} from "../constants";

import dIchi1 from "../assets/portfolio/ichi/d-ichi-1.png";
import dIchi2 from "../assets/portfolio/ichi/d-ichi-2.png";
import dIchi3 from "../assets/portfolio/ichi/d-ichi-3.png";
import dIchi4 from "../assets/portfolio/ichi/d-ichi-4.png";
import dIchi5 from "../assets/portfolio/ichi/d-ichi-5.png";
import dIchi6 from "../assets/portfolio/ichi/d-ichi-6.png";
import dIchi7 from "../assets/portfolio/ichi/d-ichi-7.png";
import dIchi8 from "../assets/portfolio/ichi/d-ichi-8.png";
import dIchi9 from "../assets/portfolio/ichi/d-ichi-9.png";
import dIchi10 from "../assets/portfolio/ichi/d-ichi-10.png";
import dIchi11 from "../assets/portfolio/ichi/d-ichi-11.png";
import dIchi12 from "../assets/portfolio/ichi/d-ichi-12.png";
import tIchi1 from "../assets/portfolio/ichi/t-ichi-1.png";
import tIchi2 from "../assets/portfolio/ichi/t-ichi-2.png";
import tIchi3 from "../assets/portfolio/ichi/t-ichi-3.png";
import tIchi4 from "../assets/portfolio/ichi/t-ichi-4.png";
import tIchi5 from "../assets/portfolio/ichi/t-ichi-5.png";
import tIchi6 from "../assets/portfolio/ichi/t-ichi-6.png";
import tIchi7 from "../assets/portfolio/ichi/t-ichi-7.png";
import tIchi8 from "../assets/portfolio/ichi/t-ichi-8.png";
import tIchi9 from "../assets/portfolio/ichi/t-ichi-9.png";
import tIchi10 from "../assets/portfolio/ichi/t-ichi-10.png";
import tIchi11 from "../assets/portfolio/ichi/t-ichi-11.png";
import tIchi12 from "../assets/portfolio/ichi/t-ichi-12.png";
import mIchi1 from "../assets/portfolio/ichi/m-ichi-1.png";
import mIchi2 from "../assets/portfolio/ichi/m-ichi-2.png";
import mIchi3 from "../assets/portfolio/ichi/m-ichi-3.png";
import mIchi4 from "../assets/portfolio/ichi/m-ichi-4.png";
import mIchi5 from "../assets/portfolio/ichi/m-ichi-5.png";
import mIchi6 from "../assets/portfolio/ichi/m-ichi-6.png";
import mIchi7 from "../assets/portfolio/ichi/m-ichi-7.png";
import mIchi8 from "../assets/portfolio/ichi/m-ichi-8.png";
import mIchi9 from "../assets/portfolio/ichi/m-ichi-9.png";
import mIchi10 from "../assets/portfolio/ichi/m-ichi-10.png";
import mIchi11 from "../assets/portfolio/ichi/m-ichi-11.png";
import mIchi12 from "../assets/portfolio/ichi/m-ichi-12.png";

const HEADING = "font-medium text-[24px] md:text-[36px] leading-normal tracking-[-1.974px] text-text-primary";
const BODY = "font-normal text-[15px] leading-normal text-text-primary";
const TITLE = "Ichi";
const SUBTITLE = "Product Design | May - June 2021";

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

export default function IchiPage() {
  return (
    <div className="flex flex-col w-full max-w-[997px] lg:max-w-none px-[var(--grid-padding)] lg:px-0 lg:pr-[var(--grid-padding)]">
      {/* Title */}
      <div className="flex flex-col gap-0 md:gap-[10px] pt-[50px] lg:py-[50px] text-text-primary">
        <h1 className="font-medium text-[32px] md:text-[64px] leading-normal md:leading-[68px] tracking-[-1.974px]">
          {TITLE}
        </h1>
        <p className="text-[12px] md:text-[15px] font-normal leading-[20px]">
          {SUBTITLE}
        </p>
      </div>

      <div className="flex flex-col gap-[50px] md:gap-[100px]">
        {/* Product/Problem/Goal/Responsibilities + Hero image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={HEADING}>The product</h2>
            <p className={BODY}>{ICHI_PRODUCT_TEXT}</p>
            <h2 className={HEADING}>The problem</h2>
            <p className={BODY}>{ICHI_PROBLEM_TEXT}</p>
            <h2 className={HEADING}>The goal</h2>
            <p className={BODY}>{ICHI_GOAL_TEXT}</p>
            <h2 className={HEADING}>My responsibilities</h2>
            <p className={BODY}>{ICHI_RESPONSIBILITIES_TEXT}</p>
          </div>
          <div className="flex justify-center">
            <ResponsiveImage
              desktop={dIchi1} tablet={tIchi1} mobile={mIchi1}
              alt="Ichi sushi app" className="themed-img"
            />
          </div>
        </div>

        {/* Understanding the user + Persona (text left, image right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-center w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={HEADING}>Understanding the user</h2>
            {map(ICHI_UNDERSTANDING_USER_TEXT, (p, i) => (
              <p key={i} className={BODY}>{p}</p>
            ))}
          </div>
          <div className="w-full">
            <ResponsiveImage
              desktop={dIchi2} tablet={tIchi2} mobile={mIchi2}
              alt="User persona" className="themed-img"
            />
          </div>
        </div>

        {/* Meet the user (image left, text right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-start w-full">
          <div className="w-full">
            <ResponsiveImage
              desktop={dIchi3} tablet={tIchi3} mobile={mIchi3}
              alt="Meet Adam" className="themed-img"
            />
          </div>
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={HEADING}>Meet the user</h2>
            <p className={BODY}>{ICHI_MEET_USER_TEXT}</p>
            <h2 className={HEADING}>Problem statement</h2>
            <p className={BODY}>{ICHI_PROBLEM_STATEMENT_TEXT}</p>
            <h2 className={HEADING}>User journey map</h2>
            <p className={BODY}>{ICHI_USER_JOURNEY_TEXT}</p>
          </div>
        </div>

        {/* Journey map full-width */}
        <div className="w-full">
          <ResponsiveImage
            desktop={dIchi4} tablet={tIchi4} mobile={mIchi4}
            alt="User journey map" className="themed-img"
          />
        </div>

        {/* Paper wireframes (text left, image right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-center w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={HEADING}>Starting the design with paper wireframes</h2>
            <p className={BODY}>{ICHI_PAPER_WIREFRAMES_TEXT}</p>
          </div>
          <div className="w-full">
            <ResponsiveImage
              desktop={dIchi5} tablet={tIchi5} mobile={mIchi5}
              alt="Paper wireframes" className="themed-img"
            />
          </div>
        </div>

        {/* Digital wireframes (image left, text right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-center w-full">
          <div className="w-full">
            <ResponsiveImage
              desktop={dIchi6} tablet={tIchi6} mobile={mIchi6}
              alt="Digital wireframes" className="themed-img"
            />
          </div>
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={HEADING}>Digital wireframes</h2>
            <p className={BODY}>{ICHI_DIGITAL_WIREFRAMES_TEXT}</p>
          </div>
        </div>

        {/* Low-fidelity prototype (text left, image right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-center w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={HEADING}>Low-fidelity prototype</h2>
            <p className={BODY}>{ICHI_LOFI_PROTOTYPE_TEXT}</p>
            <a
              href={ICHI_LOFI_PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] underline text-text-primary"
            >
              Low fidelity prototype
            </a>
          </div>
          <div className="w-full">
            <ResponsiveImage
              desktop={dIchi7} tablet={tIchi7} mobile={mIchi7}
              alt="Low-fidelity prototype" className="themed-img"
            />
          </div>
        </div>

        {/* Usability study: findings (two columns on desktop, stacked otherwise) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-start w-full text-text-primary">
          <div className="flex flex-col gap-5">
            <h2 className={HEADING}>Usability study: findings</h2>
            <div className={BODY}>
              <p className="mb-3">Round 1 findings</p>
              {map(ICHI_USABILITY_ROUND_1, (item, i) => (
                <p key={i} className={i === 0 ? "mb-0" : ""}>{item}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className={`${HEADING} hidden lg:block lg:opacity-0`}>Usability study: findings</h2>
            <div className={BODY}>
              <p className="mb-3">Round 2 findings</p>
              {map(ICHI_USABILITY_ROUND_2, (item, i) => (
                <p key={i} className={i === 0 ? "mb-0" : ""}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Mockups (text left, image right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-center w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={HEADING}>Mockups</h2>
            <p className={BODY}>{ICHI_MOCKUPS_TEXT}</p>
          </div>
          <div className="w-full">
            <ResponsiveImage
              desktop={dIchi8} tablet={tIchi8} mobile={mIchi8}
              alt="Mockups before and after" className="themed-img"
            />
          </div>
        </div>

        {/* Cart icon mockup (image left, text right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-center w-full">
          <div className="w-full">
            <ResponsiveImage
              desktop={dIchi9} tablet={tIchi9} mobile={mIchi9}
              alt="Cart icon before and after" className="themed-img"
            />
          </div>
          <div className="flex flex-col gap-5 text-text-primary">
            <p className={BODY}>{ICHI_MOCKUPS_CART_TEXT}</p>
          </div>
        </div>

        {/* Showcase full-width */}
        <div className="w-full">
          <ResponsiveImage
            desktop={dIchi10} tablet={tIchi10} mobile={mIchi10}
            alt="Ichi app showcase" className="themed-img"
          />
        </div>

        {/* High-fidelity prototype (text left, image right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] items-center w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={HEADING}>High-fidelity prototype</h2>
            <p className={BODY}>{ICHI_HIFI_PROTOTYPE_TEXT}</p>
            <a
              href={ICHI_HIFI_PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] underline text-text-primary"
            >
              High fidelity prototype
            </a>
          </div>
          <div className="w-full">
            <ResponsiveImage
              desktop={dIchi11} tablet={tIchi11} mobile={mIchi11}
              alt="High-fidelity prototype" className="themed-img"
            />
          </div>
        </div>

        {/* Accessibility considerations */}
        <div className="flex flex-col gap-[60px] w-full">
          <h2 className={HEADING}>Accessibility considerations</h2>
          <ResponsiveImage
            desktop={dIchi12} tablet={tIchi12} mobile={mIchi12}
            alt="Accessibility considerations" className="themed-img"
          />
        </div>

        {/* Impact / What I learned / Next steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--grid-gutter)] w-full">
          <div className="flex flex-col gap-5 text-text-primary">
            <h2 className={HEADING}>Impact</h2>
            <p className={BODY}>{ICHI_IMPACT_TEXT}</p>
            <h2 className={HEADING}>What I learned</h2>
            <p className={BODY}>{ICHI_LEARNED_TEXT}</p>
            <h2 className={HEADING}>Next steps</h2>
            <div className={BODY}>
              {map(ICHI_NEXT_STEPS, (step, i) => (
                <p key={i} className={i === 0 ? "mb-0" : ""}>{step}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider + Next Project */}
      <div className="flex flex-col gap-[35px] items-end pb-[50px] lg:pb-0 pt-[50px] md:pt-[100px]">
        <hr className="w-full border-t border-text-muted/30" />
        <ScrollDownLink
          to={ICHI_NEXT_PROJECT.href}
          className="flex items-center group"
        >
          <span className="font-medium text-[24px] md:text-[36px] leading-normal tracking-[-1.97px] text-text-primary group-hover:opacity-70 transition-opacity">
            {ICHI_NEXT_PROJECT.label}
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
