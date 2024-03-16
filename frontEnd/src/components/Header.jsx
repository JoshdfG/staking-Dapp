import MaxWidth from "./MaxWidth";

const Header = () => {
  return (
    <div className="w-full bg-purple-600/20 px-4 py-5">
      <MaxWidth className={`w-full flex justify-between items-center`}>
        <div>
          <p className="mt-1 text-2xl font-bold">
            Z_ <span className=" text-[#ff5900]">Breed</span>
          </p>
        </div>

        <w3m-button />
      </MaxWidth>
    </div>
  );
};

export default Header;
