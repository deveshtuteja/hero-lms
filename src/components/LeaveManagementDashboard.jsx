import { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // Corrected import
import dayGridPlugin from "@fullcalendar/daygrid"; // Plugin for day grid view
import { Card, CardContent, CardHeader } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, List } from "lucide-react";

const LeaveRequestCard = ({ request, onApprove, onReject }) => (
  <Card className="mb-4">
    <CardHeader>
      <div className="flex items-center">
        <img
          src={request.avatar}
          alt={request.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{request.name}</h3>
          <p className="text-sm text-gray-500">{request.position}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p>Start date: {request.startDate}</p>
      <p>End date: {request.endDate}</p>
      <p>Number of days: {request.days}</p>
      <p>Leave type: {request.leaveType}</p>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => onReject(request.id)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reject
        </button>
        <button
          onClick={() => onApprove(request.id)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Approve
        </button>
      </div>
    </CardContent>
  </Card>
);

const LeaveManagementDashboard = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [activeTab, setActiveTab] = useState("pending");

  // Mock data - replace with actual data fetching logic
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

  const filteredRequests = leaveRequests.filter(
    (request) => request.status === activeTab
  );

  const handleApprove = (id) => {
    // Implement approve logic
    console.log("Approved request:", id);
  };

  const handleReject = (id) => {
    // Implement reject logic
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
                viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
              } rounded`}
            >
              <LayoutGrid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${
                viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
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
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <div className="w-[50%]">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Calendar</h3>
          </CardHeader>
          <CardContent>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[
                // Add your events here
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
          <CardContent>{/* Add team leave information here */}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaveManagementDashboard;
