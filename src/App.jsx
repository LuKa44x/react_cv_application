import General_information from "./components/general_information.jsx";
import Educational_experience from "./components/educational_experience.jsx";
import Practical_experience from "./components/practical_experience.jsx";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    submitted: false,
    editing: false,
  });
  const [data, setData] = useState({
    general_info: null,
    educational_exp: null,
    practical_exp: null,
  });

  return (
    <>
      {/* quando fa il rerender e submitted é true fai: */}
      {state.submitted && !state.editing ? (
        <div className="container">
          <div className="alert alert-success" role="alert">
            Your CV has been submitted successfully!
          </div>
          <div className="row">
            <div className="col-4">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-general_info-list"
                  data-bs-toggle="list"
                  href="#list-general_info"
                  role="tab"
                  aria-controls="general_info"
                >
                  General Information
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-educational_exp-list"
                  data-bs-toggle="list"
                  href="#list-educational_exp"
                  role="tab"
                  aria-controls="educational_exp"
                >
                  Educational Experience
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-practical_exp-list"
                  data-bs-toggle="list"
                  href="#list-practical_exp"
                  role="tab"
                  aria-controls="practical_exp"
                >
                  Practical Experience
                </a>
              </div>
            </div>
            <div className="col-8 d-flex flex-column justify-content-around ">
              <div className="tab-content  " id="nav-tabContent">
                <div
                  className="tab-pane fade show active "
                  id="list-general_info"
                  role="tabpanel"
                  aria-labelledby="list-general_info-list"
                >
                  <ul>
                    <li>
                      Name: {data.general_info?.firstName}{" "}
                      {data.general_info?.lastName}
                    </li>
                    <li>Email: {data.general_info?.email}</li>
                    <li>Phone: {data.general_info?.phone}</li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade "
                  id="list-educational_exp"
                  role="tabpanel"
                  aria-labelledby="list-educational_exp-list"
                >
                  <ul>
                    <li>Degree: {data.educational_exp?.degree}</li>
                    <li>School: {data.educational_exp?.schoolName}</li>
                    <li>Start Study: {data.educational_exp?.startDate} </li>
                    <li>End Study: {data.educational_exp?.endDate}</li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-practical_exp"
                  role="tabpanel"
                  aria-labelledby="list-practical_exp-list"
                >
                  <ul>
                    <li>Company: {data.practical_exp?.companyName}</li>
                    <li>
                      Company Position: {data.practical_exp?.positionTitle}
                    </li>
                    <li>
                      Responsibility: {data.practical_exp?.mainResponsability}
                    </li>
                    <li>Start Work: {data.practical_exp?.startDate} </li>
                    <li>End Work: {data.practical_exp?.endDate}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setState({ submitted: false, editing: true })}
          >
            Edit
          </button>
        </div>
      ) : (
        // quando submitted é false fai: (cioé al primo render della pagina)
        <form
          className="container"
          onSubmit={(e) => {
            e.preventDefault();
            setState({ submitted: true, editing: false });
          }}
        >
          {/* se é in editing metti: */}
          {state.editing ? (
            <div className="alert alert-info" role="alert">
              Please edit the CV you just submitted.
            </div>
          ) : (
            //se non é in editing metti: (cioé al primo render della pagina)
            <div className="alert alert-info" role="alert">
              Please fill in the form and submit your CV.
            </div>
          )}

          <General_information
            data={data.general_info}
            onChange={(general_info) =>
              setData((prev) => ({ ...prev, general_info }))
            }
          />
          <Educational_experience
            data={data.educational_exp}
            onChange={(educational_exp) =>
              setData((prev) => ({ ...prev, educational_exp }))
            }
          />
          <Practical_experience
            data={data.practical_exp}
            onChange={(practical_exp) =>
              setData((prev) => ({ ...prev, practical_exp }))
            }
          />
          <div className="mt-4 ">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default App;
