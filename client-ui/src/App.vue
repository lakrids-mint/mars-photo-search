<template>
  <v-app>
    <v-parallax dark :src="require('@/assets/edu_rover.jpg')">
      <v-layout mt-4 align-center column justify-center>
        <!-- Title -->
        <v-flex mt-4>
          <h1 class="display-2 mb-3">
            <Title/>
          </h1>
        </v-flex>

        <!-- Search/User input -->
        <v-flex>
          <Search/>
        </v-flex>
      </v-layout>
    </v-parallax>
    <v-content>
      <v-layout column align-center>
        <!-- Display of search results -->
        <v-flex>
          <Results/>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Search from "@/components/SearchComponent";
import Title from "@/components/TitleComponent";
import Results from "@/components/ResultComponent";

export default {
  name: "App",
  components: {
    Search,
    Title,
    Results
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style>
</style>
