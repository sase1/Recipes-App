import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [
      {
        name: "Roasted pork",
        source: "found on the web somewhere",
        listOfIngredients: [ "Meat", "Eggs"],
        preparationTime: "09",
        preparationInstructions: "first bake serve",
        status: false,
      },
      {
        name: "Rotten  egs",
        source: "",
        listOfIngredients: ["Tomato", " Sugar", " Potatoes"],
        preparationTime: "60",
        preparationInstructions:
          "Maecenas vehicula metus sapien, sit amet vat eros mauris, a vestibulum elit condimentum ac lastWord",
        status: false,
      },
      {
        name: "Pizza carbonara",
        source: "https://www.allrecipes.com/recipes/",
        listOfIngredients: ["Milk", " Cheese", "Eggs", " Peppers", "Flour"],
        preparationTime: "01:38",
        preparationInstructions:
          "Set the oven at 220C/gas mark 8. Line a baking sheet with parchment. Peel and core 750g of apples, then roughly chop them. Place the pieces in a medium-sized deep saucepan with 2 tbsp of water. Bring them to the boil, then lower the heat and let them cook over a moderate heat for 10-15 minutes, until fluffy. Stir them regularly so they don’t stick. Stir in 75g of sultanas, a half tsp of mixed spice and half a tsp of ground cinnamon and set aside to cool.",
        status: false,
      },
    ],
    ingredients: [
      "Flour",
      "Milk",
      "Oil",
      "Salt",
      "Sugar",
      "Eggs",
      "Tomatoes",
      "Peppers",
      "Cheese",
      "Potatoes",
      "Meat",
    ],
  },

  mutations: {
    ADD_RECIPE: (state, recipe) => {
      state.recipes.push(recipe);
      console.log(state.recipes);
    },
    DELETE_RECIPE(state, recipe) {
      state.recipes.splice(recipe, 1);
      console.log(state.recipes);
    },
  },

  actions: {
    deleteRecipe: (context, recipe) => {
      context.commit("DELETE_RECIPE", recipe);
    },
  },

  getters:{
    recipesCount: state => {
      return state.recipes.length
    }
  },
  
  modules: {},
});
