import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AttendanceSummary from "./components/AttendanceSummary";
import Head from "./components/head";
import Timesheet from "./components/Timesheet";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
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
