<template>
  <v-container>
    <table border="1" width="80%" style="border-collapse: collapse;">
      <tr>
        <th>Name</th>
        <th>Muscle</th>
        <th>rest</th>
        <th></th>
      </tr>

      <!-- Add -->
      <tr>
        <td><input type="text" v-model="name" /></td>
        <td><input type="text" v-model="muscle" /></td>
        <td><input type="text" v-model="rest" /></td>
        <td><input type="button" value="Add" @click="addRecord()" /></td>
      </tr>

      <!-- Update/Delete -->
      <tr v-for="(workout, index) in workouts" v-bind:key="{ index }">
        <td><input type="text" v-model="workout.name" /></td>
        <td><input type="text" v-model="workout.rest" /></td>
        <td>
          <input
            type="button"
            value="Update"
            @click="updateRecord(index, workout.id)"
          />&nbsp;
          <input
            type="button"
            value="Delete"
            @click="deleteRecord(index, workout.id)"
          />
        </td>
      </tr>
    </table>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ListWorkout",

  data: () => ({
    workouts: "",
    name: "",
    muscle: "",
    rest: "",
  }),
  methods: {
    allRecords: function() {
      axios
        .post("ajaxfile.php", {
          request: 1,
        })
        .then(function(response) {
          this.workouts = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addRecord: function() {
      if (this.name != "" && this.rest != "") {
        axios
          .post("ajaxfile.php", {
            request: 2,
            name: this.name,
            rest: this.rest,
          })
          .then(function(response) {
            // Fetch records
            this.allRecords();

            // Empty values
            this.name = "";
            this.rest = "";

            alert(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("Fill all fields.");
      }
    },
    updateRecord: function(index, id) {
      // Read value from Textbox
      var name = this.workouts[index].name;
      var rest = this.workouts[index].rest;

      if (name != "" && rest != "") {
        axios
          .post("ajaxfile.php", {
            request: 3,
            id: id,
            name: name,
            rest: rest,
          })
          .then(function(response) {
            alert(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    deleteRecord: function(index, id) {
      axios
        .post("ajaxfile.php", {
          request: 4,
          id: id,
        })
        .then(function(response) {
          // Remove index from users
          this.workouts.splice(index, 1);
          alert(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
