export const GA_MEASUREMENT_ID = "G-67FYRJPDTL";

export const SITE_TITLE = "Tanya Sherbakov | Portfolio";

export const LG_BREAKPOINT = 1024;

export const NAV_WIDTH_PX = 223;
export const LAYOUT_GAP_PX = 20;
export const NAV_TOTAL_OFFSET_PX = NAV_WIDTH_PX + LAYOUT_GAP_PX;

export const NAV_ITEMS = [
  { label: "Intro", href: "#intro" },
  { label: "Work", href: "#work", hasChevron: true },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const INTRO_TEXT = `Hey there! I'm Tanya.\nA designer with a curious mind \nand a practical approach,\nI create simple, elegant solutions \nto complex human problems.`;

export const PROJECTS = [
  {
    title: "Myfxbook",
    description: "Product Design | November 2021 - January 2022",
    layout: "images-left" as const,
  },
  {
    title: "Marketlog",
    description: "Product Design | January 2022",
    layout: "images-right" as const,
  },
  {
    title: "KillBills",
    description: "Product Design | November 2021 - January 2022",
    layout: "images-left" as const,
  },
  {
    title: "Ichi",
    description: "Product Design | May - June 2021",
    layout: "images-right" as const,
  },
] as const;

export const ABOUT_VALUES = ["Mindful", "Intuitive", "Useful", "Well made"];

export const ABOUT_PARAGRAPHS = [
  "If your product needs clarity, calm, and a deep-thinking designer who gets humans, we might be a great match.",
  "I'm a UX/UI designer with a product mindset and a background in fine arts. I specialize in turning complexity into simplicity; whether it's redesigning fintech tools for traders or helping startups bring their first MVP to life.",
  "My approach is intuitive but structured: I focus on the why behind user actions, use research and logic to guide flow and layout, and favor lightweight, elegant solutions that make users feel smart - not overwhelmed.",
  "Fluent in Hebrew, Russian, and English. Conversational in Japanese. I thrive in teams that value curiosity, kindness, and deep work.",
];

export const STATUS_TEXT = "Actively searching for my next challenge";

export const PROJECT_SLUGS: Record<string, string> = {
  Myfxbook: "myfxbook",
  Marketlog: "marketlog",
  KillBills: "killbills",
  Ichi: "ichi",
} as const;

export const WORK_SUBMENU_ITEMS = [
  { label: "Myfxbook", href: "/work/myfxbook" },
  { label: "Marketlog", href: "/work/marketlog" },
  { label: "Killbills", href: "/work/killbills" },
  { label: "Ichi", href: "/work/ichi" },
] as const;

export const MYFXBOOK_TITLE = "Myfxbook";
export const MYFXBOOK_SUBTITLE = "Product Design | 2025";

export const MYFXBOOK_OVERVIEW_TEXT =
  "During 2025, I led the end-to-end UX and UI design of MyFXBook's new proprietary trading firm ecosystem: a multi-layered product suite that enables traders to discover, compare, and evaluate prop firms with clarity and confidence. This involved building a central directory, an interactive comparison engine, and firm-specific profile pages, all fully integrated within an active financial platform.";

export const MYFXBOOK_CHALLENGE_INTRO =
  "The trading community lacked a dedicated, user-friendly space to evaluate prop firms.";

export const MYFXBOOK_CHALLENGE_BODY =
  "While interest in prop trading was surging, existing resources were either fragmented or confusing. Our goal was to create a centralized, intuitive, and scalable ecosystem that allowed users to:";

export const MYFXBOOK_CHALLENGE_ITEMS = [
  "Browse all available firms",
  "Compare offerings side-by-side",
  "Deep-dive into individual firm details",
  "Read and leave verified reviews",
];

export const MYFXBOOK_ROLE_ITEMS = [
  "Lead UX/UI Designer",
  "End-to-end design ownership across three interconnected experiences",
  "UX research, user flow mapping, wireframes, and visual design",
  "Ongoing collaboration with product managers, developers, and QA",
  "Ensured consistency with MyFXBook's platform while evolving the brand",
];

export const MYFXBOOK_DISCOVERY_ITEMS = [
  "Mapped out common pain points from existing trader communities.",
  "Analyzed industry competitors and financial data products.",
  "Interviewed active users and synthesized their browsing behaviors.",
];

export const MYFXBOOK_IA_INTRO = "Created a three-tiered ecosystem structure:";

export const MYFXBOOK_IA_TIERS = [
  {
    label: "Directory Landing Page:",
    description:
      "Clear overview of all prop firms, sortable by firm type, funding size, requirements, and more",
    link: "\u2192 View live",
  },
  {
    label: "Comparison Page:",
    description:
      "A feature-level breakdown tool that lets users line up firms and assess them on specific attributes",
    link: "\u2192 View live",
  },
  {
    label: "Challenges Page:",
    description:
      "A feature-level breakdown tool that lets users line up challenges across firms and assess them on specific attributes",
    link: "\u2192 View live",
  },
  {
    label: "Firm Profile Pages:",
    description: "Each prop firm receives a dedicated page with:",
    details: [
      "Overview",
      "Core details (funding, rules, costs)",
      "Ratings and verified user reviews",
    ],
    link: "\u2192 Example live page",
  },
];

export const MYFXBOOK_DESIGN_ITEMS = [
  "Prioritized clarity, hierarchy, and actionability over heavy visuals.",
  "Built responsive layouts that serve both power users and first-timers.",
  "Designed modular cards and reusable components for scalability.",
  "Validated design decisions through internal feedback and phased rollouts.",
];

export const MYFXBOOK_OUTCOME_ITEMS = [
  "Launched in Q4 2023 across web platform.",
  "Received strong user feedback and organic adoption without a heavy marketing push.",
  "Created a new potential revenue stream via firm visibility & partnerships.",
  "Set the foundation for future add-ons, including watchlists, alerts, and onboarding flows.",
];

export const MYFXBOOK_REFLECTION_TEXT =
  "This project challenged me to balance dense financial data with real-world usability. Designing for clarity in a data-saturated field taught me how vital information hierarchy, user trust, and scalable logic are. I also learned that true user-centered design often means fighting for simplicity\u2014even when the subject matter is complex.";

export const MYFXBOOK_NEXT_PROJECT = {
  label: "Marketlog",
  href: "/work/marketlog",
} as const;

export const MARKETLOG_PRODUCT_TEXT =
  "Marketlog is an adaptive website, offering an online community & providing the user with tools to track, compare and analyze their trading activity. My role in this project is to adapt the experience from the desktop to the mobile. In this case study I will focus on the mobile adaptation for the Calendars feature.";

export const MARKETLOG_PROBLEM_TEXT =
  "Each calendar contains a lot of data and usually appears, on desktop, in big charts with multiple columns. The issue of adapting these charts to the mobile device, was to find a way in which there will be no need in horizontal scrolling through the chart, so the users' eyes and brains could relax and observe the data without extra effort.";

export const MARKETLOG_USER_MARKET_INTRO =
  "As known humans are naturally visually scanning subjects vertically, thus, our horizontal reading patterns are something we learned as the written language become a thing.";

export const MARKETLOG_USER_MARKET_BODY = [
  "With that in mind, we can understand why it is difficult to us to keep concentration while reading horizontally wide texts. This fact can be supported by several known patterns and articles. The first example that comes to mind is the newspaper text columns, that usually divided to several columns per page to make the reading experience easier. In addition there is the known \"F & Z\" patterns of the eye movement, which we, designers, use to make the content more accessible for users.",
  "But before the execution, to look on the competitors performance and understand their choices was important as well.",
  "The majority of our competitors are using tables with horizontal scrolling in their calendars. It's like this due to the fact that most of them were built years ago, when the mobile website adaptation was not that common. In addition most of our competitors are addressing more mature audience, that is used to accessing the platform through the desktop.",
  "We hope to expand our target audience, and for that we need to address the needs of the younger traders and investors, who are more adapted the the smartphone. Thus the decision to make the calendars layout vertical in the mobile device, avoiding unnecessary horizontal scrolling was crucial for the user experience.",
];

export const MARKETLOG_CLICK_HERE_URL =
  "https://uxdesign.cc/viewing-patterns-the-subconscious-psychology-of-the-eye-8b8b8522f753";

export const MARKETLOG_NEXT_PROJECT = {
  label: "KillBills",
  href: "/work/killbills",
} as const;

export const KILLBILLS_PRODUCT_TEXT =
  "KillBills was founded during a casual conversation between two childhood friends regarding a bill that went missing when one of them was moving house.The platform provides an easy to use, fast and Eco – friendly way for people to pay their bills by gathering them all in one app disregarding payment vouchers. The app mostly addresses the younger people who share lease but does not forget the older and family-oriented audience. My job was to design the user experience for KillBills from top to bottom.";

export const KILLBILLS_PROBLEM_TEXT_1 =
  "The first problem is that the way Israelis receive and pay their bills is old fashioned, slow and costly. Bills that are lost or forgotten generate preventable debt. Citizens have no way to monitor their bills by any way other than collecting receipts which creates disorder and confusion.";

export const KILLBILLS_PROBLEM_TEXT_2 =
  "The second problem is that state provided bills cannot be broken into separate smaller bills for many to pay (i.e., roommates paying for the electricity need to choose one person to pay the entire bill himself, creating debt)";

export const KILLBILLS_SOLUTION_TEXT =
  "KillBills provides its users a platform in which they can receive, monitor and pay their bills either separately or by splitting it between other users.";

export const KILLBILLS_USER_TEXT =
  "Chen lives in an apartment with his brother and he needs to split the electricity bill with him because he wants their payments to be equal.";

export const KILLBILLS_WIREFRAMES_TEXT =
  "As the initial design phase continued, I made sure to base screen designs on feedback and findings from AB testing while keeping in mind business needs and limitations.During the testing I have found that users want to be able to pay a single bill with multiple payment methods.";

export const KILLBILLS_IMPACT_TEXT =
  'The app provides an easy and accessible way to pay bills. One quote from peer feedback: "I cant wait to use the app! We so need it"';

export const KILLBILLS_LEARNED_TEXT =
  "I learned how to work with an external business and to communicate and solve users need under business limitations.";

export const KILLBILLS_NEXT_STEPS = [
  "• Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed.",
  "• Conduct more user research to determine any new areas of need.",
];

export const KILLBILLS_NEXT_PROJECT = {
  label: "Ichi",
  href: "/work/ichi",
} as const;

export const ICHI_PRODUCT_TEXT =
  "Ichi is a regional sushi restaurant that strives to deliver healthy, specialty sushi and side dishes. They offer a wide spectrum of competitive pricing. Ichi targets customers like commuters and workers who lack the time or ability to prepare a family dinner.";

export const ICHI_PROBLEM_TEXT =
  "Long and inaccurate delivery time often causes frustration in users, especially the busy and the hungry ones \u{1F609}";

export const ICHI_GOAL_TEXT =
  "Provide transparency about the delivery time so the users can organize their time better.";

export const ICHI_RESPONSIBILITIES_TEXT =
  "Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.";

export const ICHI_UNDERSTANDING_USER_TEXT = [
  "I conducted interviews and created empathy maps to understand the users I\u2019m designing for and their needs. A primary user group identified through research was working adults who don\u2019t have time to cook meals.",
  "This user group confirmed initial assumptions about Ichi customers, but research also revealed that time was not the only factor limiting users from cooking at home. Other user problems included obligations, interests, or challenges that make it difficult to get groceries for cooking or go to restaurants in-person.",
];

export const ICHI_MEET_USER_TEXT =
  "Adam is about to complete his B.Sc in Program Engineering, and hopes that the internship will launch their career. Adam finds himself very busy during the day and has no time for food prep. After a long day he is looking to order a delivery from his favorite sushi restaurant and relax.";

export const ICHI_PROBLEM_STATEMENT_TEXT =
  "Adam is a busy student and an intern who needs to know when his order will arrive because he wants to organize his time better.";

export const ICHI_USER_JOURNEY_TEXT =
  "Mapping Adam\u2019s user journey revealed how helpful it would be for users to have access to a dedicated Ichi app.";

export const ICHI_PAPER_WIREFRAMES_TEXT =
  "Taking the time to draft iterations of each screen of the app on paper, ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, I prioritize visible empathy button for the new order to help users start the process easily.";

export const ICHI_DIGITAL_WIREFRAMES_TEXT =
  "As the initial design phase continued, I made sure to base screen designs on feedback and findings from the user research. Delivery timing transparency was a key user need to address in the designs.";

export const ICHI_LOFI_PROTOTYPE_TEXT =
  "Using the completed set of digital wireframes, I created a low-fidelity prototype. The primary user flow I connected was the sushi ordering process, so the prototype could be used in a usability study.";

export const ICHI_LOFI_PROTOTYPE_URL = "https://bit.ly/3xJrJJK";

export const ICHI_USABILITY_ROUND_1 = [
  "1) Users want to order sushi quickly",
  "2) Users want to know the exact time of the delivery",
  "3) Users want their location to set automatically",
];

export const ICHI_USABILITY_ROUND_2 = [
  "1) The cart icon is not visible enough",
  "2) The profile section is not in a intuitive place for the users",
];

export const ICHI_MOCKUPS_TEXT =
  "In the early designs there was two navigation bars. The usability studies showed that it was confusing for the users, thus I reduced it to contain only one navigation bar.";

export const ICHI_MOCKUPS_CART_TEXT =
  "The cart icon was moved to the top - right corner of the navigation bar, because the usability studies showed that in the initial designs users had trouble finding it.";

export const ICHI_HIFI_PROTOTYPE_TEXT =
  "The final high-fidelity prototype presented cleaner user flows forsushi order and checkout. It also met user needs for tracking adelivery option as well as more customization.";

export const ICHI_HIFI_PROTOTYPE_URL = "https://bit.ly/3cZFcVG";

export const ICHI_IMPACT_TEXT =
  'The app makes users feel like Ichi Sushi really thinks about how to meet their needs. One quote from peer feedback: "It\u2019s easy to use and has a really nice design making it straightforward on how to order food. The \u201Ctrack order\u201D feature is really helpful."';

export const ICHI_LEARNED_TEXT =
  "While designing the Ichi app, I learned that the first ideas for the app are only the beginning of the process. Usability studies and peer feedback influenced each iteration of the app\u2019s designs.";

export const ICHI_NEXT_STEPS = [
  "\u2022 Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed.",
  "\u2022 Conduct more user research to determine any new areas of need.",
];

export const ICHI_NEXT_PROJECT = {
  label: "Homepage",
  href: "/",
} as const;

export const THEME_COUNT = 5;

export const THEME_STORAGE_KEY = "portfolio-theme";

export const CONTACT_LINKS = [
  {
    label: "tanyasherb.ux@gmail.com",
    href: "mailto:tanyasherb.ux@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    label: "Resume",
    href: "#",
  },
] as const;
