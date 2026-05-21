import { useEffect, useRef, useState } from "react";

const QUIZ_START_PAGE = 7;

const nonQuizPageAudioSources = {
  0: "", // PageCoucou
  1: "", // PageMood
  2: "sound/Happymusic.mp3", // PageVeryGood
  3: "sound/Goofy_cool.mp3", // PageOk
  4: "sound/mimir.mp3", // PageBof
  5: "sound/alarm.mp3", // PageBridge
};

const QUESTION_MARKS = Array.from({ length: 70 }, (_, index) => index);

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
    imageLayout: "side-question-marks",
    image: ["photos/nico.png", "photos/ilhan.png"],
    choices: ["Te noyer dans l'océan", "Te noyer dans un aquarium mais il est aussi grand que l'océan",
      "Te noyer dans un lac mais c'est comme un aquarium", "Te noyer dans une rivière mais ya pas de courant et c'est comme un aquarium"],
    answer: 3,
    reponse: "Ça c'est de la question qui questionne. (je savais que t'allais choisir ça)"
  },
  {
    question: "Question 4\nPour se murger la gueule, tu prends quoi ?",
    imageLayout: "triangle-spin",
    image: ["photos/vody.png", "photos/tastycrousty.jpeg", "photos/puff.png"],
    choices: ["Sous vody puff 25k PURPLE WAVE tasty crousty",
      "Du vin", "Du vin Blanc", "Du vin rouge", "Du vin rosé", "Du vin jaune", "Du vin gris", "ok j'arrête", "De la bière", "JÄGER BOMBA LATINA"],
    answer: 0,
    reponse: "Toujours su qu t'étais alcoolique, SALE ALCOOLIQUE"
  },
  {
    question: "Question 5\nQuel est ton animal préféré ?",
    responseImage: "photos/murasaigne.jpg",
    responsePointer: "👉",
    choices: ["Le poulpe", "Le chat", "LA MUSARAIGNE D'ÉTHIOPIE (tu sais pas ce que c'est hein)", "Le renard"],
    answer: 3,
    reponse: "Le savais-tu : La Musaraigne d'Éthiopie cache une petite particularité étonnante malgré sa taille minuscule. On a observé que certaines musaraignes de cette espèce peuvent émettre des sons ultrasoniques pour s’orienter dans leur environnement, un peu comme les chauves-souris. Ce n’est pas une “écholocation” aussi sophistiquée, mais cela leur permettrait de mieux naviguer dans les herbes denses ou les terriers sombres où elles vivent."

  },
  {
    question: "Question 6 7 SIIIXXX SEVEEEEENNN\nQuel est ton brainrot préféré?",
    imageLayout: "triangle-before-response",
    image: ["photos/sahur.webp", "photos/brim.jpeg", "photos/singe.jpg"],
    responseImage: "photos/zig.jpeg",
    responseAudio: "",
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
    imageLayout: "side",
    image: ["photos/freaky1.jpg", "photos/freaky2.jpg"],
    questionAudio: "",
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

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/* ─── Page 1: Coucou ─── */
function PageCoucou({ navigateTo }) {
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
      <div className="images-row very-good-images">
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
      <h1 className="text_title">MHMHM OK !</h1>
      <img
        src="photos/okok.jpg"
        alt="okok"
        style={{ width: "600px", height: "auto" }}
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
      <h1 className="text_title bridge-title">ARRRHH NAAAAHHH PAS LE PONT !!!</h1>
      <img
        className="warning-gif warning-gif-left"
        src="photos/warning.gif"
        alt="warning"
      />
      <img
        className="bridge-zoom"
        src="photos/bridge.jpeg"
        alt="bridge"
      />
      <img
        className="warning-gif warning-gif-right"
        src="photos/warning.gif"
        alt="warning"
      />
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

function getImageList(image) {
  if (!image) {
    return [];
  }

  return Array.isArray(image) ? image : [image];
}

function PageQuizQuestion({ questionData, questionIndex, navigateTo }) {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showResponse, setShowResponse] = useState(false);
  const quizAudioRef = useRef(null);

  const questionImages = getImageList(questionData.image);
  const showQuestionMarks = questionData.imageLayout === "side-question-marks";
  const showSideImages =
    questionData.imageLayout === "side" ||
    questionData.imageLayout === "side-question-marks";
  const showTriangleImages =
    questionData.imageLayout === "triangle-spin" ||
    (questionData.imageLayout === "triangle-before-response" && !showResponse);

  function stopQuizAudio() {
    if (!quizAudioRef.current) {
      return;
    }

    quizAudioRef.current.pause();
    quizAudioRef.current.currentTime = 0;
    quizAudioRef.current = null;
  }

  function playQuizAudio(audioSource) {
    stopQuizAudio();

    if (!audioSource) {
      return;
    }

    const audio = new Audio(audioSource);
    quizAudioRef.current = audio;
    audio.play().catch(() => { });
  }

  useEffect(() => {
    return stopQuizAudio;
  }, []);

  function validateAnswer() {
    if (selectedChoice !== null) {
      setShowResponse(true);
      playQuizAudio(questionData.responseAudio);
    }
  }

  return (
    <div className="page quiz-page" id={`page-quiz-${questionIndex + 1}`}>
      {showQuestionMarks && (
        <div className="quiz-question-marks" aria-hidden="true">
          {QUESTION_MARKS.map((mark) => (
            <span key={mark}>?</span>
          ))}
        </div>
      )}

      {showSideImages && (
        <div className="quiz-decorations quiz-side-images" aria-hidden="true">
          {questionImages.slice(0, 2).map((image) => (
            <img key={image} src={image} alt="" />
          ))}
        </div>
      )}

      {showTriangleImages && (
        <div className="quiz-decorations quiz-triangle-images" aria-hidden="true">
          {questionImages.slice(0, 3).map((image) => (
            <img key={image} src={image} alt="" />
          ))}
        </div>
      )}

      <h1 className="text_title quiz-title">{questionData.question}</h1>

      {questionData.image && !questionData.imageLayout && (
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
            {questionData.responseImage && (
              <div className="quiz-response-media">
                {questionData.responsePointer && (
                  <span className="quiz-response-pointer" aria-hidden="true">
                    {questionData.responsePointer}
                  </span>
                )}
                <img
                  className="quiz-response-image"
                  src={questionData.responseImage}
                  alt=""
                />
              </div>
            )}
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

function PageAfterQuizz({ navigateTo }) {
  return (
    <div className="page after-quiz-page" id="page-after-quizz">
      <h1 className="text_title">Weeee t'as fini le quiz</h1>
      <p className="after-quiz-score">Bravo, t'as eu 7/10 ! C'est un super score.</p>
      <p className="after-quiz-note">
        (mdrrrr j'ai enregistré aucune de tes réponses, tu aurais eu 7/10 quoi qu'il arrive)
      </p>
      <button
        className="arrow-btn"
        onClick={() => navigateTo(QUIZ_START_PAGE + quizQuestions.length + 1)}
        aria-label="Voir la récompense"
      >
        <ArrowIcon />
      </button>
    </div>
  );
}

function PageReward() {
  const [isRewardVisible, setIsRewardVisible] = useState(false);
  const rewardText = "7556-9866-2734\n(bon là c'est un faux code car le site est en pubic, mais dm moi et je te file le vrai!)";

  return (
    <div className="page reward-page" id="page-reward">
      <h1 className="text_title">Et pour te récompenser :</h1>
      <div className="reward-secret-row">
        <p className={`reward-secret-text${isRewardVisible ? "" : " is-blurred"}`}>
          {rewardText}
        </p>
        <button
          className="eye-btn"
          type="button"
          aria-label={isRewardVisible ? "Masquer le texte" : "Afficher le texte"}
          aria-pressed={isRewardVisible}
          onClick={() => setIsRewardVisible((visible) => !visible)}
        >
          <EyeIcon />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageHistory, setPageHistory] = useState([]);
  const audioRef = useRef(null);

  function stopCurrentAudio() {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current = null;
  }

  function playPageAudio(page) {
    stopCurrentAudio();

    const quizQuestion = quizQuestions[page - QUIZ_START_PAGE];
    const audioSource =
      nonQuizPageAudioSources[page] || quizQuestion?.questionAudio;

    if (!audioSource) {
      return;
    }

    const audio = new Audio(audioSource);
    audioRef.current = audio;
    audio.play().catch(() => { });
  }

  useEffect(() => {
    playPageAudio(currentPage);

    return stopCurrentAudio;
  }, []);

  function navigateTo(nextPage) {
    setPageHistory((history) => [...history, currentPage]);
    setCurrentPage(nextPage);
    playPageAudio(nextPage);
  }

  function goBack() {
    if (pageHistory.length === 0) {
      return;
    }

    const previousPage = pageHistory[pageHistory.length - 1];
    setPageHistory((history) => history.slice(0, -1));
    setCurrentPage(previousPage);
    playPageAudio(previousPage);
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
      {currentPage === QUIZ_START_PAGE + quizQuestions.length && (
        <PageAfterQuizz navigateTo={navigateTo} />
      )}
      {currentPage === QUIZ_START_PAGE + quizQuestions.length + 1 && (
        <PageReward />
      )}
    </div>
  );
}
