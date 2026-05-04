import { useState } from "react";

function Educational_experience() {
  //state obj for education experience
  const [educationInfo, setEducationInfo] = useState({
    degree: "",
    schoolName: "",
    startDate: "",
    endDate: "",
  });

  //to get the current date for the max attribute of the date input
  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <>
      {/* input group for degree and school name  */}
      <div className="input-group">
        <span className="input-group-text">Degree</span>
        <input
          type="text"
          aria-label="Degree"
          className="form-control"
          name="degree"
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, degree: e.target.value })
          }
        />
        <span className="input-group-text">School Name</span>
        <input
          type="text"
          aria-label="School name"
          className="form-control"
          name="schoolName"
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, schoolName: e.target.value })
          }
        />
      </div>
      {/* input group for date */}
      <div className="input-group">
        <span className="input-group-text">Start of study</span>
        <input
          type="date"
          className="form-control"
          aria-label="startDate"
          name="startDate"
          max={currentDate}
          // to prevent the user from typing in the date input and avoid the max attribute
          onKeyDown={(e) => e.preventDefault()}
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, startDate: e.target.value })
          }
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
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, endDate: e.target.value })
          }
        />
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
