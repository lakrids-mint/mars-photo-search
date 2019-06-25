<template>
  <v-content>
    <v-form ref="form">
      <v-layout :column="$vuetify.breakpoint.xsOnly">
        <v-flex ma-1 xs12 sm6>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <span v-on="on">SOL</span>
            </template>
            <span>Martian rotation or day</span>
          </v-tooltip>
          <v-text-field
            block
            @click:append="$refs.form.reset()"
            type="text"
            solo
            placeholder="Enter a number"
            append-icon="close"
            v-model.trim="input"
            :rules="soloRules"
            name="sol"
          ></v-text-field>
        </v-flex>
        <v-flex ma-1 xs12 sm6>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <span v-on="on">Camera</span>
            </template>
            <span>Choose from 7 different cameras</span>
          </v-tooltip>

          <v-overflow-btn
            solo
            block
            :items="cameras"
            v-model="camera"
            label="Choose camera"
            :rules="cameraRules"
            name="camera"
          ></v-overflow-btn>
        </v-flex>
      </v-layout>
    </v-form>
    <v-layout ma-2 column align-center>
      <v-flex>
        <v-btn mb-2 dark :loading="loading" color="pink" @click.prevent="search">
          Search
          <v-icon right>search</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data: function() {
    return {
      input: "",
      loading: false,
      camera: "",
      photos: [],
      cameras: [
        "FHAZ",
        "NAVCAM",
        "MAST",
        "CHEMCAM",
        "MAHLI",
        "MARDI",
        "RHAZ",
        "ANY"
      ],
      soloRules: [
        v => !!v || "Input is required, please input a number ",
        v => /^[0-9 ]*$/.test(v) || "Only digits allowed!"
      ],
      cameraRules: [v => !!v || "You must choose a camera"]
    };
  },

  methods: {
    search: function() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("getPhotos", {
          sol: this.input,
          camera: this.camera
        });
      } else {
        console.log("validation failed");
        this.$store.dispatch("error", "Please enter the required information");
      }
    }
  }
};
</script>


