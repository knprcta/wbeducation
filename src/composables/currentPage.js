import { ref } from "vue";

const topic = ref("");
const title = ref("");

export function useCurrentPage() {
  function update(data) {
    topic.value = data.topic;
    title.value = data.title;
  }

  return { topic, title, update };
}
