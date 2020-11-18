<template>
 <v-container fluid>
      <v-alert >
        <v-row align="center">
          <v-col class="grow">
            <div class="title">{{title}}</div>
            <div>
              <v-btn @click={}>changetitle</v-btn>
            </div>
          </v-col>
          <v-col class="shrink">
            <v-btn @click="getVideos">Take action</v-btn>
          </v-col>
        </v-row>
      </v-alert>
</v-container>
</template>
<script>
export default {
    name:"Home",
    data:()=>({
        loading: false,
        loaded:false,
        title:" this is title"
    }),
    computed:{
        changetitle(){
            this.title="change title"
        }
    },
    method:{
        
    }
}
</script>