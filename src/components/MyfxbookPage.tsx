import { map } from "lodash-es";
import ScrollDownLink from "./ScrollDownLink";
import {
  MYFXBOOK_TITLE,
  MYFXBOOK_SUBTITLE,
  MYFXBOOK_OVERVIEW_TEXT,
  MYFXBOOK_CHALLENGE_INTRO,
  MYFXBOOK_CHALLENGE_BODY,
  MYFXBOOK_CHALLENGE_ITEMS,
  MYFXBOOK_ROLE_ITEMS,
  MYFXBOOK_DISCOVERY_ITEMS,
  MYFXBOOK_IA_INTRO,
  MYFXBOOK_IA_TIERS,
  MYFXBOOK_DESIGN_ITEMS,
  MYFXBOOK_OUTCOME_ITEMS,
  MYFXBOOK_REFLECTION_TEXT,
  MYFXBOOK_NEXT_PROJECT,
} from "../constants";

import dMyfxbook1 from "../assets/portfolio/myfxbook/d-myfxbook-1.png";
import dMyfxbook2 from "../assets/portfolio/myfxbook/d-myfxbook-2.png";
import dMyfxbook3 from "../assets/portfolio/myfxbook/d-myfxbook-3.png";
import dMyfxbook4 from "../assets/portfolio/myfxbook/d-myfxbook-4.png";
import dMyfxbook5 from "../assets/portfolio/myfxbook/d-myfxbook-5.png";
import tMyfxbook1 from "../assets/portfolio/myfxbook/t-myfxbook-1.png";
import tMyfxbook2 from "../assets/portfolio/myfxbook/t-myfxbook-2.png";
import tMyfxbook3 from "../assets/portfolio/myfxbook/t-myfxbook-3.png";
import tMyfxbook4 from "../assets/portfolio/myfxbook/t-myfxbook-4.png";
import tMyfxbook5 from "../assets/portfolio/myfxbook/t-myfxbook-5.png";
import mMyfxbook1 from "../assets/portfolio/myfxbook/m-myfxbook-1.png";
import mMyfxbook2 from "../assets/portfolio/myfxbook/m-myfxbook-2.png";
import mMyfxbook3 from "../assets/portfolio/myfxbook/m-myfxbook-3.png";
import mMyfxbook4 from "../assets/portfolio/myfxbook/m-myfxbook-4.png";
import mMyfxbook5 from "../assets/portfolio/myfxbook/m-myfxbook-5.png";

const SECTION_HEADING_CLASS =
  "font-medium text-[24px] md:text-[36px] leading-normal tracking-[-1.97px] text-text-primary";
const BODY_TEXT_CLASS =
  "font-normal text-[15px] leading-[20px] text-text-primary";

const OVERVIEW_HEADING = "Overview";
const CHALLENGE_HEADING = "The Challenge";
const ROLE_HEADING = "My Role";
const DISCOVERY_HEADING = "Discovery & User Research";
const IA_HEADING = "Information Architecture & Planning";
const DESIGN_HEADING = "Design & Iteration";
const OUTCOME_HEADING = "Outcome & Impact";
const REFLECTION_HEADING = "Reflection";

interface ScreenshotSet {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
}

const HERO_IMAGE: ScreenshotSet = {
  desktop: dMyfxbook1,
  tablet: tMyfxbook1,
  mobile: mMyfxbook1,
  alt: "Directory overview",
};

const GALLERY_IMAGES: ScreenshotSet[] = [
  { desktop: dMyfxbook2, tablet: tMyfxbook2, mobile: mMyfxbook2, alt: "Comparison page" },
  { desktop: dMyfxbook3, tablet: tMyfxbook3, mobile: mMyfxbook3, alt: "Firm profile" },
  { desktop: dMyfxbook4, tablet: tMyfxbook4, mobile: mMyfxbook4, alt: "Challenge comparison" },
  { desktop: dMyfxbook5, tablet: tMyfxbook5, mobile: mMyfxbook5, alt: "Reviews page" },
];

function Screenshot({ desktop, tablet, mobile, alt }: ScreenshotSet) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <img
        src={mobile}
        alt={alt}
        className="w-full h-auto"
      />
    </picture>
  );
}

