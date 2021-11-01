<template>
  <div class="buttons">
    <span v-if="recipeStatus" class="status-buttons">
      <button class="btn btn-success" @click="deleteRecipes(idx)">
        Yes
      </button>
      <button @click="cancel(recipe)" class="btn btn-danger">
        No
      </button>
    </span>
    <span v-else>
      <button @click="deleteButton(recipe)" class="btn btn-warning">
        x
      </button>
    </span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    recipeStatus: Boolean,
    idx: Number,
    recipe: Object,
  },
  data() {
    return {
      locationData: `http://localhost:8080/recipe/${this.idx}`,
    };
  },
  name: "ConfirmationModul",
  methods: {
    ...mapActions(["deleteRecipe"]),
    deleteButton(itm) {
      if (window.location.href == this.locationData) {
        this.$router.push("/");
      }
      itm.status = true;
    },
    deleteRecipes(recipe) {
      this.deleteRecipe(recipe);
    },
    cancel(itm) {
      itm.status = false;
    },
  },
};
</script>

<style scoped>
div.buttons {
  display: inline-block;
  margin-left: 4px;
}

span.status-buttons {
  display: flex;
}
</style>
