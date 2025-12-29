import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return <div>{isLoading ? <Loader /> : <HeroSection />}</div>;
};

export default Home;
