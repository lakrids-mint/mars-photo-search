<template>
  <v-container fluid grid-list-xl>
    <!-- snackbar -->
    <v-snackbar v-model="snackbar" color="failure" :timeout="5000" top>
      <span>{{error}}</span>
      <v-btn flat color="white" @click="snackbar=false">
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
    <!-- results -->

    <v-layout row wrap mt-4>
      <v-flex d-flex v-for="photo in photos" :key="photo.id" xs12 sm6 md4>
        <v-card class="mx-auto" color="grey lighten-4" min-width="200">
          <v-img :aspect-ratio="1" :src="photo.img_src">
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="pink"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
          <v-card-text>
            <p class="subheading">
              Taken on:
              <span class="font-weight-light">{{photo.earth_date}}</span>
              <br>By:
              <span class="font-weight-light">{{photo.camera.full_name}}</span>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      timeout: 10000
    };
  },
  methods: {
    //v-img wont show if the url is directly bound in the template
    getImgUrl: function(img) {
      return img;
    }
  },
  computed: {
    photos() {
      if (this.$store.getters.getPhotos) {
        return this.$store.getters.getPhotos;
      }
    },
    error() {
      if (this.$store.getters.getError) {
        this.snackbar = true;
        return this.$store.getters.getError;
      }
    }
  }
};
</script>

<style>
.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
