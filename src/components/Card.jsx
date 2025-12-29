import { ArrowDownToLine, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/app-details/${data?.id}`}>
      <div className="bg-white p-4 rounded-xl shadow-2xs transition-transform hover:-translate-y-1.5">
        <div className="border border-gray-400 rounded overflow-hidden">
          <img className="w-full object-cover" src={data.url} alt="app_image" />
        </div>
        <div>
          <h1 className="mt-2 text-lg md:text-xl font-semibold text-neutral-800">
            {data?.name}
          </h1>
          <div className="flex justify-between items-center mt-3">
            <button className="flex gap-1 items-center px-2.5 py-1.5 bg-neutral-100 rounded">
              <ArrowDownToLine className="size-4 stroke-green-500" />
              <span className="text-sm text-green-500 font-medium">
                {data?.downloads}
              </span>
            </button>
            <button className="flex gap-1 items-center px-2.5 py-1.5 bg-neutral-100 rounded">
              <Star className="size-4 stroke-amber-500 fill-amber-500" />
              <span className="text-sm text-amber-500 font-medium">
                {data?.rating}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
