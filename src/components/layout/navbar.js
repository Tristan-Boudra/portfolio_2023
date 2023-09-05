import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="font-poppins bg-[#161616]">
        <div className="flex flex-row justify-between items-center py-2 max-w-screen-lg mx-auto">
          <ul className="flex flex-row gap-8 text-sm font-semibold text-slate-600">
            <li>
              <Link to="/" className="txtNavbar">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="txtNavbar">
                A propos
              </Link>
            </li>
            <li>
              <Link to="/project" className="txtNavbar">
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="txtNavbar">
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
