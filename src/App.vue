<template>
  <v-app>
    <div class="z-ind">
      <v-navigation-drawer
        v-model="drawer"
        style="z-index: 30"
        app
      >
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="drawer2 = !drawer2">
            <v-list-item-icon>
              <v-icon>mdi-text-box-multiple-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Шаблоны</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>{{ drawer2 ? icons[1] : icons[0] }}</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list
            dense nav v-if="drawer2"
          >
              <v-list-item
                v-for="templDoc in templDocs"
                :key="templDoc.title"
                :to="templDoc.url"
                @click="drawer = false"
              >
                  <v-icon>{{ templDoc.icon }}</v-icon>
                  <v-list-item-content>
                    <v-list-item-title style="padding-left: 12px">{{ templDoc.title }}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
            </v-list>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        
        <router-link to="/" class="routeHome">Blanks</router-link>

        <v-spacer></v-spacer>

        <div class="hidden-sm-and-down">
          <v-btn
            text
            v-for="link in links"
            :key="link.title"
            :to="link.url"
          >
            <v-icon>{{ link.icon }}</v-icon>
            <span style="padding-left: 8px">{{ link.title }}</span>
          </v-btn>

          <v-menu offset-y style="z-index: 94">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-text-box-multiple-outline</v-icon>
                <span style="padding-left: 8px">Шаблоны</span>
                <v-icon>{{ icons[0] }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="templDoc in templDocs"
                :key="templDoc.title"
                :to="templDoc.url"
              >
                <v-list-item-icon>
                  <v-icon>{{ templDoc.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ templDoc.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>

        </div>

      </v-app-bar>
    </div>

    <router-view style='margin-top: 64px'></router-view>

    <template v-if="error">
      <v-snackbar
        :timeout="6000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
      >
        <template v-slot:action="{ attrs }">
          <v-btn
            color="black"
            text
            v-bind="attrs"
            @click.native="closeError"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    drawer2: false,
    snackbar: false,
    links: [
      {title: 'Авторизация', icon: 'mdi-login', url: '/login'},
      {title: 'Регистрация', icon: 'mdi-account-plus', url: '/registration'}
    ],
    templDocs: [
      {title: 'Паспорт', icon: 'mdi-passport', url: '/passport'},
      {title: 'ggffsd', icon: 'mdi-passport', url: '/ggffsd'},
      {title: 'sdafaf', icon: 'mdi-passport', url: '/sdafaf'}
    ],
    icons: ['mdi-menu-down', 'mdi-menu-up']
  }),
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  },
  watch: {
    drawer : function (oldVal, newVal) {
      if (newVal === false) {
        this.drawer2 = false
      }
    }
  }
}
</script>

<style scoped>
.routeHome {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
}

.z-ind {
  z-index: 92;
}
</style>