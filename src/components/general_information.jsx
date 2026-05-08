import { useState } from "react";

function General_information({ onChange, data }) {
  const handleChange = (e) => {
    const updatedData = {
      ...data,
      [e.target.name]: e.target.value,
    };

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
            value={data?.firstName || ""}
            aria-label="First name"
            className="form-control"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={data?.lastName || ""}
            aria-label="Last name"
            className="form-control"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>
        {/* input group for email and phone number */}
        <div className="input-group mt-2">
          <span className="input-group-text">Email</span>
          <input
            type="email"
            value={data?.email || ""}
            aria-label="Email"
            className="form-control"
            name="email"
            placeholder="email@example.com"
            onChange={handleChange}
            required
          />

          <span className="input-group-text">Phone</span>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={data?.phone || "+39 "}
            aria-label="Phone"
            aria-describedby="button-addon2"
            maxLength="13"
            placeholder="+39 1234567890"
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </>
  );
}

export default General_information;
