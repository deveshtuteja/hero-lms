import Announcements from "./Announcements";
import AttendanceSummary from "./AttendanceSummary";
import Calendar from "./Calendar";
import Head from "./head";
import Helpdesk from "./Helpdesk";
import LeaveForm from "./LeaveForm";
import Timesheet from "./Timesheet";

const Body = () => {
  return (
    <>
      <Head />
      <div>
        <AttendanceSummary />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <Calendar />
        </div>
        <div className="col-span-1 flex flex-col gap-1">
          <Announcements />
          <LeaveForm className="flex-grow" />
        </div>
      </div>
    </>
  );
};

export default Body;
