import { Search } from "lucide-react";
import Card from "../components/Card";
import AppContext from "../ContextProvider";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";

const Apps = () => {
  const { appsData } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const searchedResult = appsData.filter((data) =>
    data.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  //set loading state
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  //debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400); // 500ms debounce time

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="px-4">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-350 w-full mx-auto my-24">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-800">
              Our All Applications
            </h1>
            <p className="text-neutral-600 text-sm md:text-base  mt-3">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-6 md:flex-row justify-between items-center mt-16">
              <h1 className="text-xl font-semibold text-neutral-800">
                {`(${searchedResult.length}) Apps Found`}
              </h1>
              <div className="relative bg-white rounded-md shadow-2xs">
                <Search className="size-5 absolute top-1/2 left-2 translate-y-[-50%] stroke-neutral-500" />
                <input
                  className="border border-gray-300 px-4 pl-10 py-1.5 w-xs rounded-md outline-none text-base text-neutral-700"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search app"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
              {searchedResult.map((data) => {
                return <Card key={data?.id} data={data} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
