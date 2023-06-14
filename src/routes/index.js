import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/homeLayout";
import PistolWeekPage from "../pages/pistol/pistolweekPage";
import SignUpPage from "../pages/signup/signupPage";
import LoginPage from "../pages/logIn/loginPage";
import ShopPage from "../pages/shop/shopPage";
import EsportsPage from "../pages/esports/esportsLayout";
import DownloadPage from "../pages/download/downloadLayout";
import ProfilePage from "../pages/profile/profilePage";
import WavelitePage from "../pages/wavelite/wavelitePage";
import AccountPage from "../pages/Account/accountPage";
import RankingsPage from "../pages/Rankings/RankingsPage";
import ModesPage from "../pages/modes/modesPage";
import WeaponsPage from "../pages/weapons/weaponsPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/modes",
    element: <ModesPage />,
  },
  {
    path: "/weapons",
    element: <WeaponsPage/>
  },
  {
    path: "/Ranking",
    element: <RankingsPage />,
  },
  {
    path: "/Esports",
    element: <EsportsPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },

  {
    path: "/DOWNLOAD",
    element: <DownloadPage />,
  },
  {
    path: "/pistolWeek",
    element: <PistolWeekPage />,
  },
  {
    path: "/Wavelite",
    element: <WavelitePage />,
  },
  {
    path: "/Profile",
    element: <ProfilePage />,
  },
  {
    path: "/MyAccount",
    element: <AccountPage />,
  },
]);
