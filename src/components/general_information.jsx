import { useState } from "react";

function General_information() {
  //state obj for personal info
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+39 ",
  });

  return (
    <>
      {/* input group for first and last name  */}
      <div className="input-group">
        <span className="input-group-text">First and last name</span>
        <input
          type="text"
          aria-label="First name"
          className="form-control"
          name="firstName"
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, firstName: e.target.value })
          }
        />
        <input
          type="text"
          aria-label="Last name"
          className="form-control"
          name="lastName"
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, lastName: e.target.value })
          }
        />
      </div>
      {/* input group for email and phone number */}
      <div className="input-group">
        <span className="input-group-text">Email</span>
        <input
          type="email"
          aria-label="Email"
          className="form-control"
          name="email"
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
        />

        <span className="input-group-text">Phone</span>
        <input
          type="tel"
          className="form-control"
          name="phone"
          value={personalInfo.phone}
          aria-label="Phone"
          aria-describedby="button-addon2"
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phone: e.target.value })
          }
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Button
        </button>
      </div>
      {/* to check the state */}
      <p>
        {personalInfo.firstName} {personalInfo.lastName} {personalInfo.email}
        {personalInfo.phone}
      </p>
    </>
  );
}

export default General_information;
