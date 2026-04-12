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
import ichiHero from "../assets/ichi-hero.png";
import ichiPersona from "../assets/ichi-persona.png";
import ichiMeetUser from "../assets/ichi-meet-user.png";
import ichiJourney from "../assets/ichi-journey.png";
import ichiPaperWireframes from "../assets/ichi-paper-wireframes.png";
import ichiDigitalWireframe1 from "../assets/ichi-digital-wireframe-1.png";
import ichiDigitalWireframe2 from "../assets/ichi-digital-wireframe-2.png";
import ichiLofiPrototype from "../assets/ichi-lofi-prototype.png";
import ichiMockups from "../assets/ichi-mockups.png";
import ichiMockups2 from "../assets/ichi-mockups-2.png";
import ichiShowcase from "../assets/ichi-showcase.png";
import ichiHifiPrototype from "../assets/ichi-hifi-prototype.png";
import ichiAccessibility from "../assets/ichi-accessibility.png";

const HEADING = "font-medium text-[24px] lg:text-[36px] leading-normal tracking-[-1.974px] text-text-primary";
const BODY = "font-normal text-[15px] leading-normal text-text-primary";
const TITLE = "Ichi";
const SUBTITLE = "Product Design | May - June 2021";

export default function IchiPage() {
  return (
    <div className="flex flex-col w-full max-w-[997px] px-[var(--grid-padding)] lg:px-0 lg:pr-[var(--grid-padding)]">
      {/* Title */}
      <div className="flex flex-col pt-[50px] lg:py-[50px] lg:gap-[10px] text-text-primary">
        <h1 className="font-medium text-[32px] lg:text-[64px] leading-normal lg:leading-[68px] tracking-[-1.974px]">
          {TITLE}
        </h1>
        <p className="text-[15px] font-normal leading-[20px]">
          {SUBTITLE}
        </p>
      </div>

      <div className="flex flex-col gap-[50px] lg:gap-[100px]">
        {/* Product/Problem/Goal/Responsibilities + Hero image */}
        <div className="flex flex-col lg:flex-row lg:gap-[var(--grid-gutter)] w-full">
          <div className="flex flex-col gap-5 w-full lg:w-[489px] lg:shrink-0 text-text-primary">
            <h2 className={HEADING}>The product</h2>
            <p className={BODY}>{ICHI_PRODUCT_TEXT}</p>
            <h2 className={HEADING}>The problem</h2>
            <p className={BODY}>{ICHI_PROBLEM_TEXT}</p>
            <h2 className={HEADING}>The goal</h2>
            <p className={BODY}>{ICHI_GOAL_TEXT}</p>
            <h2 className={HEADING}>My responsibilities</h2>
            <p className={BODY}>{ICHI_RESPONSIBILITIES_TEXT}</p>
          </div>
          <div className="flex justify-center w-full lg:w-[488px] lg:shrink-0 mt-[50px] lg:mt-0">
            <div className="w-full aspect-[375/381] lg:w-[488px] lg:aspect-auto lg:h-[676px] relative overflow-hidden">
              <img
                src={ichiHero}
                alt="Ichi sushi app"
                className="themed-img absolute h-[118.79%] left-0 top-[-18.79%] w-full max-w-none"
              />
            </div>
          </div>
        </div>

        {/* Understanding the user + Persona */}
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between w-full lg:gap-[var(--grid-gutter)]">
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0 text-text-primary">
            <h2 className={HEADING}>Understanding the user</h2>
            {map(ICHI_UNDERSTANDING_USER_TEXT, (p, i) => (
              <p key={i} className={BODY}>{p}</p>
            ))}
          </div>
          <div className="flex justify-center w-full lg:w-[489px] lg:shrink-0">
            <div className="w-full aspect-[421/188] lg:w-[421px] lg:h-[188px] lg:aspect-auto relative overflow-hidden">
              <img
                src={ichiPersona}
                alt="User persona"
                className="themed-img absolute h-[102.75%] left-[-20.61%] top-0 w-[141.21%] max-w-none"
              />
            </div>
          </div>
        </div>

        {/* Meet the user (image first on both mobile & desktop) */}
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-start lg:justify-between w-full lg:gap-[var(--grid-gutter)]">
          <div className="flex justify-center w-full lg:w-[489px] lg:shrink-0">
            <div className="w-full aspect-[489/288] lg:w-[489px] lg:h-[288px] lg:aspect-auto relative">
              <img
                src={ichiMeetUser}
                alt="Meet Adam"
                className="themed-img absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0 text-text-primary">
            <h2 className={HEADING}>Meet the user</h2>
            <p className={BODY}>{ICHI_MEET_USER_TEXT}</p>
            <h2 className={HEADING}>Problem statement</h2>
            <p className={BODY}>{ICHI_PROBLEM_STATEMENT_TEXT}</p>
            <h2 className={HEADING}>User journey map</h2>
            <p className={BODY}>{ICHI_USER_JOURNEY_TEXT}</p>
          </div>
        </div>

        {/* Journey map full-width */}
        <div className="w-full aspect-[997/511] relative">
          <img
            src={ichiJourney}
            alt="User journey map"
            className="themed-img absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Paper wireframes + Image */}
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between w-full lg:gap-[var(--grid-gutter)]">
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0 text-text-primary">
            <h2 className={HEADING}>Starting the design with paper wireframes</h2>
            <p className={BODY}>{ICHI_PAPER_WIREFRAMES_TEXT}</p>
          </div>
          <div className="flex justify-center w-full lg:w-[489px] lg:shrink-0">
            <div className="w-full aspect-[489/323] lg:w-[489px] lg:h-[323px] lg:aspect-auto relative">
              <img
                src={ichiPaperWireframes}
                alt="Paper wireframes"
                className="themed-img absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Digital wireframes (image first on both mobile & desktop) */}
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between w-full lg:gap-[var(--grid-gutter)]">
          <div className="flex justify-center w-full lg:w-[489px] lg:shrink-0">
            <div className="flex relative w-full lg:w-[489px] h-[186px] lg:h-[263px]">
              <img
                src={ichiDigitalWireframe1}
                alt="Digital wireframe 1"
                className="themed-img w-[58.49%] lg:w-[286px] h-[186px] lg:h-[263px] object-cover relative z-10"
              />
              <img
                src={ichiDigitalWireframe2}
                alt="Digital wireframe 2"
                className="themed-img w-[53.61%] lg:w-[285px] h-[185px] lg:h-[262px] object-cover relative ml-[-12.1%] lg:ml-[-60px] mt-[36px] lg:mt-[50px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0 text-text-primary">
            <h2 className={HEADING}>Digital wireframes</h2>
            <p className={BODY}>{ICHI_DIGITAL_WIREFRAMES_TEXT}</p>
          </div>
        </div>

        {/* Low-fidelity prototype + Image */}
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between w-full lg:gap-[var(--grid-gutter)]">
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0 text-text-primary">
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
          <div className="flex justify-center w-full lg:w-[489px] lg:shrink-0">
            <div className="w-full aspect-[489/230] lg:w-[489px] lg:h-[230px] lg:aspect-auto relative">
              <img
                src={ichiLofiPrototype}
                alt="Low-fidelity prototype"
                className="themed-img absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Usability study: findings (stacked on mobile, side-by-side on desktop) */}
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-start lg:justify-between w-full lg:gap-[var(--grid-gutter)] text-text-primary">
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0">
            <h2 className={HEADING}>Usability study: findings</h2>
            <div className={BODY}>
              <p className="mb-3">Round 1 findings</p>
              {map(ICHI_USABILITY_ROUND_1, (item, i) => (
                <p key={i} className={i === 0 ? "mb-0" : ""}>{item}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0">
            <h2 className={`${HEADING} hidden lg:block lg:opacity-0`}>Usability study: findings</h2>
            <div className={BODY}>
              <p className="mb-3">Round 2 findings</p>
              {map(ICHI_USABILITY_ROUND_2, (item, i) => (
                <p key={i} className={i === 0 ? "mb-0" : ""}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Mockups + Image */}
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between w-full lg:gap-[var(--grid-gutter)]">
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0 text-text-primary">
            <h2 className={HEADING}>Mockups</h2>
            <p className={BODY}>{ICHI_MOCKUPS_TEXT}</p>
          </div>
          <div className="flex justify-center w-full lg:w-[489px] lg:shrink-0 overflow-hidden">
            <div className="w-full aspect-[743/695] lg:w-[743px] lg:h-[695px] lg:aspect-auto relative">
              <img
                src={ichiMockups}
                alt="Mockups before and after"
                className="themed-img absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cart icon: image first, text second (both mobile & desktop) */}
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between w-full lg:gap-[var(--grid-gutter)]">
          <div className="flex justify-center w-full lg:w-[489px] lg:shrink-0 overflow-hidden">
            <div className="w-full aspect-[742/683] lg:w-[742px] lg:h-[683px] lg:aspect-auto relative">
              <img
                src={ichiMockups2}
                alt="Cart icon before and after"
                className="themed-img absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0 text-text-primary">
            <p className={BODY}>{ICHI_MOCKUPS_CART_TEXT}</p>
          </div>
        </div>

        {/* Showcase image */}
        <div className="flex justify-center lg:justify-start w-full">
          <div className="w-[345px] md:w-full h-[258px] md:h-auto md:aspect-[997/748] lg:w-full lg:h-auto lg:aspect-[997/748] relative overflow-hidden">
            <img
              src={ichiShowcase}
              alt="Ichi app showcase"
              className="themed-img absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* High-fidelity prototype + Image */}
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between w-full lg:gap-[var(--grid-gutter)]">
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0 text-text-primary">
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
          <div className="flex justify-center w-full lg:w-[489px] lg:shrink-0">
            <div className="w-full aspect-[489/385] lg:w-[489px] lg:h-[385px] lg:aspect-auto relative">
              <img
                src={ichiHifiPrototype}
                alt="High-fidelity prototype"
                className="themed-img absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Accessibility considerations */}
        <div className="flex flex-col gap-[60px] w-full">
          <h2 className={HEADING}>Accessibility considerations</h2>
          <div className="w-full aspect-[997/346] relative">
            <img
              src={ichiAccessibility}
              alt="Accessibility considerations"
              className="themed-img absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Impact / What I learned / Next steps */}
        <div className="flex flex-col lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col gap-5 w-full lg:w-[488px] lg:shrink-0 text-text-primary">
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
      <div className="flex flex-col gap-[35px] items-end pb-[50px] lg:pb-0 lg:items-start pt-[50px] lg:pt-[100px]">
        <hr className="w-full border-t border-text-muted/30" />
        <ScrollDownLink
          to={ICHI_NEXT_PROJECT.href}
          className="flex items-center group"
        >
          <span className="font-medium text-[36px] leading-normal tracking-[-1.97px] text-text-primary group-hover:opacity-70 transition-opacity">
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
