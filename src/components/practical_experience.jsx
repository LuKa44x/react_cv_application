import { useState } from "react";

function Practical_experience({ onChange, data }) {
  const [stillWorking, setStillWorking] = useState(false);

  const handleChange = (e) => {
    const updatedData = {
      ...data,
      [e.target.name]: e.target.value,
    };

    onChange(updatedData);
  };

  function toggleEndDate(e) {
    const checked = e.target.checked;

    setStillWorking(checked);

    if (checked) {
      onChange({
        ...data,
        endDate: "Still working",
      });
    }
  }

  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <>
      <div className="mt-4">
        <h3>Practical Experience</h3>
        <div className="input-group mb-2">
          <span className="input-group-text">Company Name</span>
          <input
            type="text"
            value={data?.companyName || ""}
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
            value={data?.positionTitle || ""}
            aria-label="Position Title"
            className="form-control"
            name="positionTitle"
            placeholder="Position Title"
            onChange={handleChange}
          />

          <textarea
            style={{ resize: "none" }}
            rows={4}
            value={data?.mainResponsability || ""}
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
            value={data?.startDate || ""}
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
            value={data?.endDate || ""}
            className="form-control"
            aria-label="endDate"
            name="endDate"
            max={currentDate}
            // to prevent the user from typing in the date input and avoid the max attribute
            onKeyDown={(e) => e.preventDefault()}
            onChange={handleChange}
            disabled={stillWorking}
          />
          <input
            type="checkbox"
            name="stillWorking"
            id="stillWorking"
            checked={stillWorking}
            onChange={toggleEndDate}
          />
          <label htmlFor="stillWorking">Still working</label>
        </div>
      </div>
    </>
  );
}

export default Practical_experience;
