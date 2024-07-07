"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdLogout } from "react-icons/md";

const Nav = () => {
  const pathName = usePathname();
  const session = useSession();
  // console.log(session);

  return (
    <div className="bg-base-200">
      <nav className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    className={`${
                      pathName === link.path && "text-primary"
                    } font-semibold hover:text-primary duration-300`}
                    key={link.path}
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            className="font-medium text-sm md:text-base md:font-semibold"
            href="/"
          >
            Company logo/Name
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1">
            <div className="flex items-center gap-3">
              {navLinks.map((link) => (
                <Link
                  className={`${
                    pathName === link.path && "text-primary"
                  } font-semibold hover:text-primary duration-300`}
                  key={link.path}
                  href={link.path}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="navbar-end space-x-2 lg:space-x-4">
          {session.status !== "loading" ? (
            <>
              {session.status === "authenticated" ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={session?.data?.user?.image}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 space-y-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">
                        {session?.data?.user?.name}
                        <span className="badge badge-secondary">
                          {session?.data?.user?.role}
                        </span>
                      </a>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <a
                        onClick={() => signOut()}
                        className="flex justify-between text-primary"
                      >
                        Logout <MdLogout />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="space-x-3">
                  <Link
                    href="/register"
                    className="btn btn-xs md:btn-sm btn-outline rounded-sm btn-secondary"
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="btn btn-xs md:btn-sm btn-outline rounded-sm btn-primary"
                  >
                    Login
                  </Link>
                </div>
              )}
            </>
          ) : (
            <p>loading...</p>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "About",
    path: "/about",
  },
];
