const Profile = () => {
  // Example employee data
  const employee = {
    name: "Jane Doe",
    position: "Senior Developer",
    department: "IT",
    email: "jane.doe@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate about creating innovative solutions and mentoring junior developers. Always excited to learn new technologies and contribute to open-source projects.",
    skills: ["React", "Node.js", "Python", "AWS", "Docker"],
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={employee.imageUrl}
            alt={employee.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 dark:text-indigo-400 font-semibold">
            {employee.position}
          </div>
          <h2 className="mt-1 text-3xl leading-tight font-bold text-gray-900 dark:text-gray-100">
            {employee.name}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {employee.department}
          </p>
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Email:</strong> {employee.email}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Phone:</strong> {employee.phone}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Location:</strong> {employee.location}
            </p>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {employee.bio}
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Skills
            </h3>
            <div className="mt-2 flex flex-wrap">
              {employee.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 mr-2 mb-2 text-sm font-medium text-indigo-800 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-800 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
