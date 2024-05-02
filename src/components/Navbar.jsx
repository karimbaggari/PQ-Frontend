import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div class="bg-transparent ">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header class="flex items-center justify-between md:py-8">

          <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>

            Flowrift
          </a>
          <nav class="hidden gap-12 lg:flex">
            <Link to="/" class="text-lg font-semibold text-indigo-500">Home</Link>
            <Link to="/startups" class="text-lg font-semibold text-[#f5faff] transition duration-100 hover:text-indigo-500 active:text-indigo-700">Startup</Link>
            <Link to="/enterprises" class="text-lg font-semibold text-[#f5faff] transition duration-100 hover:text-indigo-500 active:text-indigo-700">Entreprise</Link>
            <Link to="/contact" class="text-lg font-semibold text-[#f5faff] transition duration-100 hover:text-indigo-500 active:text-indigo-700">Contact</Link>
          </nav>
          <a href="#" class="hidden rounded-lg bg-tertiary px-8 py-3 text-center text-sm font-semibold text-[#f5faff] outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 hover:text-white focus-visible:ring active:text-tertiary md:text-base lg:inline-block">Book Free Call</a>

          <button type="button" class="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-semibold text-[#f5faff] ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:tertiary md:text-base lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>

            Menu
          </button>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
