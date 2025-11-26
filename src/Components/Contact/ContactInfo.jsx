import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactInfo = ({ darkMode }) => {
  const contacts = [
    { icon: Mail, label: "Email", value: "Abhishek04it@gmail.com", color: "bg-blue-500" },
    { icon: Phone, label: "Phone", value: "8076681766", color: "bg-purple-500" }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-6">Find Me</h3>

      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className={`p-3 ${contact.color} text-white rounded-full`}>
            <contact.icon size={24} />
          </div>

          <div>
            <p className="font-medium">{contact.label}</p>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              {contact.value}
            </p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default ContactInfo;
