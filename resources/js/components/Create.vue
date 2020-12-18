<template>
  <v-dialog v-model="editorDialog" persistent>
    <v-row justify="center">
      <v-col cols="4">
        <v-card>
          <v-card-text>
            <v-card-title class="headline my-3 deep-orange--text">
              Create a Todo
            </v-card-title> 
            
            <v-text-field
              label="title"
              placeholder="some some"
              color="deep-orange"
              outlined
              clearable
            ></v-text-field>
            <v-text-field
              label="content"
              color="deep-orange"
              outlined
              clearable
            ></v-text-field>
          </v-card-text>
          <v-row justify="center" class="ma-2">
            <v-card-actions>
              <v-btn rounded color="deep-orange" outlined>
                Done
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-dialog>
</template>
