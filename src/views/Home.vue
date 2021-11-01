<template>
  <div class="home">
    <Recipes />
  </div>
</template>

<script>
// @ is an alias to /src
import Recipes from "@/components/Recipes";
export default {
  name: "Home",
  components: {
    Recipes,
  },
};
</script>
