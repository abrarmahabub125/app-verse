const Footer = () => {
  return (
    <footer className="bg-indigo-950">
      <div className="max-w-350 mx-auto  w-full grid gap-8 justify-center items-center grid-cols-1 md:grid-cols-4 grid-rows-1 py-12 px-4">
        <div>
          <img
            className="h-18 md:h-24"
            src="https://app-verse-byakio.netlify.app/assets/appverse-logo-white-b49ISLo3.png"
            alt="logo"
          />
          <h1 className="text-white text-3xl font-semibold">AppVerse</h1>
          <p className="text-white text-sm mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          <h3 className="text-neutral-400 font-semibold text-base uppercase">
            Services
          </h3>
          <ul className="flex flex-col gap-1 mt-4">
            <li>
              <a className="text-white text-sm hover:underline" href="">
                Mobile App Development
              </a>
            </li>
            <li>
              <a className="text-white text-sm hover:underline" href="">
                Web App Development
              </a>
            </li>
            <li>
              <a className="text-white text-sm hover:underline" href="">
                UI/UX Design & Prototyping
              </a>
            </li>
            <li>
              <a className="text-white text-sm hover:underline" href="">
                App Maintenance & Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-neutral-400 font-semibold text-base uppercase">
            Company
          </h3>
          <ul className="flex flex-col gap-1 mt-4">
            <li>
              <a className="text-white text-sm hover:underline" href="">
                About us
              </a>
            </li>
            <li>
              <a className="text-white text-sm hover:underline" href="">
                Contact
              </a>
            </li>
            <li>
              <a className="text-white text-sm hover:underline" href="">
                Jobs
              </a>
            </li>
            <li>
              <a className="text-white text-sm hover:underline" href="">
                Press kit
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-neutral-400 font-semibold text-base uppercase">
            Legal
          </h3>
          <ul className="flex flex-col gap-1 mt-4">
            <li>
              <a className="text-white text-sm hover:underline" href="">
                Terms of use
              </a>
            </li>
            <li>
              <a className="text-white text-sm hover:underline" href="">
                Privacy policy
              </a>
            </li>
            <li>
              <a className="text-white text-sm hover:underline" href="">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
