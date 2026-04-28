import {useState } from "react";

const quizData = [
  {
    question: "Quelle est ta couleur préférée ?",
    choices: ["Le violet", "Le bordeaux", "Le magenta", "Le noir"],
    answer: 0,
  },
  {
    question: "Question 2 ?",
    choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    answer: 0,
  },
  {
    question: "Question 3 ?",
    choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    answer: 0,
  },
  {
    question: "Question 4 ?",
    choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    answer: 0,
  },
  {
    question: "Question 5 ?",
    choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    answer: 0,
  },
  {
    question: "Question 6 ?",
    choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    answer: 0,
  },
  {
    question: "Question 7 ?",
    choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    answer: 0,
  },
  {
    question: "Question 8 ?",
    choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    answer: 0,
  },
  {
    question: "Question 9 ?",
    choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    answer: 0,
  },
  {
    question: "Question 10 ?",
    choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
    answer: 0,
  },
];


/* ─── Arrow icon ─── */
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

/* ─── Page 1: Coucou ─── */
function PageCoucou({navigateTo}) {
  return (
    <div className="page" id="page-coucou">
      <h1 className="text_title">Coucou toi</h1>
      <button className="arrow-btn" onClick={() => navigateTo(1)}>
        <ArrowIcon />
      </button>
      <img
        src="photos/welcom_dog.jpg"
        alt="welcom dog"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}

/* ─── Page 2: Comment tu vas ? ─── */
function PageMood({ navigateTo }) {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    "Ça va très bien !",
    "Ça va ça va",
    "Bof je suis fatigué j'ai pas trop dormi",
    "Ça va pas jvais sauter d'un pont",
  ];

  return (
    <div className="page" id="page-mood">
      <h1 className="text_title">Comment tu vas ?</h1>

      <div className="choices">
        {moods.map((mood, index) => (
          <div key={index}>
            <input
              type="radio"
              name="mood"
              id={`mood${index}`}
              onChange={() => setSelectedMood(index)}
            />
            <label htmlFor={`mood${index}`}>{mood}</label>
          </div>
        ))}
      </div>

      <button
        className="arrow-btn"
        onClick={() => {
          if (selectedMood !== null) {
            navigateTo(selectedMood + 3);
          }
        }}
      >
        <ArrowIcon />
      </button>
    </div>
  );
}

function PageVeryGood() {
  return (
    <div className="page" id="page-very-good">
      <h1 className="text_title">Trop bien !</h1>
      <img
        src="photos/very_good_dog.jpg"
        alt="very good dog"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}

function PageOk() {
  return (
    <div className="page" id="page-ok">
      <h1 className="text_title">Ça va ça va</h1>
      <img
        src="photos/ok_dog.jpg"
        alt="ok dog"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}

function PageBof() {
  return (
    <div className="page" id="page-bof">
      <h1 className="text_title">Bof je suis fatigué j'ai pas trop dormi</h1>
      <img
        src="photos/bof_dog.jpg"
        alt="bof dog"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}

function PageBridge() {
  return (
    <div className="page" id="page-bridge">
      <h1 className="text_title">Ça va pas jvais sauter d'un pont</h1>
      <img
        src="photos/bridge_dog.jpg"
        alt="bridge dog"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}
export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageHistory, setPageHistory] = useState([]);

  function navigateTo(nextPage) {
    setPageHistory((history) => [...history, currentPage]);
    setCurrentPage(nextPage);
  }

  function goBack() {
    if (pageHistory.length === 0) {
      return;
    }

    const previousPage = pageHistory[pageHistory.length - 1];
    setPageHistory((history) => history.slice(0, -1));
    setCurrentPage(previousPage);
  }

  return (
    <div className="app">
      {pageHistory.length > 0 && (
        <button className="back-btn" onClick={goBack} aria-label="Retour">
          <BackIcon />
        </button>
      )}

      {currentPage === 0 && <PageCoucou navigateTo={navigateTo} />}
      {currentPage === 1 && <PageMood navigateTo={navigateTo} />}
      {currentPage === 2 && <PageVeryGood />}
      {currentPage === 3 && <PageOk />}
      {currentPage === 4 && <PageBof />}
      {currentPage === 5 && <PageBridge />}
    </div>
  );
}
