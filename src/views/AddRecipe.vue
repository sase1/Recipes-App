<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 offset-md-2">
        <h1>Add Recipe</h1>
        <form action="" @submit.prevent>
          <div class="my-3">
            <input
              placeholder="Recipe name"
              v-model="newRecipe.name"
              type="text"
              class="form-control"
            />
          </div>
          <div class="my-3">
            <input
              class="form-control"
              placeholder="Recipe source"
              v-model="newRecipe.source"
              type="text"
            />
          </div>
          <label>Ingredients</label>
          <select
            name=""
            id=""
            v-model="newRecipe.listOfIngredients"
            multiple
            class="form-control"
          >
            <option
              :value="ingredient"
              v-for="(ingredient, index) in this.$store.state.ingredients"
              :key="index"
              >{{ ingredient }}</option
            >
          </select>
          <div class="my-3">
            <input
              class="form-control"
              placeholder="Preparation time (HH:MM)"
              v-model="newRecipe.preparationTime"
              type="text"
              v-on:keypress="isNumber()"
              :maxlength="this.maxInputLimit"
            />
          </div>
          <textarea
            rows="6"
            class="form-control my-3"
            placeholder="Preparation instructions"
            v-model="newRecipe.preparationInstructions"
          ></textarea>
          <button @click="addRecipe" class="btn btn-info mx-3">Add</button>
          <button @click="cancelRecipe" class="btn btn-primary">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddRecipe",
  data() {
    return {
      maxInputLimit: 5,
      minInputLimit: 2,
      newRecipe: {
        name: "",
        source: "",
        listOfIngredients: [],
        preparationTime: "",
        preparationInstructions: "",
        status: false,
      },
    };
  },

  methods: {
    ...mapMutations(["ADD_RECIPE"]),
    addRecipe() {
      if (
        this.newRecipe.name.length < 1 ||
        this.newRecipe.preparationInstructions.length < 1 ||
        this.newRecipe.listOfIngredients.length < 1 ||
        this.newRecipe.preparationTime.length < this.minInputLimit ||
        this.newRecipe.preparationTime.length == this.minInputLimit + 1 ||
        this.newRecipe.preparationTime.length == this.minInputLimit + 2 ||
        this.newRecipe.preparationTime.slice(3, 5) > 59
      ) {
        alert(
          "ANOTHER REMINDER !!" +
            "\n" +
            "1. Fill Recipe name and Preparation instructions inputs" +
            "\n" +
            "2. Recipe source is not mandatory" +
            "\n" +
            "3. Choose  Ingredient/s " +
            "\n" +
            "4. Time should be in HH:MM or only MM formats " +
            "\n" +
            "5. In HH:MM format MM can't accept value larger than 59"
        );
      } else {
        this.ADD_RECIPE(this.newRecipe);
        this.$router.push("/");
      }
    },
    cancelRecipe(){
        this.$router.push("/");
    },

    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else if (this.newRecipe.preparationTime.length == 2) {
        this.newRecipe.preparationTime =
          this.newRecipe.preparationTime.slice(0, 3) +
          ":" +
          this.newRecipe.preparationTime.slice(3);
      } else {
        return true;
      }
    },
  },
  mounted() {
    setTimeout(function() {
      alert(
        "1. Fill Recipe name and Preparation instructions inputs" +
          "\n" +
          "2. Recipe source is not mandatory" +
          "\n" +
          "3. Choose  Ingredient/s " +
          "\n" +
          "4. Time should be in HH:MM or only MM formats " +
          "\n" +
          "5. In HH:MM format '*MM' value can't be larger than 59"
      );
    }, 1000);
  },
};
</script>

<style scoped>

select {
  min-height: 200px;
}

</style>
