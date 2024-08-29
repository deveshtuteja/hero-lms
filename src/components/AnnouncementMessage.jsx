import { useSelector } from "react-redux";

const AnnouncementMessage = ({ message, info }) => {
  const isDarkTheme = useSelector((store) => store.theme.isDark);
  return (
    <div className="flex gap-2 bg-gray-100 my-1 shadow-md cursor-pointer hover:bg-gray-200  dark:bg-gray-800">
      <div className="self-center">
        <img
          className={
            !isDarkTheme
              ? "w-12 h-9 self-center"
              : "w-14 h-12 self-center rounded-3xl"
          }
          src={
            !isDarkTheme
              ? "https://www.shareicon.net/data/2016/01/21/706494_announcement_512x512.png"
              : "https://cdn2.vectorstock.com/i/1000x1000/94/71/announcement-speaker-icon-with-white-background-vector-28939471.jpg"
          }
          alt="announcement"
        />
      </div>
      <div className="mt-2">
        <p className="font-semibold text-  dark:text-gray-50">{message}</p>
        <p className=" dark:text-gray-50">{info}</p>
      </div>
    </div>
  );
};

export default AnnouncementMessage;
