import { map } from "lodash-es";
import { ABOUT_VALUES, ABOUT_PARAGRAPHS } from "../constants";

export default function AboutSection() {
  return (
    <section id="about" className="w-full px-[var(--grid-padding)] py-[50px] md:py-[100px] lg:px-0 lg:py-[100px] lg:pr-[var(--grid-padding)]">
      <div className="flex flex-col gap-[10px] md:flex-row md:items-center md:gap-[var(--grid-gutter)]">
        <div className="md:flex-1 md:w-0 md:min-w-0">
          <h2 className="font-medium text-[24px] md:text-[40px] lg:text-[64px] leading-[normal] lg:leading-[68px] tracking-[-1.974px] text-text-primary whitespace-nowrap">
            {map(ABOUT_VALUES, (value) => (
              <span key={value} className="block">
                {value}
              </span>
            ))}
          </h2>
        </div>

        <div className="md:flex-1 md:w-0 text-[15px] font-medium leading-[20px] text-text-primary space-y-5">
          {map(ABOUT_PARAGRAPHS, (paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
