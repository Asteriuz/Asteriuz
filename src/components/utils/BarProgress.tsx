type BarProgressProps = {
  title: string;
  value: number;
};

export default function BarProgress({ title, value }: BarProgressProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between font-semibold">
        {/* <p>Inglês</p> */}
        {/* <p>95%</p> */}
        <p>{title}</p>
        <p>{value}%</p>
      </div>
      <div className="progress-striped active progress min-h-4">
        <div
          role="progressbar progress-striped"
          style={{ width: `${value}%` }}
          className="progress-bar min-h-4"
        />
      </div>
    </div>
  );
}
