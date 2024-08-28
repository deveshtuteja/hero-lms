import Announcements from "./Announcements";
import AttendanceSummary from "./AttendanceSummary";
import Calendar from "./Calendar";
import Helpdesk from "./Helpdesk";
import Timesheet from "./Timesheet";

const Body = () => {
  return (
    <div>
      <div>
        <AttendanceSummary />
      </div>
      <div className="flex gap-4 w-full">
        {" "}
        <Calendar />
        <Announcements />
      </div>
      <div className="flex gap-4">
        <Timesheet />
        <Helpdesk />
      </div>
    </div>
  );
};

export default Body;
