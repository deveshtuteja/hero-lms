const AnnouncementMessage = ({ message, info }) => {
  return (
    <div className="flex gap-2 bg-gray-100 my-1 shadow-md cursor-pointer hover:bg-gray-200">
      <div className="self-center">
        <img
          className="w-12 h-9 self-center"
          src="https://www.shareicon.net/data/2016/01/21/706494_announcement_512x512.png"
          alt="announcement"
        />
      </div>
      <div className="mt-2">
        <p className="font-semibold text-lg">{message}</p>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default AnnouncementMessage;
