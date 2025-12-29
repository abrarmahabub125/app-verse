import { useContext, useState, useMemo } from "react";
import DownloadedCard from "../components/DownloadedCard";
import AppContext from "../ContextProvider";

const Installation = () => {
  const { appsData, setAppsData } = useContext(AppContext);
  const [sortType, setSortType] = useState("");

  const filteredData = appsData.filter((data) => data.isDownload === true);

  const sortedData = useMemo(() => {
    const data = [...filteredData];

    if (sortType === "asc") {
      data.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
    } else if (sortType === "desc") {
      data.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    }

    return data;
  }, [filteredData, sortType]);

  const handleUninstall = (id) => {
    setAppsData((prev) => {
      const next = prev.map((app) =>
        app.id === id ? { ...app, isDownload: false } : app
      );
      localStorage.setItem("installed", JSON.stringify(next));
      return next;
    });
  };

  const handleChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className="px-4">
      <div className="max-w-350 w-full mx-auto my-24">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-800">
            Your Installed Apps
          </h1>
          <p className="text-neutral-600 text-sm md:text-base mt-3">
            Explore All Apps on the Market developed by us.
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center mt-16">
            <h1 className="text-lg md:text-xl font-semibold text-neutral-800">
              {`(${sortedData.length}) Apps Found`}
            </h1>
            <select
              onChange={handleChange}
              className="select w-32 md:w-48 outline-none px-3 md:px-4 text-sm font-medium text-neutral-600"
            >
              <option value="">{"Sort by Size"}</option>
              <option value="asc">{"High to Low"}</option>
              <option value="desc">{"Low to High"}</option>
            </select>
          </div>

          <div className="grid gap-4 mt-12">
            {sortedData.map((app) => (
              <DownloadedCard
                key={app.id}
                app={app}
                handelUninstall={() => handleUninstall(app.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
