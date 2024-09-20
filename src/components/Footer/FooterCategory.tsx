import Link from "next/link";

type Props = {
  title: string;
  delay: number;
  activeLink: boolean;
  links: {
    text: string | string[];
    href?: string;
    renderIcon?: (className: string) => React.ReactNode;
    color?: string;
    fontSize?: string;
    target?: string;
  }[];
};

export default function FooterCategory({
  title,
  delay,
  activeLink,
  links,
}: Props) {
  links = links.map((link) => {
    if (!link.target) {
      link.target = "_blank";
    }
    return link;
  });
  return (
    <div className="obs-hidden" style={{ ["--delay" as any]: delay }}>
      <h2 className="mb-6 font-heading text-lg font-bold uppercase">{title}</h2>
      <ul className="flex flex-col gap-y-2">
        {links.map((link, index) => (
          <li key={index} className="mb-4 transition-colors md:justify-start">
            {link.href ? (
              <Link
                href={link.href}
                target={link.target}
                className={`group inline`}
              >
                {link.renderIcon &&
                  link.renderIcon(
                    `text-2xl inline shrink-0 transition-colors group-hover:${link.color}`,
                  )}
                {activeLink && (
                  <p
                    className={`ml-2 inline ${link.fontSize}  break-words align-middle transition-colors duration-200 group-hover:${link.color} group-hover:underline`}
                  >
                    {link.text}
                  </p>
                )}
              </Link>
            ) : (
              <>
                {link.renderIcon &&
                  link.renderIcon(
                    `text-2xl inline shrink-0 transition-colors group-hover:${link.color}`,
                  )}
                {Array.isArray(link.text) ? (
                  link.text.map((text, idx) => (
                    <p
                      key={idx}
                      className={`${idx > 0 ? "mt-2" : "ml-2 inline"} break-words transition-colors duration-200 group-hover:${link.color} group-hover:underline`}
                    >
                      {text}
                    </p>
                  ))
                ) : (
                  <p
                    className={`ml-2 inline break-words transition-colors duration-200 group-hover:${link.color} group-hover:underline`}
                  >
                    {link.text}
                  </p>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
