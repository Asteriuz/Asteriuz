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
    <h1 className="relative mb-10 xl:mb-16 text-4xl ">
      <p className="z-10 font-bold uppercase text-semiblack">
        {firstWord} <span className="text-primary">{lastWord}</span>
      </p>
      <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform text-[72px] xl:text-[85px] font-bold uppercase opacity-[0.07] xl:opacity-5">
        {bgWord}
      </div>
    </h1>
  );
}
