import Image from "next/image";

type CertificateCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function CertificateCard({
  image,
  title,
  description,
}: CertificateCardProps) {
  return (
    <div className="w-full rounded-lg p-5 shadow-float duration-300 ease-in  xl:p-6">
      <div className="flex h-full flex-col gap-x-4 gap-y-8">
        <div className="flex h-full flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Image
              className="rounded-lg"
              src={image}
              alt={title}
              height={260}
              width={364}
              layout="responsive"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-cinza-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
