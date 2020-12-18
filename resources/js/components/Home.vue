<template>
  <v-container class="home">
    <template>
      <v-dialog v-model="editorsDialog" persistent width="45%">
        <v-card>
          <v-card-text>
            <v-row justify="space-between" align="center">
              <v-card-title class="headline my-3 deep-orange--text">
                Create a Todo
              </v-card-title>
              <v-btn icon @click="dialogOff()">
                mdi-close
              </v-btn>
            </v-row>
            <v-text-field
              label="title"
              placeholder="some some"
              v-model="todo.title"
              color="deep-orange"
              outlined
              clearable
            ></v-text-field>
            <v-text-field
              label="content"
              v-model="todo.content"
              color="deep-orange"
              outlined
              clearable
            ></v-text-field>
          </v-card-text>
          <v-row justify="center" class="ma-2">
            <v-card-actions>
              <v-btn rounded color="deep-orange" @click="create()" outlined>
                Done
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-dialog>
    </template>
    <template>
      <v-row justify="space-around">
        <v-col cols="6">
      <v-text-field label="Search here" outlined rounded
              v-model="searchId" @change="search()"
              color="deep-orange"
              clearable>
      </v-text-field>
      </v-col>
     
      <v-btn
        @click="dialogOn()"
        class="mr-5 mt-5"
        color="deep-orange"
        outlined
        rounded
      >
        Add Todo
      </v-btn>
      </v-row>
    </template>
      
    <v-row>
    <v-col cols="4" v-for="todo in todos" :key="todo.id">
    <Todo :todo="todo"/>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Todo from "./Todo.vue";
import { APIService } from "../ApiServices";
const apiService = new APIService();
export default {
  name: "Home",
  components: {
    Todo
  },
  methods: {
    async search()  {
      await apiService.searchTodo(this.searchId).then(resp =>{ 
        this.todos = resp.data;
        console.log(resp.data);
     });
    },
    async create(){
      await apiService.makeTodos(this.todo);
this.editorsDialog = false;    },
    dialogOn() {
      this.editorsDialog = true;
    },
    dialogOff() {
      this.editorsDialog = false;
    }
  },
  data() {
    return {
      todos: "",
       todo: {
        title: "",
        content: ""
      },
      searchId: "",
      editorsDialog: false
    };
  },
  created(){
 apiService.getTodos().then(resp => {
      console.log(resp.data);
      this.todos = resp.data;
    });
  }
};
</script>
