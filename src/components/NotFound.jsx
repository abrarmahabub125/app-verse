import NotFoundImg from "../assets/error-404.png";
const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <img src={NotFoundImg} alt="404" />
    </div>
  );
};

export default NotFound;
