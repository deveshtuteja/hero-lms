import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AttendanceSummary from "./components/AttendanceSummary";
import Head from "./components/head";
import Timesheet from "./components/Timesheet";
import Helpdesk from "./components/Helpdesk";
import LeaveForm from "./components/LeaveForm";
import LeaveManagementDashboard from "./components/LeaveManagementDashboard";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
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
          <LeaveForm />
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
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
