<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap justify-center align-content-center>
      <v-flex xs10>
        <v-card elevation-10>
          <v-tabs
            centered
            color="teal"
            dark
            icons-and-text
          >
            <v-tabs-slider color="black"></v-tabs-slider>

            <v-tab href="#tab-1">
              Tribos
              <v-icon>group_work</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
              Squads
              <v-icon>scatter_plot</v-icon>
            </v-tab>

            <v-tab href="#tab-3">
              Pessoas
              <v-icon>person</v-icon>
            </v-tab>

            <v-tab-item
              v-for="i in 3"
              :id="'tab-' + i"
              :key="i"
            >
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-flex>
      <v-divider></v-divider>
      <v-flex d-flex xs10>
        <v-flex xs5>
          <v-text-field
            color="green"
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-flex>
        <v-flex xs7>
          <p>asdasd</p>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        text: 'Ola mundo'
      }
    }
  }
</script>

<style>
.search {
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
}
.top {
  padding-top: 10px;
}
</style>
