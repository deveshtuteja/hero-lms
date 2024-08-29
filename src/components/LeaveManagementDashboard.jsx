import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, List } from "lucide-react";

const LeaveRequestCard = ({ request, onApprove, onReject, viewMode }) => (
  <Card className="mb-4">
    <CardHeader>
      <div
        className={`flex ${
          viewMode === "list" ? "items-center" : "self-center"
        }`}
      >
        <img
          src={request.avatar}
          alt={request.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{request.name}</h3>
          <p className="text-sm text-gray-500">{request.position}</p>
        </div>
        {viewMode === "list" && (
          <div className="flex space-x-2">
            <button
              onClick={() => onReject(request.id)}
              className="px-4 py-2 bg-red-500 text-white rounded  dark:bg-red-700"
            >
              Reject
            </button>
            <button
              onClick={() => onApprove(request.id)}
              className="px-4 py-2 bg-green-500 text-white rounded  dark:bg-green-700"
            >
              Approve
            </button>
          </div>
        )}
      </div>
    </CardHeader>
    {viewMode === "grid" && (
      <CardContent>
        <p className="text-center">Start date: {request.startDate}</p>
        <p className="text-center">End date: {request.endDate}</p>
        <p className="text-center">Number of days: {request.days}</p>
        <p className="text-center">Leave type: {request.leaveType}</p>
        <div className="mt-4 flex justify-center space-x-2">
          <button
            onClick={() => onReject(request.id)}
            className="px-4 py-2 bg-red-500 text-white rounded dark:bg-red-700"
          >
            Reject
          </button>
          <button
            onClick={() => onApprove(request.id)}
            className="px-4 py-2 bg-green-500 text-white rounded dark:bg-green-700"
          >
            Approve
          </button>
        </div>
      </CardContent>
    )}
  </Card>
);

const TeamLeaveInfo = ({ teamLeaves }) => (
  <ul className="space-y-2">
    {teamLeaves.map((leave, index) => (
      <li key={index} className="flex justify-between items-center">
        <span>{leave.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {leave.startDate} - {leave.endDate}
        </span>
      </li>
    ))}
  </ul>
);

const LeaveManagementDashboard = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [activeTab, setActiveTab] = useState("pending");

  const leaveRequests = [
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      avatar: "https://cdn-icons-png.freepik.com/512/180/180650.png",
      startDate: "2024-09-01",
      endDate: "2024-09-03",
      days: 3,
      leaveType: "Vacation",
      status: "pending",
    },
    {
      id: 2,
      name: "John Doe",
      position: "Developer",
      avatar: "https://cdn-icons-png.freepik.com/512/180/180650.png",
      startDate: "2024-09-01",
      endDate: "2024-09-03",
      days: 3,
      leaveType: "Vacation",
      status: "pending",
    },
    {
      id: 3,
      name: "John Doe",
      position: "Developer",
      avatar: "https://cdn-icons-png.freepik.com/512/180/180650.png",
      startDate: "2024-09-01",
      endDate: "2024-09-03",
      days: 3,
      leaveType: "Vacation",
      status: "pending",
    },
    {
      id: 4,
      name: "John Doe",
      position: "Developer",
      avatar: "https://cdn-icons-png.freepik.com/512/180/180650.png",
      startDate: "2024-09-01",
      endDate: "2024-09-03",
      days: 3,
      leaveType: "Vacation",
      status: "pending",
    },
    {
      id: 6,
      name: "John Doe",
      position: "Developer",
      avatar: "https://cdn-icons-png.freepik.com/512/180/180650.png",
      startDate: "2024-09-01",
      endDate: "2024-09-03",
      days: 3,
      leaveType: "Vacation",
      status: "pending",
    },
    {
      id: 7,
      name: "John Doe",
      position: "Developer",
      avatar: "https://cdn-icons-png.freepik.com/512/180/180650.png",
      startDate: "2024-09-01",
      endDate: "2024-09-03",
      days: 3,
      leaveType: "Vacation",
      status: "pending",
    },
    {
      id: 5,
      name: "Jane Smith",
      position: "Designer",
      avatar: "/path/to/avatar2.jpg",
      startDate: "2024-09-05",
      endDate: "2024-09-06",
      days: 2,
      leaveType: "Sick Leave",
      status: "approved",
    },
    // Add more mock data as needed
  ];

  const teamLeaves = [
    { name: "Alice Johnson", startDate: "2024-09-10", endDate: "2024-09-12" },
    { name: "Bob Smith", startDate: "2024-09-15", endDate: "2024-09-16" },
    { name: "Charlie Brown", startDate: "2024-09-20", endDate: "2024-09-22" },
  ];

  const filteredRequests = leaveRequests.filter(
    (request) => request.status === activeTab
  );

  const handleApprove = (id) => {
    console.log("Approved request:", id);
  };

  const handleReject = (id) => {
    console.log("Rejected request:", id);
  };

  return (
    <div className="flex">
      <div className="w-3/4 pr-4">
        <div className="flex justify-between items-center p-2 m-2">
          <h2 className="text-2xl font-bold">Leave & Attendance Requests</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${
                viewMode === "grid"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-600"
              } rounded`}
            >
              <LayoutGrid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${
                viewMode === "list"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-600"
              } rounded`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="correction">Attendance Correction</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab}>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-3 gap-4">
                {filteredRequests.map((request) => (
                  <LeaveRequestCard
                    key={request.id}
                    request={request}
                    onApprove={handleApprove}
                    onReject={handleReject}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div>
                {filteredRequests.map((request) => (
                  <LeaveRequestCard
                    key={request.id}
                    request={request}
                    onApprove={handleApprove}
                    onReject={handleReject}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <div className="w-[50%] p-4">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Calendar</h3>
          </CardHeader>
          <CardContent>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[
                { title: "Public Holiday", date: "2024-09-15", color: "red" },
                { title: "Team Leave", date: "2024-09-20", color: "blue" },
              ]}
            />
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <h3 className="text-lg font-semibold">My Team Leaves</h3>
          </CardHeader>
          <CardContent>
            {" "}
            <TeamLeaveInfo teamLeaves={teamLeaves} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaveManagementDashboard;
