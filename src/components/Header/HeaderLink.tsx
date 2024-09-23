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
    <div className="nav-link flex items-center gap-3">
      <Icon className="text-xl tall:text-2xl text-primary" />
      <Link
        href={link}
        className={`font-semibold text-sm tall:text-base capitalize transition-all duration-300 ease-in ${
          isActive ? "text-primary" : "text-semiblack"
        } hover:text-primary`}
      >
        {title}
      </Link>
    </div>
  );
}
