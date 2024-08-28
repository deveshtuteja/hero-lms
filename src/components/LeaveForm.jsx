import { useState } from "react";

const LeaveForm = () => {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ leaveType, startDate, endDate, startTime, endTime, reason });
  };

  const isShortOrHalfDayLeave =
    leaveType === "short" || leaveType === "half-day";

  return (
    <div className="m-2 px-4 py-3 border rounded-md shadow-lg border-black">
      <h1 className="text-lg font-bold mb-4">Apply for Leave</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Leave Type</label>
          <select
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="casual">Casual Leave</option>
            <option value="short">Short Leave</option>
            <option value="half-day">Half Day Leave</option>
            <option value="earned">Earned Leave</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {isShortOrHalfDayLeave && (
          <div>
            <label className="block text-sm font-medium">Start Time</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium py-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded-md"
            disabled={leaveType === "half-day"}
          />
        </div>

        {isShortOrHalfDayLeave && (
          <div>
            <label className="block text-sm font-medium">End Time</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium">Reason</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={isShortOrHalfDayLeave ? "1" : "3"}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeaveForm;
