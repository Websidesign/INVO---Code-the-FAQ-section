export const FaqComponent = () => {
  const faqComponent = document.querySelector(".faq-component");

  const faqAllQuestions = faqComponent.querySelectorAll(
    ".faq-question-partial"
  );

  faqAllQuestions.forEach((faqSingleQuestion) => {
    new ResizeObserver(listenToQuestionResize).observe(faqSingleQuestion);

    const faqAnswer = faqSingleQuestion.querySelector(
      ".faq-question-partial__answer"
    );
    faqSingleQuestion.style.setProperty(
      "--faq-answer-height",
      `${faqAnswer.scrollHeight}px`
    );

    faqSingleQuestion.addEventListener("click", () => {
      foldAllSiblingQuestions(faqSingleQuestion);
      faqSingleQuestion.toggleAttribute("data-question-expanded");
    });
  });

  function listenToQuestionResize(faqQuestionToListen) {
    // Get the question element from the ResizeObserverEntry object
    // Since faqQuestionToListen is an array of ResizeObserverEntry objects and in our case
    // there is only one element in the array, we use [0] to get that element.
    // We then use .target to get the observed element itself.
    const faqQuestion = faqQuestionToListen[0].target;

    // Get the answer element for the question
    const faqAnswer = faqQuestion.querySelector(
      ".faq-question-partial__answer"
    );

    // Set the CSS variable --faq-answer-height to the height of the answer element
    faqQuestion.style.setProperty(
      "--faq-answer-height",
      `${faqAnswer.scrollHeight}px`
    );
  }

  function foldAllSiblingQuestions(clickedQuestion) {
    // Iterate through each question element
    faqAllQuestions.forEach((faqQuestionToFold) => {
      // If the question element is not the clicked question,
      // remove the "data-question-expanded" attribute from it
      if (faqQuestionToFold != clickedQuestion) {
        faqQuestionToFold.removeAttribute("data-question-expanded");
      }
    });
  }
};
