import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const events = [
  {
    title: "Meeting",
    start: "2024-08-28T10:00:00",
    end: "2024-08-28T10:00:00",
  },
  {
    title: "ABSENT",
    date: "2024-08-16",
    extendedProps: {
      type: "Abs",
    },
  },
  { title: "LEAVE APPLIED", date: "2024-08-30" },
  {
    title: "PUNCH IN ISSUE",
    date: "2024-08-01",
    extendedProps: {
      type: "punch-issue",
    },
  },
  {
    title: "Meeting",
    start: "2024-08-28T12:00:00",
    end: "2024-08-28T13:00:00",
  },
];

const Calendar = () => {
  return (
    <div className="w-[70%] p-4 border border-black m-2 shadow-lg font-bold">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: "short",
        }}
        height={"400px"}
      />
    </div>
  );
};

export default Calendar;

// Custom render function
function renderEventContent(eventInfo) {
  const issue =
    eventInfo.event.extendedProps.type === "Abs" ||
    eventInfo.event.extendedProps.type === "punch-issue";

  return (
    <div
      className="p-1"
      style={{
        backgroundColor: issue ? "red" : "transparent",
        color: issue ? "white" : "black",
      }}
    >
      <b className="p-1">{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
