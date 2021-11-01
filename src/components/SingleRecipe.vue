<template>
  <div class="container-fluid">
    <div class="row mb-5" v-if="messageStatus">
      <div class="col-md-8 offset-md-2 text-center">
        <h2 class="display-3">{{ message }}</h2>
      </div>
    </div>
    <div class="row" v-if="!messageStatus">
      <div class="col-md-5 offset-md-1 border-end">
        <div class="my-3">
          <router-link to="/">All Recipes list</router-link>
        </div>
        <div>
          <h1 class="text-danger">Name:</h1>
          <p class="text-success">{{ $route.params.name }}</p>
        </div>
        <div v-if="$route.params.source.length > 0">
          <h2 class="text-danger">Source:</h2>
          <p class="text-success">{{ $route.params.source }}</p>
        </div>
        <div>
          <h2 class="text-danger">Number of ingredients:</h2>
          <p class="text-success">
            {{ $route.params.listOfIngredients.length }}
          </p>
        </div>
        <div>
          <h2 class="text-danger">List of Ingredients:</h2>
          <ol>
            <li
              class="text-success"
              v-for="ingredient in $route.params.listOfIngredients"
              :key="ingredient"
            >
              {{ ingredient }}
            </li>
          </ol>
        </div>
        <div>
          <h2 class="text-danger">Preparation time:</h2>
          <span v-if="$route.params.preparationTime.length === 5">
            {{ $route.params.preparationTime.slice(0, 2) }} h :{{
              $route.params.preparationTime.slice(3, 5)
            }}
            m</span
          >
          <span
            v-else-if="
              $route.params.preparationTime.length === 2 &&
                $route.params.preparationTime >= 60
            "
          >
            {{ Math.floor($route.params.preparationTime / 60) }} h
            {{ $route.params.preparationTime % 60 }} m</span
          >
          <span
            v-else-if="
              $route.params.preparationTime.length == 2 &&
                $route.params.preparationTime < 60
            "
          >
            {{ $route.params.preparationTime % 60 }}m</span
          >
        </div>
        <div>
          <button @click="showModal = true" class="btn btn-warning mt-5">
            Delete this recipe
          </button>
        </div>
        <div v-if="showModal" @close="showModal = false">
          <button
            class="btn btn-danger m-3"
            @click="deleteRecipes($route.params.id)"
          >
            Yes
          </button>
          <button @click="showModal = false" class="btn btn-info">
            No
          </button>
        </div>
        <!-- <ConfirmationModul
          :recipeStatus="$route.params.status"
          :idx="$route.params.id"
          :recipe="$route.params.recipeA"
        /> -->
      </div>
      <div class="col-md-6">
        <div>
          <h2 class="text-danger">Preparation instructions:</h2>
          <p class="text-success">
            {{ $route.params.preparationInstructions }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ConfirmationModul from "./ConfirmationModul.vue";
import { mapActions } from "vuex";
export default {
  // components: { ConfirmationModul },
  name: "SingleRecipe",
  data() {
    return {
      showModal: false,
      messageStatus: false,
      message: "RECIPE IS SUCCESSFULLY DELETED!",
    };
  },
  methods: {
    ...mapActions(["deleteRecipe"]),

    deleteRecipes(recipe) {
      this.deleteRecipe(recipe);
      this.messageStatus = !this.messageStatus;
      setTimeout(() => this.$router.push({ path: "/" }), 1200);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
