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
import killbillsPhone from "../assets/killbills-phone.png";
import killbillsUser from "../assets/killbills-user.png";
import killbillsPainpoints from "../assets/killbills-painpoints.png";
import killbillsWireframes from "../assets/killbills-wireframes.png";
import killbillsWireframe2 from "../assets/killbills-wireframe-2.png";
import killbillsScreen1 from "../assets/killbills-screen-1.png";
import killbillsScreen2 from "../assets/killbills-screen-2.png";
import killbillsScreen3 from "../assets/killbills-screen-3.png";
import killbillsScreen4 from "../assets/killbills-screen-4.png";
import killbillsBottom from "../assets/killbills-bottom.png";

const SECTION_HEADING_CLASS =
  "font-medium text-[24px] lg:text-[36px] leading-normal tracking-[-1.97px] text-text-primary";
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

export default function KillBillsPage() {
  return (
    <div className="flex flex-col w-full max-w-[997px] px-[var(--grid-padding)] lg:px-0 lg:pr-[var(--grid-padding)]">
      {/* Title */}
      <div className="flex flex-col py-[50px] lg:gap-[10px] text-text-primary">
        <h1 className="font-medium text-[32px] lg:text-[64px] leading-normal lg:leading-[68px] tracking-[-1.974px]">
          {TITLE}
        </h1>
        <p className="text-[12px] lg:text-[15px] font-normal leading-[20px]">
          {SUBTITLE}
        </p>
      </div>

      {/* Content sections */}
      <div className="flex flex-col gap-[50px] lg:gap-[100px] items-center">
        {/* Product/Problem/Solution + Phone: side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:gap-[var(--grid-gutter)] lg:items-center w-full">
          <div className="flex flex-col gap-5 w-full lg:w-[489px] lg:shrink-0 text-text-primary">
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

          <div className="flex justify-center w-full lg:w-[488px] lg:shrink-0 mt-[50px] lg:mt-0">
            <div className="w-[150px] h-[306px] md:w-[220px] md:h-[449px] lg:w-[287px] lg:h-[586px] relative overflow-hidden">
              <img
                src={killbillsPhone}
                alt="KillBills app mockup"
                className="themed-img absolute h-[111.59%] left-[-11.94%] top-[-5.8%] w-[123.13%] max-w-none"
              />
            </div>
          </div>
        </div>

        {/* Understanding the user */}
        <div className="flex flex-col gap-[20px] lg:gap-[var(--grid-gutter)] items-center w-full">
          <div className="flex flex-col gap-5 w-full text-text-primary">
            <h2 className={SECTION_HEADING_CLASS}>{USER_HEADING}</h2>
            <p className={BODY_TEXT_CLASS}>{KILLBILLS_USER_TEXT}</p>
          </div>
          <div className="w-[345px] md:w-full h-[244px] md:h-[400px] lg:h-[705px] relative overflow-hidden">
            <img
              src={killbillsUser}
              alt="User persona - Chen"
              className="themed-img absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Painpoints */}
        <div className="flex flex-col gap-5 w-full">
          <h2 className={SECTION_HEADING_CLASS}>{PAINPOINTS_HEADING}</h2>
          <div className="w-full aspect-[997/446] relative overflow-hidden">
            <img
              src={killbillsPainpoints}
              alt="User painpoints analysis"
              className="themed-img absolute h-[102.66%] left-[-20.69%] top-0 w-[141.25%] max-w-none"
            />
          </div>
        </div>

        {/* Wireframes: side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:gap-[var(--grid-gutter)] gap-5 items-center w-full">
          <div className="flex flex-col gap-5 w-full lg:w-[484px] lg:shrink-0 text-text-primary">
            <h2 className="font-medium text-[36px] leading-normal tracking-[-1.97px] text-text-primary">
              {WIREFRAMES_HEADING}
            </h2>
            <p className={BODY_TEXT_CLASS}>{KILLBILLS_WIREFRAMES_TEXT}</p>
          </div>
          <div className="w-[345px] md:w-full h-[308px] md:h-[400px] lg:w-[489px] lg:h-[436px] lg:shrink-0 relative">
            <img
              src={killbillsWireframes}
              alt="KillBills wireframes"
              className="themed-img absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Wireframe screenshot 2 */}
        <div className="w-[345px] md:w-full h-[194px] md:h-[400px] lg:w-[993px] lg:h-[559px] relative">
          <img
            src={killbillsWireframe2}
            alt="KillBills wireframe detail"
            className="themed-img absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Phone screens: 2 rows of 2 on mobile, single row of 4 on desktop */}
        <div className="hidden lg:flex items-start justify-between w-full">
          {map(
            [killbillsScreen3, killbillsScreen4, killbillsScreen1, killbillsScreen2],
            (src, index) => (
              <div key={index} className="w-[230px] h-[468px] relative overflow-hidden">
                <img
                  src={src}
                  alt="KillBills app screen"
                  className="themed-img absolute h-[111.54%] left-[-11.74%] top-[-5.77%] w-[122.57%] max-w-none"
                />
              </div>
            ),
          )}
        </div>

        <div className="flex lg:hidden flex-col gap-[50px] w-full">
          <div className="flex items-start justify-between w-full">
            <div className="w-[150px] md:w-[45%] h-[305px] md:h-[400px] relative overflow-hidden">
              <img
                src={killbillsScreen1}
                alt="KillBills app screen"
                className="themed-img absolute h-[111.54%] left-[-11.74%] top-[-5.77%] w-[122.57%] max-w-none"
              />
            </div>
            <div className="w-[150px] md:w-[45%] h-[305px] md:h-[400px] relative overflow-hidden">
              <img
                src={killbillsScreen2}
                alt="KillBills app screen"
                className="themed-img absolute h-[111.54%] left-[-11.74%] top-[-5.77%] w-[122.57%] max-w-none"
              />
            </div>
          </div>
          <div className="flex items-start justify-between w-full">
            <div className="w-[150px] md:w-[45%] h-[305px] md:h-[400px] relative overflow-hidden">
              <img
                src={killbillsScreen3}
                alt="KillBills app screen"
                className="themed-img absolute h-[111.54%] left-[-11.74%] top-[-5.77%] w-[122.57%] max-w-none"
              />
            </div>
            <div className="w-[150px] md:w-[45%] h-[305px] md:h-[400px] relative overflow-hidden">
              <img
                src={killbillsScreen4}
                alt="KillBills app screen"
                className="themed-img absolute h-[111.54%] left-[-11.74%] top-[-5.77%] w-[122.59%] max-w-none"
              />
            </div>
          </div>
        </div>

        {/* Impact/Learned/Next steps + Bottom image: side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:gap-[var(--grid-gutter)] lg:items-center w-full">
          <div className="flex flex-col gap-5 w-full lg:w-[489px] lg:shrink-0 text-text-primary">
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

          <div className="flex justify-center w-full lg:w-[488px] lg:shrink-0 mt-[50px] lg:mt-0">
            <div className="w-[345px] md:w-full h-[258px] md:h-[350px] lg:w-[488px] lg:h-[365px] relative">
              <img
                src={killbillsBottom}
                alt="KillBills final design"
                className="themed-img absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider + Next Project */}
      <div className="flex flex-col gap-[35px] pb-[50px] lg:pb-0 pt-[50px] lg:pt-[100px]">
        <hr className="w-full border-t border-text-muted/30" />
        <ScrollDownLink
          to={KILLBILLS_NEXT_PROJECT.href}
          className="flex items-center justify-end lg:justify-start group"
        >
          <span className="font-medium text-[36px] leading-normal tracking-[-1.97px] text-text-primary group-hover:opacity-70 transition-opacity">
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
