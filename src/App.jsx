import { useState } from "react";

const QUIZ_START_PAGE = 7;

const quizQuestions = [
  {
    question: "Question 1\nQuelle est ta couleur préférée ?",
    choices: ["Le violet", "Le bordeaux", "Le magenta", "Le noir"],
    answer: 1,
    reponse: "Je le savais !!"
  },
  {
    question: "Question 2\nQuel est ton plat préféré?",
    choices: ["Les pâtes carbos", "La tartiflette au crozet de Stéphanie", "Max (grr)", "Autre (putain max tu connais pas ta copine c'est chaud)"],
    answer: 2,
    reponse: "Évidemment que c'est ça, quoi d'autre. Je le savais aussi"
  },
  {
    question: "Question 3\nTu préfères...?",
    choices: ["Te noyer dans l'océan", "Te noyer dans un aquarium mais il est aussi grand que l'océan",
      "Te noyer dans un lac mais c'est comme un aquarium", "Te noyer dans une rivière mais ya pas de courant et c'est comme un aquarium"],
    answer: 3,
    reponse: "Ça c'est de la question qui questionne. (je savais que t'allais choisir ça)"
  },
  {
    question: "Question 4\nPour se murger la gueule, tu prends quoi ?",
    choices: ["Sous vody puff 25k PURPLE WAVE tasty crousty", 
      "Du vin", "Du vin Blanc", "Du vin rouge", "Du vin rosé", "Du vin jaune", "Du vin gris", "ok j'arrête", "De la bière", "JÄGER BOMBA LATINA"],
    answer: 0,
    reponse: "Toujours su qu t'étais alcoolique, SALE ALCOOLIQUE"
  },
  {
    question: "Question 5\nQuel est ton animal préféré ?",
    choices: ["Le poulpe", "Le chat", "LA MUSARAIGNE D'ÉTHIOPIE (tu sais pas ce que c'est hein)", "Le renard"],
    answer: 3,
    reponse: "Le savais-tu : La Musaraigne d'Éthiopie cache une petite particularité étonnante malgré sa taille minuscule. On a observé que certaines musaraignes de cette espèce peuvent émettre des sons ultrasoniques pour s’orienter dans leur environnement, un peu comme les chauves-souris. Ce n’est pas une “écholocation” aussi sophistiquée, mais cela leur permettrait de mieux naviguer dans les herbes denses ou les terriers sombres où elles vivent."

  },
  {
    question: "Question 6 7 SIIIXXX SEVEEEEENNN\nQuel est ton brainrot préféré?",
    choices: ["Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur",
      "Brim Brim Paftapim", "Chimpanzini BANANINI", "Réponse D"],
    answer: 0,
    reponse: "Zig & Sharko"
  },
  {
    question: "Dans cette situtation, Je..",
    image: "photos/code_route.jpg",
    choices: ["Ralentis", "Garde mon allure", "J'accèlere", "J'ai même pas mon code qu'est ce que tu me racontes fdp"],
    answer: 3,
    reponse: "ouais je commence à manquer d'inspi la"
  },
  {
    question: "C'est la question CO ! C'est la question QUINE !\nC'est la Queeeessssstioooon COOOOO QUINEEEE!!\nTu préfères...?",
    choices: ["Le 69", "Le 67 (SIIIXX SEVVEENN)", "Ligoté mains/pieds, suspendu, bailloné", "Réponse D"],
    answer: 3,
    reponse: "Sacré coquine va"
  },
  {
    question: "Question 10\nQuelle prénom choisirais-tu pour notre futur chat ?",
    choices: ["Tulip", "Pignouf", "MÉGATRON", "Salaud"],
    answer: 2,
    reponse: "par pitié viens on l'appel MÉGATRON stp stp stp stp stp stp"
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
      <div className="images-row">
        <img src="photos/happyy.jpg" alt="happyy" />
        <img src="photos/sadd.jpg" alt="sadd" />
      </div>
      <button
        className="arrow-btn"
        onClick={() => {
          if (selectedMood !== null) {
            navigateTo(selectedMood + 2);
          }
        }}
      >
        <ArrowIcon />
      </button>
    </div>
  );
}

