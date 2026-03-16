

const quizQuestions = [
    {
        "id": 1,
        "question": "How do you approach debugging?",
        "description": "Select your typical debugging strategy",
        "answers": [
            { "text": "Console.log() everything untill it works", "points": { "stackOverflow": 2, "debugger": 1, "ninja":3 } },
            { "text": "Use debugger and step through code methodically", "points": {"architect": 3, "debugger": 2, "perfectionist": 1} },
            { "text": "Search Stack Overflow for similar issues", "points": { "stackOverflow": 3, "ninja": 2, "debugger": 1} },
            { "text": "Rewrite the entire function from scratch", "points": { "architect": 2, "perfectionist": 3, "magnet": 1} }
        ]
    },
    {
        "id": 2,
        "question": "What's your reaction to a new framework?",
        "description": "How do you handle new technologies",
        "answers" : [
            { "text": "Learn it immediately and rebuild everything", "points": { "architect": 3, "perfectionist": 2, "magnet": 1} },
            { "text": "Wait until it's stable and well-documented", "points": {"perfectionist": 3, "architect": 2, "debugger": 1} },
            { "text": "Copy examples from the documentation", "points": {"ninja": 3, "stackOverflow": 2, "magnet": 1} },
            { "text": "Avoid it until absolutely necessary", "points": { "debugger": 2, "magnet": 3, "perfectionist": 1} }
        ]
    },
    {
        "id": 3,
        "question": "How do you handle deadlines?",
        "description": "Your approach when time is running out",
        "answers": [
            { "text": "Plan meticulously and finish early", "points": { "architect": 3, "perfectionist": 2, "debugger": 1}},
            { "text": "Work best under pressure at the last minute", "points": { "debugger" : 3, "magnet": 2, "ninja": 1}},
            { "text": "Find similar code online and adapt it", "points": { "ninja": 3, "stackOverflow": 2, "magnet": 1}},
            { "text": "Ask for help on forums and communities", "points": { "stackOverflow": 3, "debugger": 2, "ninja": 1}}
        ]
    },
    {
        "id": 4,
        "question": "What's your code commenting style?",
        "description": "How do you document your code?",
        "answers": [
            { "text": "Every line has a detailed comment", "points": { "perfectionist": 3, "architect": 2, "debugger": 1}},
            { "text": "Only comment complex alogorithms", "points": { "architect": 3, "perfectionist": 2, "debugger": 1}},
            { "text": "Comments? The code is self-explanatory", "points": { "ninja": 3, "magnet": 2, "stackOverflow": 1}},
            { "text": "Copy comments from Stack Overflow too", "points": { "stackOverflow": 3, "ninja": 2, "magnet": 1}}
        ]
    },
    {
        "id": 5,
        "question": "How do you organize your projects?",
        "description": "Your approach to project structure",
        "answers": [
            { "text": "Carefully planned folder structure", "points": { "architect": 3, "perfectionist": 2, "debugger": 1}},
            { "text": "Everything in one folder until it's messy", "points": { "magnet": 3, "debugger": 2, "ninja": 1}},
            { "text": "Follow whatever the tutorial used", "points": { "ninja": 3, "stackOverflow": 2, "magnet": 1}},
            { "text": "Constantly reorganizing as I work", "points": { "perfectionist": 3, "architect": 2, "debugger": 1}}
        ]
    },
    {
        "id": 6,
        "question": "What's your testing strategy?",
        "description": "How do you ensure code quality?",
        "answers": [
            { "text": "Write comprehensive tests before coding", "points": { "perfectionist": 3, "architect": 2, "debugger": 1}},
            { "text": "Test manually and hope for the best", "points": { "magnet": 3, "debugger": 2, "ninja": 1}},
            { "text": "Copy test cases from similar projects", "points": { "ninja": 3, "stackOverflow": 2, "magnet": 1}},
            { "text": "Only test when something breaks", "points": { "debugger": 3, "magnet": 2, "stackOverflow": 1}}
        ]
    },
    {
        "id": 7,
        "question": "How do you learn new concepts?",
        "description": "Your preferred learning method",
        "answers": [
            { "text": "Read official documentation thoroughly", "points": { "architect": 3, "perfectionist": 2, "debugger": 1}},
            { "text": "Watch YouTube tutorials and follow along", "points": { "ninja": 3, "stackOverflow": 2, "magnet": 1}},
            { "text": "Trial and error with lots of Googling", "points": { "debugger": 3, "stackOverflow": 2, "magnet": 1}},
            { "text": "Find a GitHub repo and study the code", "points": { "stackOverflow": 3, "ninja": 2, "architect": 1}}
        ]
    },
    {
        "id": 8,
        "question": "What's your IDE setup like?",
        "description": "Describe your development environment",
        "answers": [
            { "text": "Minimalist with only essential plugins", "points": { "perfectionist": 3, "architect": 2, "debugger": 1}},
            { "text": "Every plugin imaginable is installed", "points": { "magnet": 3, "debugger": 2, "stackOverflow": 1}},
            { "text": "Copied setup from a popular developer", "points": { "ninja": 3, "stackOverflow": 2, "magnet": 1}},
            { "text": "Constantly tweaking and optimizing", "points": { "architect": 3, "perfectionist": 2, "debugger": 1}}
        ]
    }
];

