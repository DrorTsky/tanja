import { get } from "lodash-es";
import myfxbook1 from "../assets/myfxbook-1.png";
import myfxbook2 from "../assets/myfxbook-2.png";
import killbills from "../assets/killbills.png";
import ichi1 from "../assets/ichi-1.png";
import ichi2 from "../assets/ichi-2.png";

interface ProjectCardProps {
  title: string;
  description: string;
  layout: "images-left" | "images-right";
  index: number;
}

interface LayoutConfig {
  imageContainer: string;
  imageContainerStyle?: React.CSSProperties;
  images: React.ReactNode;
  titleStyle?: React.CSSProperties;
}

interface TabletConfig {
  imagesFirst: boolean;
  imageWidth: string;
  imageAspect: string;
  titleWidth?: string;
  images: React.ReactNode;
}

const MYFXBOOK_IMAGES = (
  <>
    <img src={myfxbook1} alt="" className="absolute block max-w-none h-auto" style={{ top: 0, left: 0, width: "94.9%" }} />
    <img src={myfxbook2} alt="" className="absolute block max-w-none h-auto" style={{ top: 0, left: "67.89%", width: "32.11%" }} />
  </>
);

const ICHI_IMAGES = (
  <>
    <img src={ichi1} alt="" className="absolute block max-w-none h-auto" style={{ top: "-31.43%", left: "24.78%", width: "75.22%" }} />
    <img src={ichi2} alt="" className="absolute block max-w-none h-auto" style={{ top: "-12.86%", left: 0, width: "62.46%" }} />
  </>
);

const KILLBILLS_TABLET_IMAGES = (
  <>
    <img src={killbills} alt="" className="absolute block max-w-none h-auto" style={{ top: "17.86%", left: 0, width: "52.3%" }} />
    <img src={killbills} alt="" className="absolute block max-w-none h-auto" style={{ top: "-75%", left: "47.7%", width: "52.3%" }} />
  </>
);

const DESKTOP_CONFIGS: Record<number, LayoutConfig> = {
  0: {
    imageContainer: "absolute overflow-hidden",
    imageContainerStyle: { left: "15.6%", top: 57, width: "36.5%", height: 224 },
    images: MYFXBOOK_IMAGES,
    titleStyle: { left: "58.75%", maxWidth: 348 },
  },
  1: {
    imageContainer: "absolute overflow-hidden",
    imageContainerStyle: { right: "8.1%", top: 57, width: "36.5%", height: 224 },
    images: MYFXBOOK_IMAGES,
    titleStyle: { left: "19%", maxWidth: 293 },
  },
  2: {
    imageContainer: "absolute overflow-hidden -translate-y-1/2",
    imageContainerStyle: { left: "17.3%", top: "50%", width: "33.9%", height: 280 },
    images: (
      <>
        <img src={killbills} alt="" className="absolute block max-w-none h-auto" style={{ top: "17.86%", left: 0, width: "52.3%" }} />
        <img src={killbills} alt="" className="absolute block max-w-none h-auto" style={{ top: "-75%", left: "47.7%", width: "52.3%" }} />
      </>
    ),
    titleStyle: { left: "58.75%", maxWidth: 348 },
  },
  3: {
    imageContainer: "absolute overflow-hidden",
    imageContainerStyle: { left: "47.3%", top: 0, width: "52.7%", height: 280 },
    images: ICHI_IMAGES,
    titleStyle: { left: "19%", maxWidth: 241 },
  },
};

const MOBILE_CONFIGS: Record<number, LayoutConfig> = {
  0: {
    imageContainer: "absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden",
    imageContainerStyle: { width: 265, height: 128 },
    images: MYFXBOOK_IMAGES,
  },
  1: {
    imageContainer: "absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden",
    imageContainerStyle: { width: 265, height: 128 },
    images: MYFXBOOK_IMAGES,
  },
  2: {
    imageContainer: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden",
    imageContainerStyle: { width: 325, height: 210 },
    images: (
      <img
        src={killbills}
        alt=""
        className="absolute block max-w-none h-auto -translate-x-1/2"
        style={{ top: "29.52%", left: "calc(50% + 0.5px)", width: 144 }}
      />
    ),
  },
  3: {
    imageContainer: "absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden",
    imageContainerStyle: { width: 352, height: 146 },
    images: ICHI_IMAGES,
  },
};

