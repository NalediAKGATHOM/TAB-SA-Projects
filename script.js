document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission Alert
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form from submitting normally
            // Example: show a message on the page
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Your message has been sent!';
            contactForm.appendChild(successMessage);
        });
    }

    // Search Bar Input Event Listener
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', (event) => {
            const query = event.target.value;
            console.log('Search query:', query);
            // Implement search or filter functionality here
        });
    }

    // Initialize Slick Carousel
    if (typeof $ !== 'undefined' && $('.gallery-carousel').length) {
        $('.gallery-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    // Solar Quiz Functionality
    const solarQuizQuestions = [
        {
            question: "Why is solar installation important during loadshedding?",
            answers: [
                "It provides a reliable power source when the grid is down.",
                "It increases electricity bills.",
                "It requires no maintenance.",
                "It is a temporary solution."
            ],
            correct: 0
        },
        {
            question: "What is one benefit of using solar panels in South Africa?",
            answers: [
                "Reduces dependency on the national grid.",
                "Requires frequent battery replacements.",
                "Increases energy costs.",
                "Is not environmentally friendly."
            ],
            correct: 0
        }
    ];

    function setupQuiz(quizFormId, questions, resultDivId, submitBtnId) {
        const quizForm = document.getElementById(quizFormId);
        const resultDiv = document.getElementById(resultDivId);
        const submitBtn = document.getElementById(submitBtnId);

        if (quizForm && submitBtn) {
            quizForm.innerHTML = questions.map((q, index) => `
                <div class="question">
                    <p>${index + 1}. ${q.question}</p>
                    ${q.answers.map((a, i) => `
                        <label>
                            <input type="radio" name="${quizFormId}-q${index}" value="${i}" />
                            ${a}
                        </label>
                    `).join('')}
                </div>
            `).join('');

            submitBtn.addEventListener('click', () => {
                let score = 0;

                questions.forEach((q, index) => {
                    const selectedAnswer = document.querySelector(`input[name="${quizFormId}-q${index}"]:checked`);
                    if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
                        score++;
                    }
                });

                resultDiv.innerHTML = score < questions.length / 2
                    ? "Now you see why you need TABSA to help you. We are the future of this country, especially during loadshedding stages in South Africa."
                    : "You are the best and have gained more knowledge about solar panels!";
            });
        }
    }

    setupQuiz('solar-quiz-form', solarQuizQuestions, 'solar-quiz-result', 'solar-quiz-submit-btn');

    const generalQuizQuestions = [
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
        { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
        { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
        { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "J.K. Rowling"], answer: "Harper Lee" }
    ];

    setupQuiz('general-quiz-form', generalQuizQuestions, 'general-quiz-result', 'general-quiz-submit-btn');

    // 20 Questions Quiz Functionality
    function handleQuizSubmission(formId, correctAnswersArray, resultDivId) {
        const submitQuizBtn = document.getElementById(formId);
        if (submitQuizBtn) {
            submitQuizBtn.addEventListener('click', function (e) {
                e.preventDefault();

                const totalQuestions = correctAnswersArray.length;
                let correctAnswers = 0;

                for (let i = 1; i <= totalQuestions; i++) {
                    const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
                    if (userAnswer && userAnswer.value === correctAnswersArray[i - 1]) {
                        correctAnswers++;
                    }
                }

                const resultDiv = document.getElementById(resultDivId);
                if (resultDiv) {
                    resultDiv.innerHTML = '';

                    const resultClass = correctAnswers === totalQuestions ? 'winner' : 'loser';
                    const resultMessage = correctAnswers === totalQuestions
                        ? 'Congratulations! You won the quiz!'
                        : 'Sorry, you lost. Better luck next time!';

                    const resultElement = document.createElement('div');
                    resultElement.className = resultClass + ' active';
                    resultElement.innerHTML = `<div class="message">${resultMessage}</div>`;

                    resultDiv.appendChild(resultElement);

                    // Remove active class after the animation to allow replay
                    setTimeout(() => {
                        resultElement.classList.remove('active');
                    }, 1000);
                }
            });
        }
    }

    handleQuizSubmission('submit-quiz', [
        'a', 'a', 'b', 'a', 'c', 'b', 'a', 'c', 'b', 'a', // Add correct answers for questions 1-10
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a'  // Add correct answers for questions 11-20
    ], 'result');

    // Open Chatbot Function (Placeholder)
    function openChat() {
        alert('Chat functionality is not yet implemented.');
    }

    // Example Function for Game Page
    function playGame(gameId) {
        alert('Starting game: ' + gameId);
    }
});

// Slick Carousel Initialization
$(document).ready(function(){
    $('.gallery-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});







