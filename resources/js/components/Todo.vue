<template>
  <v-row >
      <v-card class="ma-5" width="100%" style="border-radius: 10%" min-height="220">
        <div class="">
          <div>
            <v-card-title class="headline" v-text="todo.title" ></v-card-title>

            <v-card-subtitle v-text="todo.content"></v-card-subtitle>

            <v-card-actions>
              <v-btn
                class="ml-2"
                color="deep-orange"
                outlined v-model="todo.completed"
                rounded @click="complete()"
                small
              >
                Completed
              </v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
  </v-row>
</template>

<script>
import { APIService } from "../ApiServices";
const apiService = new APIService();
export default {
  name: "HelloWorld",
  props:{
    todo: {}
  },
  methods:{
      complete(){
        this.todo.completed = true;
        console.log(this.todo.completed);
        apiService.updateTodos(this.todo);
      }
  }
};
</script>