const TABLET_COL_HALF = "calc(50% - var(--grid-gutter) / 2)";

const TABLET_CONFIGS: Record<number, TabletConfig> = {
  0: {
    imagesFirst: true,
    imageWidth: TABLET_COL_HALF,
    imageAspect: "344 / 166",
    titleWidth: TABLET_COL_HALF,
    images: MYFXBOOK_IMAGES,
  },
  1: {
    imagesFirst: false,
    imageWidth: TABLET_COL_HALF,
    imageAspect: "344 / 166",
    images: MYFXBOOK_IMAGES,
  },
  2: {
    imagesFirst: true,
    imageWidth: TABLET_COL_HALF,
    imageAspect: "344 / 222",
    titleWidth: TABLET_COL_HALF,
    images: KILLBILLS_TABLET_IMAGES,
  },
  3: {
    imagesFirst: false,
    imageWidth: TABLET_COL_HALF,
    imageAspect: "344 / 222",
    images: ICHI_IMAGES,
  },
};

export default function ProjectCard({ title, description, index }: ProjectCardProps) {
  const desktopConfig = get(DESKTOP_CONFIGS, index);
  const mobileConfig = get(MOBILE_CONFIGS, index);
  const tabletConfig = get(TABLET_CONFIGS, index);
  if (!desktopConfig || !mobileConfig || !tabletConfig) return null;

  const tabletImages = (
    <div
      className="relative overflow-hidden themed-img"
      style={{ width: tabletConfig.imageWidth, aspectRatio: tabletConfig.imageAspect }}
    >
      {tabletConfig.images}
    </div>
  );

  const tabletTitle = (
    <div
      className="flex flex-col h-full items-start justify-center text-text-primary"
      style={tabletConfig.titleWidth ? { width: tabletConfig.titleWidth } : undefined}
    >
      <h2 className="font-medium text-[40px] leading-[normal] tracking-[-1.974px] w-full">
        {title}
      </h2>
      <p className="text-[14px] font-normal leading-normal w-full">
        {description}
      </p>
    </div>
  );

  return (
    <div className="relative w-full h-[212px] md:h-auto md:aspect-[32/9] lg:aspect-auto lg:h-[280px] bg-card-bg overflow-hidden">
      {/* Mobile layout */}
      <div className="md:hidden">
        <div className={`${mobileConfig.imageContainer} themed-img`} style={mobileConfig.imageContainerStyle}>
          {mobileConfig.images}
        </div>
        <div className="absolute top-[10px] flex flex-col gap-1" style={{ left: "var(--grid-padding)" }}>
          <h2 className="font-medium text-[24px] leading-[normal] tracking-[-1.974px] text-text-primary">
            {title}
          </h2>
          <p className="text-[12px] font-normal text-text-primary leading-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Tablet layout */}
      <div className="hidden md:flex lg:hidden items-end justify-between h-full" style={{ paddingLeft: "var(--grid-padding)", paddingRight: "var(--grid-padding)" }}>
        {tabletConfig.imagesFirst ? (
          <>
            {tabletImages}
            {tabletTitle}
          </>
        ) : (
          <>
            {tabletTitle}
            {tabletImages}
          </>
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <div className={`${desktopConfig.imageContainer} themed-img`} style={desktopConfig.imageContainerStyle}>
          {desktopConfig.images}
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-2.5"
          style={desktopConfig.titleStyle}
        >
          <h2 className="font-medium text-[64px] leading-[68px] tracking-[-1.974px] text-text-primary">
            {title}
          </h2>
          <p className="text-[15px] font-normal text-text-primary leading-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
