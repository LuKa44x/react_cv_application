import { useState } from "react";

function Educational_experience({ onChange, data }) {
  const [stillStudying, setStillStudying] = useState(false);

  const handleChange = (e) => {
    const updatedData = {
      ...data,
      [e.target.name]: e.target.value,
    };

    onChange(updatedData);
  };

  function toggleEndDate(e) {
    const checked = e.target.checked;

    setStillStudying(checked);

    if (checked) {
      onChange({
        ...data,
        endDate: "",
      });
    }
  }

  //to get the current date for the max1 attribute of the date input
  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <>
      <div className="mt-4">
        <h3>Educational Experience</h3>
        {/* input group for degree and school name  */}
        <div className="input-group">
          <span className="input-group-text">Degree</span>
          <input
            type="text"
            value={data?.degree || ""}
            aria-label="Degree"
            className="form-control"
            name="degree"
            onChange={handleChange}
          />
          <span className="input-group-text">School Name</span>
          <input
            type="text"
            value={data?.schoolName || ""}
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
            value={data?.startDate || ""}
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
            value={data?.endDate || ""}
            className="form-control"
            aria-label="endDate"
            name="endDate"
            max={currentDate}
            // to prevent the user from typing in the date input and avoid the max attribute
            onKeyDown={(e) => e.preventDefault()}
            onChange={handleChange}
            disabled={stillStudying}
          />
          <input
            type="checkbox"
            name="stillStudying"
            id="stillStudying"
            checked={stillStudying}
            onChange={toggleEndDate}
          />
          <label htmlFor="stillStudying">Still studying</label>
        </div>
      </div>
    </>
  );
}

export default Educational_experience;
