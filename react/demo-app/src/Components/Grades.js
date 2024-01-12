let school = "Pangalan ng School";

function getGrade(s, t) {
  return (s / t) * 50 + 50;
}

function showExplanation() {
  alert(
    "Final grade is calculated throught the following formula: \nFinal Grade = Score / Total x 50 + 50"
  );
}

const Grades = function ({ score, total }) {
  return (
    <>
      <h1 className="display-1">{school}</h1>
      <h1>Grades</h1>
      <p>
        Score: <span>{score}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <h2>
        Final grade: <span>{getGrade(score, total)}</span>
      </h2>
      <button onClick={showExplanation} className="btn btn-primary">
        Explain
      </button>
    </>
  );
};

export default Grades;