const personalityTypes = [
    {
        "id": "stackOverflow",
        "name": "Stack Overflow Wizard",
        "title": "The Stack Overflow Wizard",
        "description": "You have an uncanny ability to find the exact solution on Stack Overflow within seconds. Your browser has 50+ tabs open, all leading to obscure forum threads from 2012. You know that the real magic happens in the comments section.",
        "icon": "fas fa-moon",
        "color": "from-purple-500 to-pink-500",
        "bgColor": "bg-purple-500/20",
        "strengths": [
            "Peak productivity at odd hours",
            "Exceptional focus during crunch time",
            "Can function on minimal sleep",
            "Master of the debugger tool"
        ]
    },
    {
        "id": "ninja",
        "name": "Copy-Paste Ninja",
        "title": "The Copy-Paste Ninja",
        "description": "You move through codebases with silent efficiency, borrowing the best parts from GitHub, Stack Overflow, and documentation. Your greatest skill is knowing what to copy and how to adapt it seamlessly.",
        "icon": "fas fa-paste",
        "color": "from-green-500 to-emerald-400",
        "bgColor": "bg-green-500/20",
        "strengths": [
            "Rapid prototyping ability",
            "Vast library of code snippets",
            "Expert at adapting existing code",
            "Never reinvents the wheel"
        ]
    },
    {
        "id": "architect",
        "name": "Perfectionist Architect",
        "title": "The Perfectionist Architect",
        "description": "You plan every detail before writing a single line of code. Your diagrams have diagrams, and your documentation is more thorough than the actual implementation. Everything must be scalable, maintainable, and perfect.",
        "icon": "fas fa-drafting-compass",
        "color": "from-amber-500 to-orange-400",
        "bgColor": "bg-amber-500/20",
        "strengths": [
            "Meticulous planning skills",
            "Beautifully documented code",
            "Future-proof architecture",
            "Attention to every detail"
        ]
    },
    {
        "id": "magnet",
        "name": "Bug Magnet",
        "title": "The Bug Magnet",
        "description": "You have a supernatural talent for finding edge cases and breaking things in ways nobody imagined. Your code might be buggy, but you've discovered more issues than the entire QA team combined.",
        "icon": "fas fa-bug",
        "color": "from-red-500 to-rose-400",
        "bgColor": "bg-red-500/20",
        "strengths": [
            "Uncanny ability to find edge cases",
            "Extensive debugging experience",
            "Creative problem-solving",
            "Nothing surprises you anymore"
        ]
    }
];

// ===================== STATE MANAGEMENT =======================
let currentQuestionIndex = 0;
let userAnswers = [];
let scores = {
    stackOverflow: 0,
    debugger: 0,
    ninja: 0,
    architect: 0,
    perfectionist: 0,
    magnet: 0
};

