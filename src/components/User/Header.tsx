import { SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white h-16 w-full flex px-6 items-center justify-between">
      <div>
        <h4 className="text-xs text-gray-300">Welcome Back !</h4>
        <h2 className="text-2xl text-black font-semibold ">Arindam Roy</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex border items-center rounded-lg space-x-2 text-sm text-gray-600 px-4 py-2 ">
          <SearchIcon />
          <input
            className="focus:outline-none "
            placeholder="search anything..."
          />
        </div>
        <div>
          <img
            src="https://i.pravatar.cc/150?img=4"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
