import { get } from "lodash-es";

import dHpMyfxbook from "../assets/portfolio/homepage/d-hp-myfxbook.png";
import dHpMarketlog from "../assets/portfolio/homepage/d-hp-marketlog.png";
import dHpKillbills from "../assets/portfolio/homepage/d-hp-killbills.png";
import dHpIchi from "../assets/portfolio/homepage/d-hp-ichi.png";
import tHpMyfxbook from "../assets/portfolio/homepage/t-hp-myfxbook.png";
import tHpMarketlog from "../assets/portfolio/homepage/t-hp-marketlog.png";
import tHpKillbills from "../assets/portfolio/homepage/t-hp-killbills.png";
import tHpIchi from "../assets/portfolio/homepage/t-hp-ichi.png";
import mHpMyfxbook from "../assets/portfolio/homepage/m-hp-myfxbook.png";
import mHpMarketlog from "../assets/portfolio/homepage/m-hp-marketlog.png";
import mHpKillbills from "../assets/portfolio/homepage/m-hp-killbills.png";
import mHpIchi from "../assets/portfolio/homepage/m-hp-ichi.png";

interface ProjectCardProps {
  title: string;
  description: string;
  layout: "images-left" | "images-right";
  index: number;
}

interface ProjectImages {
  desktop: string;
  tablet: string;
  mobile: string;
}

const PROJECT_IMAGES: Record<number, ProjectImages> = {
  0: { desktop: dHpMyfxbook, tablet: tHpMyfxbook, mobile: mHpMyfxbook },
  1: { desktop: dHpMarketlog, tablet: tHpMarketlog, mobile: mHpMarketlog },
  2: { desktop: dHpKillbills, tablet: tHpKillbills, mobile: mHpKillbills },
  3: { desktop: dHpIchi, tablet: tHpIchi, mobile: mHpIchi },
};

export default function ProjectCard({ title, description, layout, index }: ProjectCardProps) {
  const images = get(PROJECT_IMAGES, index);
  if (!images) return null;

  const imagesFirst = layout === "images-left";

  const desktopImageBlock = (
    <div
      className={`w-1/2 h-full flex items-end overflow-hidden ${
        imagesFirst ? "justify-start" : "justify-end"
      }`}
    >
      <img
        src={images.desktop}
        alt=""
        className="h-full w-auto max-w-none themed-img"
      />
    </div>
  );

  const desktopTitleBlock = (
    <div className="w-1/2 flex flex-col justify-center gap-2.5 px-[var(--grid-padding)]">
      <h2 className="font-medium text-[64px] leading-[68px] tracking-[-1.974px] text-text-primary">
        {title}
      </h2>
      <p className="text-[15px] font-normal text-text-primary leading-normal">
        {description}
      </p>
    </div>
  );

  const tabletImageBlock = (
    <div
      className={`flex-1 min-w-0 h-full flex items-end overflow-hidden ${
        imagesFirst ? "justify-start" : "justify-end"
      }`}
    >
      <img
        src={images.tablet}
        alt=""
        className="h-full w-auto max-w-none themed-img"
      />
    </div>
  );

  const tabletTitleBlock = (
    <div className="flex-1 min-w-0 flex flex-col h-full justify-center">
      <h2 className="font-medium text-[40px] leading-[normal] tracking-[-1.974px] text-text-primary">
        {title}
      </h2>
      <p className="text-[14px] font-normal leading-normal text-text-primary">
        {description}
      </p>
    </div>
  );

  return (
    <div className="relative w-full h-[217px] md:h-[216px] lg:h-[280px] bg-card-bg overflow-hidden">
      {/* Mobile layout */}
      <div className="md:hidden h-full flex flex-col">
        <div className="shrink-0 px-[var(--grid-padding)] pt-[10px] flex flex-col gap-1">
          <h2 className="font-medium text-[24px] leading-[normal] tracking-[-1.974px] text-text-primary">
            {title}
          </h2>
          <p className="text-[12px] font-normal text-text-primary leading-normal">
            {description}
          </p>
        </div>
        <div className="flex-1 min-h-0 flex items-end justify-center overflow-hidden">
          <img
            src={images.mobile}
            alt=""
            className="max-h-full w-auto themed-img"
          />
        </div>
      </div>

      {/* Tablet layout */}
      <div className="hidden md:flex lg:hidden items-stretch h-full px-[var(--grid-padding)] gap-[var(--grid-gutter)]">
        {imagesFirst ? (
          <>
            {tabletImageBlock}
            {tabletTitleBlock}
          </>
        ) : (
          <>
            {tabletTitleBlock}
            {tabletImageBlock}
          </>
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex items-stretch h-full pl-[var(--nav-total-offset)] pr-[var(--grid-padding)]">
        {imagesFirst ? (
          <>
            {desktopImageBlock}
            {desktopTitleBlock}
          </>
        ) : (
          <>
            {desktopTitleBlock}
            {desktopImageBlock}
          </>
        )}
      </div>
    </div>
  );
}
