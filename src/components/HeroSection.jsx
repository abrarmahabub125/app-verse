import { Link } from "react-router-dom";
import HeroImg from "../assets/hero-3O-VHB4o.png";
import Card from "./Card";
import AppContext from "../ContextProvider";
import { useContext } from "react";

const HeroSection = () => {
  const { appsData } = useContext(AppContext);

  return (
    <div className=" w-full">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-10 items-center pt-24 px-4">
          <h1 className="text-center text-4xl md:text-5xl lg:text-7xl font-bold text-shadow-neutral-700">
            We Build <br />{" "}
            <span className="bg-linear-to-l from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-center mt-1 lg:mt-3 text-sm md:text-base text-neutral-600">
            At AppVerse, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="mt-4 mb-6 flex flex-col md:flex-row gap-8">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              className="flex items-center justify-center gap-2 border border-neutral-200 w-36 py-1.5 rounded-md"
            >
              <img
                className="h-5"
                src="https://app-verse-byakio.netlify.app/assets/play-store-ByeeY7lD.png"
                alt="google_play"
              />
              <span className="text-sm font-medium text-neutral-600">
                Google Play
              </span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="flex items-center justify-center gap-2 border border-neutral-200 w-36 py-1.5 rounded-md"
            >
              <img
                className="h-5"
                src="https://app-verse-byakio.netlify.app/assets/app-store-BmfVKZeC.png"
                alt="google_play"
              />
              <span className="text-sm font-medium text-neutral-600">
                App Store
              </span>
            </a>
          </div>
          <img src={HeroImg} alt="hero_image" />
        </div>
      </div>
      <div className="w-full py-16 px-4 bg-linear-to-l from-violet-500 to-indigo-500">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-center text-2xl  md:text-3xl font-semibold">
            Trusted by Millions, Built for You
          </h1>

          <div className="flex flex-col lg:flex-row gap-24 mt-12">
            <div className="text-center">
              <p className=" text-neutral-300">Total Reviews</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold lg:font-extrabold text-white my-4">
                906K
              </h1>
              <p className=" text-neutral-300">46% more than last month</p>
            </div>
            <div className="text-center">
              <p className=" text-neutral-300">Total Downloads</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold lg:font-extrabold text-white my-4">
                29.6M
              </h1>
              <p className=" text-neutral-300">21% more than last month</p>
            </div>
            <div className="text-center">
              <p className=" text-neutral-300">Active Apps</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold lg:font-extrabold text-white my-4">
                132+
              </h1>
              <p className=" text-neutral-300">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending apps section  */}
      <div className="my-12 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-800">Trending Apps</h1>
          <p className="text-neutral-600 mt-3">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="mt-12 p-4 mx-auto max-w-350 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:grid-rows-2">
          {appsData.map((data, idx) => {
            if (idx < 8) {
              return <Card key={data.id} data={data} />;
            }
          })}
        </div>
        <Link
          to="/apps"
          className="text-white px-4 py-2 mt-14 text-sm font-medium rounded bg-linear-to-l from-violet-500 to-indigo-500"
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
