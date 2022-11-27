import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

const MasterLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};

export default MasterLayout;
