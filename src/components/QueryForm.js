import React, { useState } from "react";

const QueryForm = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setFormState({
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const renderInput = (name, type, label, placeholder, value, required) => (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="shadow placeholder:font-semibold placeholder:bg-[#eeeeee] appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );

  const renderTextarea = (name, label, placeholder, value, required) => (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        className="shadow placeholder:font-semibold placeholder:bg-[#eeeeee] appearance-none border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );

  return (
    <div className="border-2 bg-white rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 md:top-1/2 lg:top-1/2 md:-translate-y-1/2 lg:-translate-y-1/2 flex flex-col justify-between h-fit lg:max-w-3xl lg:mx-auto">
      <div></div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 mt-7 pb-8 mb-4"
      >
        <div className="grid w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {renderInput(
            "fullName",
            "text",
            "Full Name",
            "Name*",
            formState.fullName,
            true
          )}
          {renderInput(
            "email",
            "email",
            "Email",
            "Email*",
            formState.email,
            true
          )}
          {renderInput(
            "phoneNumber",
            "tel",
            "Phone Number",
            "Phone Number*",
            formState.phoneNumber,
            true
          )}
          {renderInput(
            "subject",
            "text",
            "Subject",
            "Subject*",
            formState.subject,
            true
          )}
          {renderTextarea(
            "message",
            "Message",
            "Your Message*",
            formState.message,
            true
          )}

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
