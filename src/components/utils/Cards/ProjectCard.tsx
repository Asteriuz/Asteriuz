import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  image: string;
  title: string;
  link: string;
};

export default function ProjectCard({ image, title, link }: ProjectCardProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-lg shadow-md duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link href={link} target="_blank" className="block h-full w-full">
        <div className="relative aspect-video w-full">
          <Image
            className="overflow-hidden rounded-lg duration-300 ease-in hover:cursor-pointer group-hover:rounded-b-none"
            src={image}
            alt={title}
            width={1920}
            height={1080}
            sizes="100vw"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/70 opacity-0 duration-300 group-hover:opacity-100">
          <h3 className="text-center text-2xl font-semibold text-white">
            {title}
          </h3>
          <FaExternalLinkAlt className="text-3xl text-white" />
        </div>
      </Link>
    </div>
  );
}
