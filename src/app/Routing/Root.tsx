import { Outlet } from "react-router-dom";
import { HomePage } from "../../pages/Home";
import { Header } from "../../features/header/ui/organisms/Header";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
