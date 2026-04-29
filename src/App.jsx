import {useState } from "react";

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
    reponse: "Evidemment que c'est ça, quoi d'autre."
  },
  {
    question: "Question 3\nTu préfères...?",
    choices: ["Te noyer dans l'océan", "Te noyer dans un aquarium mais il est aussi grand que l'océan",
      "Te noyer dans un lac mais c'est comme un aquarium", "Te noyer dans une rivière mais ya pas de courant et c'est comme un aquarium"],
    answer: 3,
    reponse: "Un choix pas facile"
  },
  {
    question: "Question 4\nPour se murger la gueule, tu prends quoi ?",
    choices: ["Sous vody puff 25k PURPLE WAVE tasty crousty", 
      "Du vin", "Du vin Blanc", "Du vin rouge"],
    answer: 0,
    reponse: "Dans la france à macron???"
  },
  {
    question: "Question 5\nQuel est ton animal préféré ?",
    choices: ["Le poulpe", "Le chat", "La Musaraigne d'Éthiopie", "Le renard"],
    answer: 3,
    reponse: "Le savais-tu : La Musaraigne d'Éthiopie cache une petite particularité étonnante malgré sa taille minuscule. On a observé que certaines musaraignes de cette espèce peuvent émettre des sons ultrasoniques pour s’orienter dans leur environnement, un peu comme les chauves-souris. Ce n’est pas une “écholocation” aussi sophistiquée, mais cela leur permettrait de mieux naviguer dans les herbes denses ou les terriers sombres où elles vivent."

  },
  {
    question: "Question 6 7 SIIIXXX SEVEEEEENNN\nQuel est ton brainrot préféré?",
    choices: ["Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur",
      "Brim Brim Paftapim", "Chimpanzini BANANINI", "Réponse D"],
    answer: 0,
    reponse: "zig & sharko"
  },
  {
    question: "Dans cette situtation, Je..",
    choices: ["Ralentis", "Garde mon allure", "J'accèlere", "J'ai même pas mon code qu'est ce que tu me racontes fdp"],
    answer: 3,
    reponse: "ébédidonk"
  },
  {
    question: "C'est la question CO ! C'est la question QUINE !\nC'est la Queeeessssstioooon COOOOO QUINEEEE!!\nTu préfères...?",
    choices: ["Le 69", "Le 67 (SIIIXX SEVVEENN)", "Ligoté mains/pieds, suspendu, bailloné", "Réponse D"],
    answer: 3,
    reponse: "Coquine va"
  },
  {
    question: "Question 10\nQuelle prénom choisirais-tu pour notre futur chat ?",
    choices: ["Tulip", "Pignouf", "MÉGATRON", "Salaud"],
    answer: 2,
    reponse: "par pitié mégatron"
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
      <h1 className="text_title">Weeeeeeeee</h1>
      <div className="images-row">
        <img src="photos/patrick.jpg" alt="patrick" />
        <img src="photos/happy1.jpg" alt="happy1" />
      </div>
    </div>
  );
}

function PageOk() {
  return (
    <div className="page" id="page-ok">
      <h1 className="text_title">mhmhmh ok ok !</h1>
      <img
        src="photos/okok.jpg"
        alt="okok"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}

function PageBof() {
  return (
    <div className="page" id="page-bof">
      <h1 className="text_title">A MIMIR</h1>
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
      <h1 className="text_title">OMG NON PAS LE PONT !!!</h1>
      <img
        src="photos/bridge.jpeg"
        alt="bridge"
        style={{ width: "200px", height: "auto" }}
      />
      <img
        src="photos/scream_dog.jpg"
        alt="scream_dog"
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
