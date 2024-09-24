type SectionTextProps = {
  firstWord: string;
  lastWord: string;
  bgWord: string;
};

export default function SectionText({
  firstWord,
  lastWord,
  bgWord,
}: SectionTextProps) {
  return (
    <h2 className="relative mb-10 text-4xl xl:mb-16 ">
      <p className="relative z-10 font-heading font-bold uppercase text-semiblack">
        {firstWord} <span className="text-primary">{lastWord}</span>
      </p>
      <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform font-heading text-[72px] font-bold uppercase tracking-wide opacity-[0.07] xl:text-[85px] xl:opacity-5">
        {bgWord}
      </div>
    </h2>
  );
}
