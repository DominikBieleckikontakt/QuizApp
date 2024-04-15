import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
