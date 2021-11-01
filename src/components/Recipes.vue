<template>
  <div class="hello">
    <router-link to="/recipes" class="add">Add Recipe</router-link>
    <h1>{{ this.$route.name }}</h1>
    <span
      >There are <b class="display-4 text-danger">{{ recipesCount }}</b> recepies total
    </span>
    <table class="table table-hover my-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th class="text-center">Source</th>
          <th>Number of ingredients</th>
          <th>Ingredients</th>
          <th>Preparation instructions</th>
          <th>Preparation time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(recipe, index) in recipes" :key="index">
          <td>{{ index }}</td>
          <td>{{ recipe.name }}</td>
          <td class="text-center">
            <a
              :href="recipe.source"
              target="_blank"
              class="link-data"
              v-if="recipe.source.length > 0 && recipe.source.includes('http')"
              >{{ recipe.source }}</a
            >
            <span v-else-if="recipe.source.length > 0">{{
              recipe.source
            }}</span>
            <span v-else>/</span>
          </td>
          <td class="text-center">{{ recipe.listOfIngredients.length }}</td>
          <td v-if="recipe.listOfIngredients.length > 3">
            {{ recipe.listOfIngredients.slice(0, 3).join(", ") }} ...
          </td>
          <td v-else>{{ recipe.listOfIngredients.join(", ") }}</td>

          <td v-if="recipe.preparationInstructions.length > 50">
            {{ recipe.preparationInstructions.substring(0, 50) }}...{{
              recipe.preparationInstructions.split(" ").splice(-1)[0]
            }}
          </td>
          <td v-else>{{ recipe.preparationInstructions }}</td>

          <td class="text-center">
            <span v-if="recipe.preparationTime.length === 5">
              {{ recipe.preparationTime.slice(0, 2) }} h :
              {{ recipe.preparationTime.slice(3, 5) }} m</span
            >
            <span
              v-else-if="
                recipe.preparationTime.length == 2 &&
                  recipe.preparationTime >= 60
              "
            >
              {{ Math.floor(recipe.preparationTime / 60) }} h :
              {{ recipe.preparationTime % 60 }} m</span
            >
            <span
              v-else-if="
                recipe.preparationTime.length == 2 &&
                  recipe.preparationTime < 60
              "
            >
              {{ recipe.preparationTime % 60 }}m</span
            >
          </td>
          <td>
            <router-link
              v-if="recipe.status == false"
              :to="{
                name: 'SingleRecipe',
                params: {
                  id: index,
                  name: recipe.name,
                  source: recipe.source,
                  listOfIngredients: recipe.listOfIngredients,
                  preparationInstructions: recipe.preparationInstructions,
                  preparationTime: recipe.preparationTime,
                  status: recipe.status,
                  recipeA: recipe,
                },
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                />
              </svg>
            </router-link>
            <ConfirmationModul
              :recipeStatus="recipe.status"
              :idx="index"
              :recipe="recipe"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ConfirmationModul from "./ConfirmationModul";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Recipes",
  components: {
    ConfirmationModul,
  },
  computed: {
    ...mapState(["recipes"]),
    ...mapGetters(["recipesCount"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 80%;
  margin: auto;
}
.add {
  float: right;
}

table tr td a {
  text-decoration: none;
  color: black;
  margin-right: 7px;
}

table tr td a.link-data {
  text-decoration: underline;
  color: blue;
}
</style>
