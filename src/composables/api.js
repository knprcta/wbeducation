import axios from "axios";
import { useAlert } from "./alert";

const instance = axios.create({
  baseURL: "https://wbeducation.ru/api/",
});

const { openAlert } = useAlert();

function _checkRes(response) {
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(`Ошибка ${response.status}`);
  }
}

export function useApi() {
  const getTopicsData = async () => {
    try {
      const response = await instance.get("menu");
      return _checkRes(response);
    } catch (error) {
      openAlert(error.response.status, error.message);
    }
  };

  const getInstructionData = async (slug) => {
    try {
      const response = await instance.get(`instructions/${slug}`);
      return _checkRes(response);
    } catch (error) {
      openAlert(error.response.status, error.message);
    }
  };

  const getQuestionsData = async (topicId) => {
    try {
      const response = await instance.get(`questions/${topicId}`);
      return _checkRes(response);
    } catch (error) {
      openAlert(error.response.status, error.message);
    }
  };

  const checkAnswerData = async (answerId) => {
    try {
      const response = await instance.get(`checkanswer/${answerId}`);
      return _checkRes(response);
    } catch (error) {
      openAlert(error.response.status, error.message);
    }
  };

  const getSearchData = async (query) => {
    try {
      const response = await instance.get(`search/?q=${query}`);
      return _checkRes(response);
    } catch (error) {
      openAlert(error.response.status, error.message);
    }
  };

  return {
    getTopicsData,
    getInstructionData,
    getQuestionsData,
    checkAnswerData,
    getSearchData,
  };
}
