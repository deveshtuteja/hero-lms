import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AttendanceSummary = () => {
  const [selectedMonth, setSelectedMonth] = useState("September 2024");
  const navigate = useNavigate();

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleAttendance = () => {
    navigate("/attendance");
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg flex justify-between h-48 gap-4 dark:bg-black dark:text-white">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-lg font-semibold p-4">Attendance Summary</h2>
        <select
          className="border border-gray-300 rounded-lg p-2 text-gray-700"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option>September 2024</option>
          <option>August 2024</option>
          <option>July 2024</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Attendance Summary Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50 rounded-lg mb-6">
        <div className="flex flex-wrap md:flex-nowrap justify-around items-center w-full md:w-auto">
          <div className="text-center p-2">
            <div className="w-10 h-10 bg-green-100 text-green-700 flex items-center justify-center rounded-full mb-1">
              01
            </div>
            <div className="text-sm text-gray-600">Present</div>
          </div>
          <div className="text-center p-2">
            <div className="w-10 h-10 bg-red-100 text-red-700 flex items-center justify-center rounded-full mb-1">
              02
            </div>
            <div className="text-sm text-gray-600">Absent</div>
          </div>
          <div className="text-center p-2">
            <div className="w-10 h-10 bg-purple-100 text-purple-700 flex items-center justify-center rounded-full mb-1">
              04
            </div>
            <div className="text-sm text-gray-600">Leave</div>
          </div>
          <div className="text-center p-2">
            <div className="w-10 h-10 bg-yellow-100 text-yellow-700 flex items-center justify-center rounded-full mb-1">
              04
            </div>
            <div className="text-sm text-gray-600">Holidays</div>
          </div>
        </div>
      </div>

      {/* Leave Balances Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center bg-white p-4 rounded-lg shadow">
          <div className="flex justify-center items-center">
            <div className="relative w-20 h-20">
              <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="text-red"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 12.364 28.756"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="60, 100"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                3 days
              </span>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600">Sick Leave</div>
        </div>

        <div className="text-center bg-white p-4 rounded-lg shadow">
          <div className="flex justify-center items-center">
            <div className="relative w-20 h-20">
              <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="text-green-600"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 7 24.842"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="70, 100"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                7 days
              </span>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600">Privileged Leave</div>
        </div>

        <div className="text-center bg-white p-4 rounded-lg shadow">
          <div className="flex justify-center items-center">
            <div className="relative w-20 h-20">
              <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="text-yellow-600"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 2 29.747"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="30, 100"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                1 day
              </span>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600">Floater Holiday</div>
        </div>

        <div className="text-center bg-white p-4 rounded-lg shadow">
          <div className="flex justify-center items-center">
            <div className="relative w-20 h-20">
              <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="text-blue-600"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 4.727 28.602"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="40, 100"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                2 days
              </span>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600">Casual Leave</div>
        </div>
      </div>

      {/* Punch Time and Details */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p>
          Punch In Time:{" "}
          <span className="font-semibold text-gray-800">10 AM</span>
        </p>
        <p>
          Total Hours:{" "}
          <span className="font-semibold text-gray-800">5 hours</span>
        </p>
        <p>
          Reporting Manager:{" "}
          <span className="font-semibold text-gray-800">Anil Kumar Singh</span>
          <button
            type="submit"
            className="bg-red-600 text-white py-1 rounded-md hover:bg-red-800 w-full font-semibold"
            onClick={() => handleAttendance()}
          >
            Attendance Correction
          </button>
        </p>
      </div>
    </div>
  );
};

export default AttendanceSummary;
