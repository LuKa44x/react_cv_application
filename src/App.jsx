import General_information from "./components/general_information.jsx";
import Educational_experience from "./components/educational_experience.jsx";
import Practical_experience from "./components/practical_experience.jsx";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    general_info: null,
    educational_exp: null,
    practical_exp: null,
  });

  return (
    <>
      {/* quando fa il rerender e submitted é true fai: */}
      {submitted ? (
        <div className="container">
          <div className="alert alert-success" role="alert">
            Your CV has been submitted successfully!
          </div>
          <ul className="list-group">
            <ol className="list-group-item">
              General Information
              <li>
                {data.general_info?.firstName} {data.general_info?.lastName}{" "}
                {data.general_info?.email} {data.general_info?.phone}
              </li>
            </ol>

            <ol className="list-group-item">
              Educational Experience Educational Experience
              <li>
                {data.educational_exp?.degree}{" "}
                {data.educational_exp?.schoolName}{" "}
                {data.educational_exp?.startDate} -{" "}
                {data.educational_exp?.endDate}
              </li>
            </ol>
            <ol className="list-group-item">
              Practical Experience
              <li>
                {data.practical_exp?.companyName}{" "}
                {data.practical_exp?.positionTitle}{" "}
                {data.practical_exp?.mainResponsability}{" "}
                {data.practical_exp?.startDate} - {data.practical_exp?.endDate}
              </li>
            </ol>
          </ul>
        </div>
      ) : (
        // quando submitted é false fai: (cioé al primo render della pagina)
        <form
          className="container"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="alert alert-info" role="alert">
            Please fill in the form and submit your CV.
          </div>

          <General_information
            onChange={(general_info) =>
              setData((prev) => ({ ...prev, general_info }))
            }
          />
          <Educational_experience
            onChange={(educational_exp) =>
              setData((prev) => ({ ...prev, educational_exp }))
            }
          />
          <Practical_experience
            onChange={(practical_exp) =>
              setData((prev) => ({ ...prev, practical_exp }))
            }
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
        </form>
      )}
    </>
  );
}

export default App;
