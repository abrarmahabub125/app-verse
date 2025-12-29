import { useContext, useEffect } from "react";
import Download from "../assets/icon-downloads.png";
import Ratings from "../assets/icon-ratings.png";
import Reviews from "../assets/icon-review.png";
import Chart from "../components/Chart";
import AppContext from "../ContextProvider";
import { useParams } from "react-router-dom";

const AppDetails = () => {
  const { appsData, setAppsData } = useContext(AppContext);
  const { id } = useParams();
  const selectedApps = appsData.find((elem) => elem.id === parseInt(id));

  //handel installation
  const handelDownload = () => {
    setAppsData((prev) =>
      prev.map((app) =>
        app.id === selectedApps.id ? { ...app, isDownload: true } : app
      )
    );
  };

  useEffect(() => {
    window.localStorage.setItem("installed", JSON.stringify(appsData));
  }, [appsData]);

  return (
    <div>
      <div className="max-w-350 w-full px-4 mx-auto my-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            className="size-60 md:size-80 object-cover rounded-2xl"
            src={selectedApps.url}
            alt="app-image"
          />
          <div className="px-4">
            <div className="border-b border-gray-400 pb-6 md:pb-10">
              <h1 className="text-2xl md:text-3xl font-semibold text-neutral-800">
                {selectedApps.name}
              </h1>
              <p className="text-neutral-600 text-sm md:text-base mt-2 md:mt-4">
                Developed by{" "}
                <span className="text-indigo-600">WellBeing Co.</span>
              </p>
            </div>
            <div className="flex gap-x-10 md:gap-x-14 items-center mt-12">
              <div className="flex gap-2 items-center">
                <img
                  src={Download}
                  className="size-6 md:size-8"
                  alt="download-icon"
                />
                <span className="text-2xl md:text-4xl text-neutral-800 font-bold">
                  {selectedApps.downloads}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src={Ratings}
                  className="size-6 md:size-8"
                  alt="ratings-icon"
                />
                <span className="text-2xl md:text-4xl text-neutral-800 font-bold">
                  {selectedApps.rating}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src={Reviews}
                  className="size-6 md:size-8"
                  alt="review-icon"
                />
                <span className="text-2xl md:text-4xl text-neutral-800 font-bold">
                  {selectedApps.reviews[0]}
                </span>
              </div>
            </div>

            <div className="mt-12">
              <button
                onClick={handelDownload}
                className={
                  selectedApps.isDownload
                    ? "px-3 py-1.5 md:px-4 md:py-2 bg-gray-500 transition-all outline-none hover:bg-green-700 active:scale-95 text-white  text-sm md:text-base cursor-pointer font-semibold rounded-md shadow-2xs"
                    : "px-3 py-1.5 md:px-4 md:py-2 bg-green-600 transition-all outline-none hover:bg-green-700 active:scale-95 text-white text-sm md:text-base cursor-pointer font-semibold rounded-md shadow-2xs"
                }
              >
                {selectedApps.isDownload
                  ? `Installed`
                  : `Install Now (${selectedApps.size})`}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full min-h-96 my-18 flex justify-center">
          <Chart reviews={selectedApps.reviews} />
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-medium text-neutral-800">Description:</h3>
          <p className="text-sm md:text-base text-gray-500 mt-4">
            {selectedApps.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
