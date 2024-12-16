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
      <div className="text-white mx-auto mt-8 max-w-4xl px-4 py-12 lg:px-10 bg-lightgrey rounded-3xl relative">
        <h4 className="text-center text-4xl text-black font-bold">About Us</h4>
        <h4 className="text-center text-xl text-blue font-bold">
          Know more about us.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${item.imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="relative flex items-end h-[300px]  inset-0 group-hover:opacity-70 transition-opacity duration-500 rounded-xl shadow-xl overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full bg-black h-full  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-full left-0 w-full p-4  text-white bg-navyblue bg-opacity-80 transform group-hover:translate-y-[-100%] transition-transform duration-500">
                <h4 className="text-2xl font-semibold mb-3">{item.heading}</h4>
                <p className="text-base mb-4">{item.paragraph}</p>
                <Link
                  href="#"
                  className="flex items-center text-lg font-semibold hover:underline"
                >
                  {item.link}
                  <ChevronRightIcon width={20} height={20} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