function PageVeryGood({ navigateTo }) {
  return (
    <div className="page" id="page-very-good">
      <h1 className="text_title">Weeeeeeeee</h1>
      <div className="images-row">
        <img src="photos/patrick.jpg" alt="patrick" />
        <img src="photos/happy1.jpg" alt="happy1" />
      </div>
      <button className="arrow-btn" onClick={() => navigateTo(6)}>
        <ArrowIcon />
      </button>
    </div>
  );
}

function PageOk({ navigateTo }) {
  return (
    <div className="page" id="page-ok">
      <h1 className="text_title">mhmhmh ok ok !</h1>
      <img
        src="photos/okok.jpg"
        alt="okok"
        style={{ width: "200px", height: "auto" }}
      />
      <button className="arrow-btn" onClick={() => navigateTo(6)}>
        <ArrowIcon />
      </button>
    </div>
  );
}

function PageBof({ navigateTo }) {
  return (
    <div className="page" id="page-bof">
      <h1 className="text_title">A MIMIR</h1>
      <div className="images-row">
        <img src="photos/mimir1.jpg" alt="mimir1" />
        <img src="photos/mimir2.jpg" alt="mimir2" />
      </div>
      <button className="arrow-btn" onClick={() => navigateTo(6)}>
        <ArrowIcon />
      </button>
    </div>
  );
}

function PageBridge({ navigateTo }) {
  return (
    <div className="page" id="page-bridge">
      <h1 className="text_title">ARRRHH NAAAAHHH PAS LE PONT !!!</h1>
      <div className="images-row">
      <img
        src="photos/bridge.jpeg"
        alt="bridge"
      />
      <img
        src="photos/scream_dog.jpg"
        alt="scream_dog"
      />
      </div>
      <button className="arrow-btn" onClick={() => navigateTo(6)}>
        <ArrowIcon />
      </button>
    </div>
  );
}

function PageStartQuiz({ navigateTo }) {
  return (
    <div className="page" id="page-start-quiz">
      <h1 className="text_title">Bon maintenant, petit quizz hehe</h1>
      <p>t'es prête ?</p>
      <button className="arrow-btn" onClick={() => navigateTo(QUIZ_START_PAGE)}>
        <ArrowIcon />
      </button>
    </div>
  );
}

function PageQuizQuestion({ questionData, questionIndex, navigateTo }) {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showResponse, setShowResponse] = useState(false);

  function validateAnswer() {
    if (selectedChoice !== null) {
      setShowResponse(true);
    }
  }

  return (
    <div className="page quiz-page" id={`page-quiz-${questionIndex + 1}`}>
      <h1 className="text_title quiz-title">{questionData.question}</h1>

      {questionData.image && (
        <img className="quiz-image" src={questionData.image} alt="" />
      )}

      <div className="choices quiz-choices">
        {questionData.choices.map((choice, index) => (
          <div className="quiz-choice" key={choice}>
            <input
              type="radio"
              name={`quiz-question-${questionIndex}`}
              id={`quiz-question-${questionIndex}-choice-${index}`}
              checked={selectedChoice === index}
              onChange={() => setSelectedChoice(index)}
            />
            <label htmlFor={`quiz-question-${questionIndex}-choice-${index}`}>
              {choice}
            </label>
          </div>
        ))}
      </div>

      <div className="quiz-actions">
        <button
          className="quiz-btn"
          disabled={selectedChoice === null}
          onClick={validateAnswer}
        >
          Valider
        </button>

        {showResponse && (
          <>
            <p className="quiz-response">{questionData.reponse}</p>
            <button
              className="quiz-btn"
              onClick={() => navigateTo(QUIZ_START_PAGE + questionIndex + 1)}
            >
              Question suivante
            </button>
          </>
        )}
      </div>
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
      {currentPage === 2 && <PageVeryGood navigateTo={navigateTo} />}
      {currentPage === 3 && <PageOk navigateTo={navigateTo} />}
      {currentPage === 4 && <PageBof navigateTo={navigateTo} />}
      {currentPage === 5 && <PageBridge navigateTo={navigateTo} />}
      {currentPage === 6 && <PageStartQuiz navigateTo={navigateTo} />}
      {currentPage >= QUIZ_START_PAGE &&
        currentPage < QUIZ_START_PAGE + quizQuestions.length && (
          <PageQuizQuestion
            key={currentPage}
            questionData={quizQuestions[currentPage - QUIZ_START_PAGE]}
            questionIndex={currentPage - QUIZ_START_PAGE}
            navigateTo={navigateTo}
          />
        )}
    </div>
  );
}
