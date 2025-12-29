import { ArrowDownToLine, Star } from "lucide-react";

const DownloadedCard = ({ app, handelUninstall }) => {
  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 max-h-40 p-4 rounded-xl shadow-2xs transition-transform hover:-translate-y-1">
      <div className="flex gap-4 items-center w-full md:w-auto">
        <div className="border w-fit border-gray-400 rounded overflow-hidden">
          <img className="h-16 md:h-20" src={app.url} alt="app_image" />
        </div>
        <div className="flex-1">
          <h1 className="px-3 md:px-3 text-lg md:text-xl font-semibold text-neutral-800">
            {app.name}
          </h1>
          <div className="flex flex-wrap gap-2 items-center mt-3">
            <button className="flex gap-1 items-center px-2.5 py-1.5 rounded">
              <ArrowDownToLine className="size-4 stroke-green-500" />
              <span className="text-sm text-green-500 font-medium">
                {app.downloads}
              </span>
            </button>
            <button className="flex gap-1 items-center px-2.5 py-1.5  rounded">
              <Star className="size-4 stroke-amber-500 fill-amber-500" />
              <span className="text-sm text-amber-500 font-medium">
                {app.rating}
              </span>
            </button>
            <button className="flex gap-1 items-center px-2.5 py-1.5  rounded">
              <span className="text-sm text-neutral-500 font-medium">
                {app.size}
              </span>
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handelUninstall}
        className="bg-red-100 px-4 py-1.5 cursor-pointer rounded-md font-medium text-red-600 w-full md:w-auto md:ml-4 mt-2 md:mt-0"
      >
        Uninstall
      </button>
    </div>
  );
};

export default DownloadedCard;
