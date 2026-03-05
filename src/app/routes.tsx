import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/landing-page";
import { LoginPage } from "./components/login-page";
import { DashboardLayout } from "./components/dashboard-layout";
import { DashboardOverview } from "./components/dashboard-overview";
import { ApplyService } from "./components/apply-service";
import { MyRequests } from "./components/my-requests";
import { History } from "./components/history";
import { ContactSupport } from "./components/contact-support";
import { Profile } from "./components/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardOverview },
      { path: "apply", Component: ApplyService },
      { path: "requests", Component: MyRequests },
      { path: "history", Component: History },
      { path: "support", Component: ContactSupport },
      { path: "profile", Component: Profile },
    ],
  },
]);
