import { useState } from "react";

function General_information({ onChange }) {
  //state obj for personal info
  const [personalInfo, setPersonalInfo] = useState({});

  const handleChange = (e) => {
    const updatedData = {
      ...personalInfo,
      [e.target.name]: e.target.value,
    };

    setPersonalInfo(updatedData);
    onChange(updatedData);
  };

  return (
    <>
      <div className="mt-3">
        <h3>General Information</h3>
        {/* input group for first and last name  */}
        <div className="input-group">
          <span className="input-group-text">First and last name</span>
          <input
            type="text"
            aria-label="First name"
            className="form-control"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            type="text"
            aria-label="Last name"
            className="form-control"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        {/* input group for email and phone number */}
        <div className="input-group mt-2">
          <span className="input-group-text">Email</span>
          <input
            type="email"
            aria-label="Email"
            className="form-control"
            name="email"
            placeholder="email@example.com"
            onChange={handleChange}
          />

          <span className="input-group-text">Phone</span>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={personalInfo.phone}
            onClick={(e) =>
              setPersonalInfo({
                ...personalInfo,
                phone: "+39 ",
              })
            }
            aria-label="Phone"
            aria-describedby="button-addon2"
            maxLength="13"
            placeholder="+39 1234567890"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default General_information;
