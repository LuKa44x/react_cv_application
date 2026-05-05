import { useState } from "react";

function Practical_experience({ onChange }) {
  //state obj for practical info
  const [practicalInfo, setPracticalInfo] = useState({});

  const handleChange = (e) => {
    const updatedData = {
      ...practicalInfo,
      [e.target.name]: e.target.value,
    };

    setPracticalInfo(updatedData);
    onChange(updatedData);
  };

  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <>
      <div className="mt-4">
        <h3>Practical Experience</h3>
        <div className="input-group mb-2">
          <span className="input-group-text">Company Name</span>
          <input
            type="text"
            aria-label="Company Name"
            className="form-control"
            name="companyName"
            placeholder="Company Name"
            onChange={handleChange}
          />
        </div>
        {/* input group for Position Title and Responsability  */}

        <span className="input-group-text justify-content-center">
          Position Title and Responsability
        </span>
        <div className="input-group align-items-start">
          <input
            type="text"
            aria-label="Position Title"
            className="form-control"
            name="positionTitle"
            placeholder="Position Title"
            onChange={handleChange}
          />

          <textarea
            style={{ resize: "none" }}
            rows={4}
            aria-label="Main Responsability"
            className="form-control"
            name="mainResponsability"
            placeholder="Main Responsability"
            onChange={handleChange}
          />
        </div>
        {/* input group for dates */}
        <div className="input-group mt-2">
          <span className="input-group-text">Start of work</span>
          <input
            type="date"
            className="form-control"
            aria-label="startDate"
            name="startDate"
            max={currentDate}
            // to prevent the user from typing in the date input and avoid the max attribute
            onKeyDown={(e) => e.preventDefault()}
            onChange={handleChange}
          />

          <span className="input-group-text">End of work</span>
          <input
            type="date"
            className="form-control"
            aria-label="endDate"
            name="endDate"
            max={currentDate}
            // to prevent the user from typing in the date input and avoid the max attribute
            onKeyDown={(e) => e.preventDefault()}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default Practical_experience;
