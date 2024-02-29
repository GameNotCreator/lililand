import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar bg-cyan-700 opacity-100 text-neutral-content top-0 fixed z-20 pb-2 items-center justify-center">
      <div className="navbar-center lg:flex hidden ">
        <Link href={"#Attractions"}>
          <p className="btn btn-ghost">Attractions</p>
        </Link>
        <Link href={"#Formules"}>
          <p className="btn btn-ghost">Formules</p>
        </Link>
        <Link href={'/'} > 
        <Image
          width={200}
          height={200}
          href={"#Home"}
          src={"/logofooter.png"}
          alt="Logo"
        />
        </Link>
        <Link href={"#Partenaires"}>
          <p className="btn btn-ghost">Partenaires</p>
        </Link>
        <Link href={"#Contact"}>
          <p className="btn btn-ghost">Contact</p>
        </Link>
      </div>

      <div className="navbar bg-cyan-700 opacity-100 text-neutral-content top-0 fixed z-20 pb-2 lg:hidden items-center justify-center fixed w-full z-20 top-0 p-4">
      <div className="navbar-start">
                    <button className="btn btn-ghost btn-circle">
                      <h4 className="text-xl">
                      </h4>                 
                    </button>
                </div>
        <div className="navbar-center">
          <Link
            href="/"
            className="btn btn-ghost mb-8"
          >
                      <Image
            width={120}
            height={120}
            href={"#Home"}
            src={"/logofooter.png"}
            alt="Logo"
          />
          </Link>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <div className="dropdown  dropdown-end m-0">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link className="btn btn-ghost" href={"#Home"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn-ghost" href={"#Attractions"}>
                      Attractions
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn-ghost" href={"#Partenaires"}>
                      Partenaires
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn-ghost" href={"#Contact"}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
