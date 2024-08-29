import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AttendanceSummary from "./components/AttendanceSummary";
import Head from "./components/head";
import Timesheet from "./components/Timesheet";
import Helpdesk from "./components/Helpdesk";
import LeaveManagementDashboard from "./components/LeaveManagementDashboard";
import SupportQueryForm from "./components/SupportQueryForm";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/profile",
      element: (
        <>
          <Head />
          <Profile />
        </>
      ),
    },
    {
      path: "/admin",
      element: (
        <>
          <Head />
          <LeaveManagementDashboard />
        </>
      ),
    },
    {
      path: "/help",
      element: (
        <>
          <Head />
          <Helpdesk />
          <SupportQueryForm />
        </>
      ),
    },
    {
      path: "/attendance",
      element: (
        <>
          <Head /> <AttendanceSummary /> <Timesheet />
        </>
      ),
    },
  ]);
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
