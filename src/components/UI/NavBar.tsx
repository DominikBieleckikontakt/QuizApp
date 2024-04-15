import { Link, NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

import { useTheme } from "../theme-provider";
import { navLinks } from "../../myconstants/index";
import { Button } from "./button";

const NavBar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="w-full py-10 px-10 flex justify-between items-center">
      <div>
        <Link to="/">
          <h1 className="text-2xl text-primary font-semibold">
            Quiz<span className="italic font-light">App</span>
          </h1>
        </Link>
      </div>
      <div className="text-xl flex items-center">
        {navLinks.map((item, index) => (
          <NavLink
            to={`${item.path}`}
            key={index}
            className={`aria-[current=page]:text-primary md:mx-5 hover:text-foreground/60 aria-[current=page]:hover:text-primary/60`}
          >
            {item.title}
          </NavLink>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme !== "dark" ? "dark" : "light")}
          className="md:mx-5 ml-5"
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
