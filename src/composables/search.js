import { ref, watch } from "vue";
import { useApi } from "./api";

const { getSearchData } = useApi();
const isOpen = ref(false);

export function useSearch() {
  const query = ref("");
  const result = ref([]);
  const isFetching = ref(false);

  function _reset() {
    query.value = "";
    result.value = [];
  }

  function openSearch() {
    isOpen.value = true;
  }

  function closeSearch() {
    isOpen.value = false;
    _reset();
  }

  const getSearch = async (query) => {
    isFetching.value = true;
    try {
      const response = await getSearchData(query);
      result.value = response;
    } finally {
      isFetching.value = false;
    }
  };

  watch(
    () => query.value,
    (newQuery) => {
      if (newQuery.length) {
        getSearch(newQuery);
      } else {
        _reset();
      }
    },
  );

  return { isOpen, query, result, isFetching, openSearch, closeSearch };
}
