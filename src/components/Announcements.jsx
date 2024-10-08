import { useState, useEffect } from "react";
import AnnouncementMessage from "./AnnouncementMessage";

const Announcements = () => {
  const [messages] = useState([
    {
      message: "New Leave Policy",
      info: "Please review the updated leave policy effective September 1st.",
    },
    {
      message: "New Product Update",
      info: "Checkout our latest launched product by clicking here",
    },
    {
      message: "Cafetaria Update",
      info: "There's a Yoga session organised for the plant workers",
    },
    {
      message: "Holiday Announcement",
      info: "The office will be closed on September 15th for a public holiday.",
    },
    {
      message: "New Parking Policy",
      info: "Please review the updated parking policy.",
    },
    {
      message: "Promotions",
      info: "Please check the document attached.",
    },
  ]);

  const [visibleMessages, setVisibleMessages] = useState(messages.slice(0, 2));
  const [currentIndex, setCurrentIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prevMessages) => {
        const nextMessage = messages[currentIndex % messages.length];
        setCurrentIndex((prevIndex) => prevIndex + 1);
        return [...prevMessages.slice(1), nextMessage];
      });
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, [currentIndex, messages]);

  return (
    <div className="border border-black rounded-md shadow-lg m-2 px-4 py-3 overflow-y-scroll h-72 dark:bg-slate-900 dark:border-gray-50">
      <h1 className="font-bold text-xl mb-3 dark:text-gray-50">
        Announcements
      </h1>
      <div className="relative h-40">
        <div className="space-y-2 transition-all duration-500 ease-in-out">
          {visibleMessages.map((msg, index) => (
            <div
              key={index}
              className={`transform transition-transform ${
                index === visibleMessages.length - 1 ? "animate-slide-up" : ""
              }`}
            >
              <AnnouncementMessage message={msg.message} info={msg.info} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => setVisibleMessages(messages)}
        className="mt-10 text-blue-500 hover:text-blue-700 ml-16"
      >
        SEE ALL ANNOUNCEMENTS
      </button>
    </div>
  );
};

export default Announcements;
