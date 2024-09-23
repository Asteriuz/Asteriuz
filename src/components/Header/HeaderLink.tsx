import Link from "next/link";

type HeaderLinkProps = {
  Icon: React.FC<{ className?: string }>;
  title: string;
  link: string;
  isActive: boolean; // New prop for active state
};

export default function HeaderLink({
  Icon,
  title,
  link,
  isActive,
}: HeaderLinkProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon
        className={`text-2xl ${isActive ? "text-primary" : "text-semiblack"}`}
      />
      <Link
        href={link}
        className={`font-semibold capitalize transition-all duration-300 ease-in ${
          isActive ? "text-primary" : "text-semiblack"
        } hover:text-primary`}
      >
        {title}
      </Link>
    </div>
  );
}
