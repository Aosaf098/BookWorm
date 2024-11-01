const Navbar = () => {
  return (
    <>
      <div className="flex justify-between lg:justify-around items-center w-full fixed px-8 lg:px-2 py-6 top-0 left-0 z-50 shadow-lg">
        <div className="flex items-center gap-2 lg:gap-4">
          <img
            className="w-10 lg:w-12"
            src="https://img.icons8.com/?size=48&id=80454&format=png"
            alt="Bookworm"
          />
          <h1 className="font-sora font-bold lg:text-3xl text-xl">BookWorm</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-14 font-sora font-semibold text-slate text-lg">
            <li className="text-neutral-700 hover:text-neutral-500">
              <a href="#">Home</a>
            </li>
            <li className="text-neutral-700 hover:text-neutral-500">
              <a href="#">List</a>
            </li>
            <li className="text-neutral-700 hover:text-neutral-500">
              <a href="#">Pages to Read</a>
            </li>
          </ul>
        </div>
        <div className="space-x-10 hidden lg:block">
          <button className="bg-prim px-4 py-2 rounded-md font-bold font-sora hover:bg-secon">
            Sign In
          </button>
          <button className="bg-third px-4 py-2 rounded-md font-bold font-sora hover:bg-secon">
            Sign Up
          </button>
        </div>
        <div className="lg:hidden">
          {/* <img src="https://img.icons8.com/?size=24&id=84026&format=png" alt="" /> */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-b-box z-[1] -left-[100px] mt-7 mr-96 w-44 px-2 shadow space-y-4 font-sora font-semibold text-slate text-lg"
            >
              <li className="text-neutral-700 hover:text-neutral-500">
                <a>Home</a>
              </li>
              <li className="text-neutral-700 hover:text-neutral-500">
                <a>List</a>
              </li>
              <li className="text-neutral-700 hover:text-neutral-500">
                <a>Pages to Read</a>
              </li>
              <li className="text-center">
                <button className="bg-prim px-2 py-2 rounded-md font-bold font-sora hover:bg-secon text-center">
                Sign In
                </button>
              </li>
              <li>
              <button className="bg-third px-2 py-2 rounded-md font-bold font-sora hover:bg-secon text-center">
                Sign Up
              </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
