<template>
  <v-container>
    <v-layout justify-center align-content-center>
      <v-flex xs8>
        <v-card>
          <v-img :src="img"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">NerdBunker Squad</h3>
              <hr>
              <div>
                <p>{{ msg }}</p>
              </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
            color="green"
            flat
            :href="email"
            >Contato</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Suporte',
  data () {
    return {
      email: 'mailto://ipetinate@viceri.com.br',
      msg: 'Caso tenha algum problema com a plataforma, entre em contato atráves do email abaixo, clicando no botão Contato',
      img: require('../../../static/imagens/equipe.jpeg')
    }
  }
}
</script>