// ================== DOM ELEMENTS =====================
const landingSection = document.getElementById('landing-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartTestBtn = document.getElementById('restart-test-btn');
const shareResultBtn = document.getElementById('share-result-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const resultType = document.getElementById('result-type');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultIcon = document.getElementById('result-icon');
const strengthsContainer = document.getElementById('strengths-container');
const scoreBars = document.getElementById('score-bars');

// ================= RENDER FUNCTIONS =================
function renderQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = question.id;
    totalQuestionsSpan.textContent = quizQuestions.length;

    // Calculate progress
    const progress = ((question.id) / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressPercent.textContent = `${Math.round(progress)}%`;

    // Update button states
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === quizQuestions.length - 1 ? "See Results" : "Next Question";

    // Render answers
    answersContainer.innerHTML = renderAnswers(question.answers, question.id);

    // Check ig user already answered this question
    const existingAnswer = userAnswers.find(a => a.questionId === question.id);
    if (existingAnswer) {
        const answerElement = document.querySelector(`[data-answer-index="${existingAnswer.answerIndex}"]`);
        if (answerElement) {
            answerElement.classList.add('border-dev-primary', 'bg-dev-primary/10');
        }
    }
}

function renderAnswers(answers, questionId) {
    return answers.map((answers, index) =>`
        <button class="answer-card w-full text-left p-5 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-dev-primary transition-all duration-200 flex items-start group"
        data-answer-index="${index}"
        data-question-id="${questionId}">
            <div class="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-700 group-hover:border-dev-primary mt-1 mr-4 flex items-center justify-center">
                <div class="w-3 h-3 rounded-full bg-dev-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="flex-1">
                <div class="font-medium text-lg mb-1">${answers.text}</div>
                <div class="text-gray-500 text-sm">Select this answer</div>
            </div>
            <div class="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <i class="fas fa-chevron-right text-gray-500"></i>
            </div>
        </button>
`).join('');
}

function renderResult(result) {
    function renderResult(result) {
    if(resultIcon) {
        resultIcon.className = `w-20 h-20 rounded-2xl flex items-center justify-center ${result.bgColor}`;
        resultIcon.innerHTML = `<i class="${result.icon} text-3xl text-white"></i>`;
    }

    resultType.textContent = result.name;
    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;

    strengthsContainer.innerHTML = renderStrengths(result.strengths);
    scoreBars.innerHTML = renderScoreBars();
}

    // Set icon
    resultIcon.className = `w-20 h-20 rounded-2xl flex items-center justify-center ${result.bgColor}`;
    resultIcon.innerHTML = `<i class="${result.icon} text-3xl text-white"></i>`;

    // Render strengths 
    strengthsContainer.innerHTML = renderStrengths(result.strengths);

    // Render scores bars
    scoreBars.innerHTML = renderScoreBars();
}

function renderStrengths(strengths) {
    return strengths.map(strength =>`
        <div class="flex items-center p-3 bg-black/30 rounded-lg">
            <i class="fas fa-check-circle text-dev-primary mr-3"></i>
            <span>${strength}</span>
        </div>
    `).join('');
}

function renderScoreBars() {
    const maxScore = Math.max(...Object.values(scores));
    return Object.entries(scores).map(([type, score]) => {
        const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
        const personality = personalityTypes.find(p => p.id === type);
        if (!personality) return '';

        return `
        <div class="flex items-center">
            <div class="w-24 text-sm font-medium truncate mr-3">${personality.name}</div>
            <div class="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full rounded-full bg-gradient-to-r ${personality.color}" style="width: ${percentage}%"></div>
            </div>
            <div class="w-10 text-right text-sm font-bold ml-3">${score}</div>
        </div>
    `;
    }).join('');
}

// ====================== EVENT HANDLERS =======================
    function handleAnswerClick(event) {
        const answerCard = event.target.closest('[data-answer-index]');
        if (!answerCard) return;

        const questionId = parseInt(answerCard.dataset.questionId);
        const answerIndex = parseInt(answerCard.dataset.answerIndex);
        const question = quizQuestions.find(q => q.id === questionId);
        const answer = question.answers[answerIndex];

        // Remove selection from other answers in this question
        document.querySelectorAll(`[data-question-id="${questionId}"]`).forEach(card => { 
            card.classList.remove('border-dev-primary', 'bg-dev-primary/10');
        });

        // Add selection to clicked answer
        answerCard.classList.add('border-dev-primary', 'bg-dev-primary/10');

        // Save answer
        const existingAnswerIndex = userAnswers.findIndex(a => a.questionId === questionId);
        if (existingAnswerIndex !== -1) {
            // Remove previous points
            const prevAnswer = question.answers[userAnswers[existingAnswerIndex].answerIndex];
            Object.entries(prevAnswer.points).forEach(([type, points]) => {
                scores[type] -= points;
            });
            // Update answer
            userAnswers[existingAnswerIndex] = { questionId, answerIndex };
        } else {
            userAnswers.push({ questionId, answerIndex });
        }

        // Add new points 
        Object.entries(answer.points).forEach(([type, points]) => {
            scores[type] += points;
        });

        // Enable next button
        nextBtn.disabled = false;
    }

    function calculateResult () {
        // Find personality with highest score
        let maxScore = 0;
        let resultType = 'stackOverflow';

        Object.entries(scores).forEach(([type, score]) => {
            if (score > maxScore) {
                maxScore = score;
                resultType = type;
            }
        });

        return personalityTypes.find(p => p.id === resultType)  || personalityTypes[0];
    }

    function startTest() {
        landingSection.classList.add('hidden');
        quizSection.classList.remove('hidden');
        renderQuestion();

        // Show nav button in header
        restartBtn.classList.remove('hidden');
        shareBtn.classList.remove('hidden');
    }

    function showResults() {
        quizSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        const result = calculateResult();
        renderResult(result);
    }

    function restartTest(){
        currentQuestionIndex = 0;
        userAnswers = [];
        scores = {
            stackOverflow: 0,
            debugger: 0,
            ninja: 0,
            architect: 0,
            perfectionist: 0,
            magnet: 0
        };

        resultsSection.classList.add('hidden');
        landingSection.classList.remove('hidden');

        // Hide nav buttons in header
        restartBtn.classList.add('hidden');
        shareBtn.classList.add('hidden');
    }

    function shareResult() {
        const result = calculateResult();
        const text = `I'm a ${result.name}! Find out your developer personality at ${window.location.href}`;

        if (navigator.share) {
            navigator.share({
                title: 'My Developer Personality',
                text: text,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(text).then(() => {
                alert('Result copied to clipboard! Share it with your developer friends.');
            });
        }
    }

    // ================== EVENT LISTENERS ========================
    startBtn.addEventListener('click', startTest);

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    });

    restartTestBtn.addEventListener('click', restartTest);
    shareResultBtn.addEventListener('click', shareResult);
    restartBtn.addEventListener('click', restartTest);
    shareBtn.addEventListener('click', shareResult);

    // Delegated event listener for answer cards
    answersContainer.addEventListener('click', handleAnswerClick);

    // ===================== INITIALIZATION =======================
    totalQuestionsSpan.textContent = quizQuestions.length;

    // Initialize button states
    prevBtn.disabled = true;

    // Add smooth transition
    document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('opacity-100');
    });
