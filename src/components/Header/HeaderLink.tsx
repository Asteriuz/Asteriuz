import Link from "next/link";

type HeaderLinkProps = {
  Icon: React.FC<{ className?: string }>;
  title: string;
  link: string;
};

export default function HeaderLink({ Icon, title, link }: HeaderLinkProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-2xl text-primary" />
      <Link
        href={link}
        className="font-semibold capitalize text-semiblack transition-all duration-300 ease-in hover:text-primary"
      >
        {title}
      </Link>
    </div>
  );
}
