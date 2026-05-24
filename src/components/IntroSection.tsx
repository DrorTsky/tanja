export default function IntroSection() {
  return (
    <section id="intro" className="w-full px-[var(--grid-padding)] py-[50px] md:py-0 md:pb-[150px] lg:px-0 lg:pr-[var(--grid-padding)] lg:pb-[150px]">
      <h1 className="font-medium text-[24px] md:text-[40px] lg:text-[64px] leading-[normal] md:leading-[normal] lg:leading-[68px] tracking-[-1.974px] text-text-primary">
        Hey there! I'm Tanya.
        <br className="hidden lg:inline" />
        {" A designer with a curious mind "}
        <br className="hidden lg:inline" />
        and a practical approach,
        <br className="hidden lg:inline" />
        {" I create simple, elegant"}
        <br className="hidden lg:inline" />
        {" solutions to complex human problems."}
      </h1>
    </section>
  );
}
