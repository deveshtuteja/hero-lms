import { Phone, Mail } from "lucide-react";
import contact1 from "../assets/contact 1.png";
import contact2 from "../assets/Contact 2.png";

const SupportCard = ({ title, name, phone, email, image }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-4 hover:bg-gray-200 shadow-md cursor-pointer">
    <div className="flex items-center mb-2">
      <img className="w-12 h-12 rounded-full mr-4" src={image} alt={name} />
      <div>
        <div className="font-semibold">{name}</div>
        <div className="flex items-center text-sm text-gray-600">
          <Phone className="w-4 h-4 mr-1" />
          {phone}
        </div>
      </div>
    </div>
    <a href={"mailto:" + { email }}>
      <div className="flex items-center text-sm text-gray-600 hover:text-blue-500">
        <Mail className="w-4 h-4 mr-1" />
        {email}
      </div>
    </a>
  </div>
);

const Helpdesk = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Support and Queries</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
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
        <h3 className="text-lg font-semibold mb-2">
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
