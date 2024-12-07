import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "About us.",
    imgSrc: "/images/aboutus/a.jpg",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "Learn more",
  },
  {
    heading: "Our vision.",
    imgSrc: "/images/aboutus/b.jpg",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "Learn more",
  },
  {
    heading: "Our Works.",
    imgSrc: "/images/aboutus/a.jpg",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "Learn more",
  },
];

const Aboutus = () => {
  return (
    <section id="about">
      <div className="mx-auto mt-8 max-w-7xl px-4 py-12 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />

        <h4 className="text-center text-4xl text-blue font-bold">
          Know more about us.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 lg:gap-x-32">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="hover:bg-navyblue bg-white rounded-3xl mt-4 pt-10 pl-8 pb-10 pr-6 shadow-xl group"
            >
              <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-gray-700">
                {item.heading}
              </h4>
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={450}
                height={400}
                className="w-[300px] h-auto mb-5 rounded-lg"
              />
              <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-5">
                {item.paragraph}
              </h4>
              <Link
                href="#"
                className="text-lg font-semibold group-hover:text-blue-600 text-blue hover-underline"
              >
                {item.link}
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
