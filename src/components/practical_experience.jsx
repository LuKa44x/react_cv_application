import { useState } from "react";

function Practical_experience() {
  //state obj for practical info
  const [practicalInfo, setPracticalInfo] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsability: "",
    startWork: "",
    endWork: "",
  });
  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <>
      <div className="input-group">
        <span className="input-group-text">Company Name</span>
        <input
          type="text"
          aria-label="Company Name"
          className="form-control"
          name="companyName"
          placeholder="Company Name"
          onChange={(e) =>
            setPracticalInfo({ ...practicalInfo, companyName: e.target.value })
          }
        />
      </div>
      {/* input group for Position Title and Responsability  */}
      <div className="input-group">
        <span className="input-group-text">
          Position Title and Responsability
        </span>
        <input
          type="text"
          aria-label="Position Title"
          className="form-control"
          name="positionTitle"
          placeholder="Position Title"
          onChange={(e) =>
            setPracticalInfo({
              ...practicalInfo,
              positionTitle: e.target.value,
            })
          }
        />
        <input
          type="text"
          aria-label="Main Responsability"
          className="form-control"
          name="mainResponsability"
          placeholder="Main Responsability"
          onChange={(e) =>
            setPracticalInfo({
              ...practicalInfo,
              mainResponsability: e.target.value,
            })
          }
        />
      </div>
      {/* input group for dates */}
      <div className="input-group">
        <span className="input-group-text">Start of work</span>
        <input
          type="date"
          className="form-control"
          aria-label="startDate"
          name="startDate"
          max={currentDate}
          // to prevent the user from typing in the date input and avoid the max attribute
          onKeyDown={(e) => e.preventDefault()}
          onChange={(e) =>
            setPracticalInfo({ ...practicalInfo, startDate: e.target.value })
          }
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
          onChange={(e) =>
            setPracticalInfo({ ...practicalInfo, endDate: e.target.value })
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
        {practicalInfo.companyName} {practicalInfo.positionTitle}{" "}
        {practicalInfo.mainResponsability}
        {practicalInfo.startDate} - {practicalInfo.endDate}
      </p>
    </>
  );
}

export default Practical_experience;
