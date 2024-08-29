import { Phone, Mail } from "lucide-react";
import contact1 from "../assets/contact 1.png";
import contact2 from "../assets/Contact 2.png";

const SupportCard = ({ title, name, phone, email, image }) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md cursor-pointer transition-colors duration-200">
    <div className="flex items-center mb-2">
      <img className="w-12 h-12 rounded-full mr-4" src={image} alt={name} />
      <div>
        <div className="font-semibold dark:text-gray-200">{name}</div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Phone className="w-4 h-4 mr-1" /> {phone}
        </div>
      </div>
    </div>
    <a href={`mailto:${email}`}>
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
        <Mail className="w-4 h-4 mr-1" /> {email}
      </div>
    </a>
  </div>
);

const Helpdesk = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 dark:text-gray-100">
        Support and Queries
      </h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
          Queries on Insider Trading Regulation
        </h3>
        <SupportCard
          name="Mr. Ashish Mittal"
          phone="8250099650"
          email="ashish.mittal@heromotocorp.com"
          image={contact1}
        />
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
          IT and Tool related queries
        </h3>
        <SupportCard
          name="Mr. Anil Kumar Singh"
          phone="+918287039657"
          email="anil1.singh@heromotocorp.com"
          image={contact2}
        />
      </div>
    </div>
  );
};

export default Helpdesk;