export default function MyfxbookPage() {
  const textBlock1 = (
    <div className="flex flex-col gap-5 text-text-primary">
      <h2 className={SECTION_HEADING_CLASS}>{OVERVIEW_HEADING}</h2>
      <p className={BODY_TEXT_CLASS}>{MYFXBOOK_OVERVIEW_TEXT}</p>

      <h2 className={SECTION_HEADING_CLASS}>{CHALLENGE_HEADING}</h2>
      <div className={BODY_TEXT_CLASS}>
        <p className="mb-0">{MYFXBOOK_CHALLENGE_INTRO}</p>
        <p className="mb-0">{MYFXBOOK_CHALLENGE_BODY}</p>
        <ul className="list-disc ml-[22.5px] mt-2">
          {map(MYFXBOOK_CHALLENGE_ITEMS, (item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <h2 className={SECTION_HEADING_CLASS}>{ROLE_HEADING}</h2>
      <ul className={`${BODY_TEXT_CLASS} list-disc ml-[22.5px]`}>
        {map(MYFXBOOK_ROLE_ITEMS, (item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  const textBlock2 = (
    <div className="flex flex-col gap-5 text-text-primary">
      <h2 className={SECTION_HEADING_CLASS}>{DISCOVERY_HEADING}</h2>
      <ul className={`${BODY_TEXT_CLASS} list-disc ml-[22.5px]`}>
        {map(MYFXBOOK_DISCOVERY_ITEMS, (item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className={SECTION_HEADING_CLASS}>{IA_HEADING}</h2>
      <div className={BODY_TEXT_CLASS}>
        <p className="mb-4">{MYFXBOOK_IA_INTRO}</p>
        {map(MYFXBOOK_IA_TIERS, (tier) => (
          <div key={tier.label} className="mb-4">
            <p className="font-normal mb-0">{tier.label}</p>
            <p className="mb-0">{tier.description}</p>
            {"details" in tier &&
              tier.details &&
              map(tier.details, (detail) => (
                <p key={detail} className="mb-0">
                  {detail}
                </p>
              ))}
            <p className="mb-0">{tier.link}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const textBlock3 = (
    <div className="flex flex-col gap-5 text-text-primary">
      <h2 className={SECTION_HEADING_CLASS}>{DESIGN_HEADING}</h2>
      <ul className={`${BODY_TEXT_CLASS} list-disc ml-[22.5px]`}>
        {map(MYFXBOOK_DESIGN_ITEMS, (item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className={SECTION_HEADING_CLASS}>{OUTCOME_HEADING}</h2>
      <ul className={`${BODY_TEXT_CLASS} list-disc ml-[22.5px]`}>
        {map(MYFXBOOK_OUTCOME_ITEMS, (item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className={SECTION_HEADING_CLASS}>{REFLECTION_HEADING}</h2>
      <p className={BODY_TEXT_CLASS}>{MYFXBOOK_REFLECTION_TEXT}</p>
    </div>
  );

  return (
    <div className="flex flex-col w-full max-w-[997px] lg:max-w-none px-[var(--grid-padding)] lg:px-0 lg:pr-[var(--grid-padding)]">
      {/* Title */}
      <div className="flex flex-col gap-0 md:gap-[10px] py-[50px] text-text-primary">
        <h1 className="font-medium text-[32px] md:text-[64px] leading-normal md:leading-[68px] tracking-[-1.974px]">
          {MYFXBOOK_TITLE}
        </h1>
        <p className="text-[12px] md:text-[15px] font-normal leading-[20px]">
          {MYFXBOOK_SUBTITLE}
        </p>
      </div>

      {/* Desktop layout: two-column (text left, all images right) */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-[var(--grid-gutter)]">
        <div className="flex flex-col gap-5 text-text-primary">
          {textBlock1}
          {textBlock2}
          {textBlock3}
        </div>
        <div className="flex flex-col justify-between py-[64px]">
          <Screenshot {...HERO_IMAGE} />
          {map(GALLERY_IMAGES, (set) => (
            <Screenshot key={set.alt} {...set} />
          ))}
        </div>
      </div>

      {/* Tablet/Mobile layout: interleaved text and images */}
      <div className="flex flex-col gap-[50px] lg:hidden">
        {textBlock1}
        <Screenshot {...HERO_IMAGE} />
        {textBlock2}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {map(GALLERY_IMAGES, (set) => (
            <Screenshot key={set.alt} {...set} />
          ))}
        </div>
        {textBlock3}
      </div>

      {/* Divider + Next Project */}
      <div className="flex flex-col gap-[35px] pb-[50px] lg:pb-0 pt-[50px] md:pt-[100px]">
        <hr className="w-full border-t border-text-muted/30" />
        <ScrollDownLink
          to={MYFXBOOK_NEXT_PROJECT.href}
          className="flex items-center justify-end group"
        >
          <span className="font-medium text-[24px] md:text-[36px] leading-normal tracking-[-1.97px] text-text-primary group-hover:opacity-70 transition-opacity">
            {MYFXBOOK_NEXT_PROJECT.label}
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
