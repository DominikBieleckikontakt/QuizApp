import { Home, Mail, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="max-w-[48rem] mx-5 sm:mx-10 md:mx-auto mt-24 bg-card p-10 rounded-lg shadow-md">
      <h1 className="text-4xl text-primary text-center mb-5">Contact us</h1>
      <div className="max-w-64 mx-auto">
        <p className="flex items-center font-light">
          <Mail className="text-primary mr-2 size-5" />
          example@example.com
        </p>
        <p className="flex items-center font-light py-5">
          <PhoneCall className="text-primary mr-2" />
          (415) 555-6789
        </p>
        <p className="flex items-center font-light">
          <Home className="text-primary mr-2" />
          123 Oak Street, Springfield, IL 62701
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
