import { map } from "lodash-es";
import { STATUS_TEXT, CONTACT_LINKS } from "../constants";
import dHpContact from "../assets/portfolio/homepage/d-hp-contact.png";
import tHpContact from "../assets/portfolio/homepage/t-hp-contact.png";
import mHpContact from "../assets/portfolio/homepage/m-hp-contact.png";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full px-[var(--grid-padding)] pb-[50px] md:pb-[150px] lg:px-0 lg:pb-0 lg:pr-[var(--grid-padding)]">
      <div className="flex flex-col gap-[50px] md:flex-row md:items-end md:gap-[var(--grid-gutter)]">
        <div className="flex flex-col gap-[50px] md:flex-1 md:w-0 md:justify-between md:self-stretch md:gap-0">
          <div className="flex items-center gap-2.5">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[15px] shrink-0 text-text-primary" aria-hidden="true">
              <path d="M13.1762 11.6554C12.1143 14.3153 10.2295 15.3887 7.52179 14.8755C4.81412 14.3623 2.6937 13.0324 1.16053 10.8856C-0.372646 8.7389 -0.386712 6.55965 1.11833 4.34787C2.62337 2.13609 4.77896 0.737468 7.58509 0.151997C10.3912 -0.433474 12.2901 0.672416 13.2817 3.46966C14.2734 6.26691 14.2382 8.9955 13.1762 11.6554Z" fill="currentColor"/>
            </svg>
            <span className="font-medium text-[15px] leading-[22px] text-text-primary">
              {STATUS_TEXT}
            </span>
          </div>

          <div className="flex flex-col gap-[15px] md:gap-[20px] min-[1033px]:grid min-[1033px]:grid-cols-5 min-[1033px]:gap-[var(--grid-gutter)] min-[1033px]:items-end font-medium text-[15px] text-text-primary">
            {map(CONTACT_LINKS, (link) => (
              <a
                key={link.label}
                href={link.href}
                className={`underline hover:opacity-70 transition-opacity whitespace-nowrap ${
                  link.label === "tanyasherb.ux@gmail.com" ? "min-[1033px]:col-span-3" : ""
                }`}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[345px] aspect-square md:flex-1 md:w-0 md:max-w-none md:h-auto overflow-hidden bg-img-tint">
          <picture>
            <source media="(min-width: 1024px)" srcSet={dHpContact} />
            <source media="(min-width: 768px)" srcSet={tHpContact} />
            <img
              src={mHpContact}
              alt="Artwork by Tanya"
              className="w-full h-full object-cover themed-img"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
