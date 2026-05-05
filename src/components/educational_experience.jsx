import { useState } from "react";

function Educational_experience({ onChange }) {
  //state obj for education experience
  const [educationInfo, setEducationInfo] = useState({});

  const handleChange = (e) => {
    const updatedData = {
      ...educationInfo,
      [e.target.name]: e.target.value,
    };

    setEducationInfo(updatedData);
    onChange(updatedData);
  };

  //to get the current date for the max attribute of the date input
  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <>
      <h3>Educational Experience</h3>
      {/* input group for degree and school name  */}
      <div className="input-group">
        <span className="input-group-text">Degree</span>
        <input
          type="text"
          aria-label="Degree"
          className="form-control"
          name="degree"
          onChange={handleChange}
        />
        <span className="input-group-text">School Name</span>
        <input
          type="text"
          aria-label="School name"
          className="form-control"
          name="schoolName"
          onChange={handleChange}
        />
      </div>
      {/* input group for date */}
      <div className="input-group mt-2">
        <span className="input-group-text">Start of study</span>
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
        <span className="input-group-text">End of study</span>
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
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Edit
        </button>
      </div>

      {/* to check the state */}
      <p>
        {educationInfo.degree} {educationInfo.schoolName}{" "}
        {educationInfo.startDate} - {educationInfo.endDate}
      </p>
    </>
  );
}

export default Educational_experience;
