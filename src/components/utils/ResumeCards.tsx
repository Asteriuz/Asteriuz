type ResumeCardsProps = {
  title: string;
  children?: React.ReactNode;
};

export default function ResumeCards({ title, children }: ResumeCardsProps) {
  return (
    <div className="w-full rounded-lg p-6 shadow-float duration-300 ease-in  xl:p-8">
      <div className="flex flex-col  gap-x-4 gap-y-8">
        <div className="flex flex-col  gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="divider m-0 "></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
