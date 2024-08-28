import React, { useState } from "react";

const Timesheet = () => {
  const [timesheetData, setTimesheetData] = useState([
    {
      date: "23 Aug 2024",
      startTime: "06:17 AM",
      finishTime: "--",
      workTime: "4:35",
      exceptions: "None",
      status: "Approved",
      details: [],
    },
    {
      date: "24 Aug 2024",
      startTime: "06:17 AM",
      finishTime: "--",
      workTime: "4:35",
      exceptions: "None",
      status: "Tracking",
      details: [],
    },
    {
      date: "22 Aug 2024",
      startTime: "09:30 AM",
      finishTime: "06:25 PM",
      workTime: "10:05",
      exceptions: "Overtime, Onsite",
      status: "Pending",
      details: [
        {
          action: "Timein",
          time: "04:30 AM",
          location: "Baghdad Office",
          workTime: "6:20",
        },
        {
          action: "Timeout",
          time: "10:50 AM",
          location: "Baghdad Office",
          workTime: "6:20",
        },
        {
          action: "Timein",
          time: "11:15 AM",
          location: "Abu Ghuraib",
          workTime: "3:35",
        },
        {
          action: "Timeout",
          time: "03:25 PM",
          location: "Al-falluja",
          workTime: "3:35",
        },
      ],
    },
    {
      date: "25 Aug 2024",
      startTime: "06:17 AM",
      finishTime: "--",
      workTime: "4:35",
      exceptions: "None",
      status: "Tracking",
      details: [],
    },
    {
      date: "26 Aug 2024",
      startTime: "06:17 AM",
      finishTime: "--",
      workTime: "4:35",
      exceptions: "None",
      status: "Approved",
      details: [],
    },
    {
      date: "27 Aug 2024",
      startTime: "06:17 AM",
      finishTime: "--",
      workTime: "4:35",
      exceptions: "None",
      status: "Approved",
      details: [],
    },
    {
      date: "28 Aug 2024",
      startTime: "06:17 AM",
      finishTime: "--",
      workTime: "4:35",
      exceptions: "None",
      status: "Approved",
      details: [],
    },
  ]);

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [issue, setIssue] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!date || !issue) {
      setError("Please select a date and an issue.");
      return;
    }

    const updatedData = timesheetData.map((entry) =>
      entry.date === date
        ? {
            ...entry,
            status: "Pending",
            exceptions: issue,
          }
        : entry
    );

    setTimesheetData(updatedData);
    setDate("");
    setIssue("");
    setError("");
    alert("Correction request submitted successfully!");
  };

  const handleDetailsToggle = (index) => {
    const updatedData = [...timesheetData];
    updatedData[index].isDetailsVisible = !updatedData[index].isDetailsVisible;
    setTimesheetData(updatedData);
  };

  return (
    <div className="p-6">
      {/* Correction Request Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Apply for Attendance Correction
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Date:
              </label>
              <select
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a date</option>
                {timesheetData.map((entry, index) => (
                  <option key={index} value={entry.date}>
                    {entry.date}
                  </option>
                ))}
              </select>
            </div>

            {/* Issue Selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select the Issue:
              </label>
              <select
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an issue</option>
                <option value="Punch In didn't work">
                  Punch In didn't work
                </option>
                <option value="Punch Out didn't work">
                  Punch Out didn't work
                </option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600"
            >
              Submit Correction Request
            </button>
          </div>
        </form>
      </div>

      {/* Timesheet Table */}
      <h2 className="text-xl font-bold mb-4">Raymond's Timesheets</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Start Time</th>
              <th className="py-3 px-6 text-left">Finish Time</th>
              <th className="py-3 px-6 text-left">Work Time</th>
              <th className="py-3 px-6 text-left">Exceptions</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Details</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {timesheetData.map((entry, index) => (
              <React.Fragment key={index}>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {entry.date}
                  </td>
                  <td className="py-3 px-6 text-left">{entry.startTime}</td>
                  <td className="py-3 px-6 text-left">{entry.finishTime}</td>
                  <td className="py-3 px-6 text-left">{entry.workTime}</td>
                  <td className="py-3 px-6 text-left">{entry.exceptions}</td>
                  <td className="py-3 px-6 text-left">
                    <span
                      className={`py-1 px-3 rounded-full text-xs ${
                        entry.status === "Approved"
                          ? "bg-green-200 text-green-600"
                          : entry.status === "Pending"
                          ? "bg-orange-200 text-orange-600"
                          : "bg-red-200 text-red-600"
                      }`}
                    >
                      {entry.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <button
                      onClick={() => handleDetailsToggle(index)}
                      className="text-blue-500 hover:underline"
                    >
                      {entry.isDetailsVisible ? "Hide" : "Show"} Details
                    </button>
                  </td>
                </tr>
                {entry.isDetailsVisible && entry.details.length > 0 && (
                  <tr className="bg-gray-50">
                    <td colSpan="7" className="py-3 px-6">
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-gray-100 text-gray-600 uppercase text-xs leading-normal">
                            <th className="py-3 px-6 text-left">Action</th>
                            <th className="py-3 px-6 text-left">Time</th>
                            <th className="py-3 px-6 text-left">Location</th>
                            <th className="py-3 px-6 text-left">Work Time</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                          {entry.details.map((detail, i) => (
                            <tr
                              key={i}
                              className="border-b border-gray-200 hover:bg-gray-100"
                            >
                              <td className="py-3 px-6 text-left">
                                {detail.action}
                              </td>
                              <td className="py-3 px-6 text-left">
                                {detail.time}
                              </td>
                              <td className="py-3 px-6 text-left">
                                {detail.location}
                              </td>
                              <td className="py-3 px-6 text-left">
                                {detail.workTime}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timesheet;
