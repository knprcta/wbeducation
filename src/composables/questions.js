import { ref, computed } from "vue";
import { useApi } from "./api";
import { useCurrentPage } from "./currentPage";

const { getQuestionsData } = useApi();
const { update } = useCurrentPage();

export function useQuestions() {
  const questions = ref([]);

  const currentQuestionIndex = ref(0);
  const selectedAnswer = ref(null);
  const isFetching = ref(false);
  const onTimeout = ref(false);
  const onEnd = ref(false);
  const correctAnswersCount = ref(0);

  const currentQuestion = computed(() => {
    return questions.value[currentQuestionIndex.value];
  });

  let caTimeoutId = null;

  function _resetData() {
    questions.value = [];
    currentQuestionIndex.value = 0;
    selectedAnswer.value = null;
    isFetching.value = false;
    onTimeout.value = false;
    onEnd.value = false;
    correctAnswersCount.value = 0;
    clearTimeout(caTimeoutId);
  }

  const getQuestions = async (id) => {
    _resetData();
    isFetching.value = true;
    try {
      const response = await getQuestionsData(id);
      questions.value = response;
      update({
        topic: response[0].topic_header,
        title: "Тест",
      });
    } finally {
      isFetching.value = false;
    }
  };

  function checkAnswer(answer) {
    onTimeout.value = true;
    selectedAnswer.value = answer.id;
    if (answer.is_true) {
      correctAnswersCount.value++;
    }

    caTimeoutId = setTimeout(() => {
      selectedAnswer.value = null;
      if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
      } else {
        onEnd.value = true;
      }
      onTimeout.value = false;
    }, 3000);
  }

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    correctAnswersCount,
    isFetching,
    onTimeout,
    onEnd,
    getQuestions,
    checkAnswer,
  };
}
