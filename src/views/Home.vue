<template>
  <div class="home">
    <WorkoutCard />
  </div>
</template>

<script>
// @ is an alias to /src
import WorkoutCard from "@/components/WorkoutCard.vue";

export default {
  name: "Home",
  components: {
    WorkoutCard,
  },
};
</script>
