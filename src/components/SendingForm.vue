<template>
  <v-form elevation="24" class="sendForm" style="padding-top: 10px">
    <template>
      <v-tabs v-model="tab">
        <v-tab>
          <v-icon left>mdi-email-newsletter</v-icon>
          Отправить по адресу
        </v-tab>
        <v-tab>
          <v-icon left>mdi-card-account-mail</v-icon>
          Отправить в отдел по гражданству и миграции
        </v-tab>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-form v-model="valid1" ref="myemail" validation>
              <v-card flat>
                <v-card-text>
                  <v-text-field
                    prepend-icon="mdi-at"
                    name="email"
                    label="Email"
                    type="email"
                    :rules="emailRules"
                    v-model="emailAddress"
                    style="width: 90%; margin: auto; padding-bottom: 10px"
                    required
                  ></v-text-field>
                </v-card-text>
              </v-card>
            </v-form>
          </v-tab-item>
          <v-tab-item>
            <v-form v-model="valid2" ref="orderemail" validation>
              <v-card flat>
                <v-autocomplete
                  prepend-icon="mdi-at"
                  v-model="orderEmailAddress"
                  :rules="emailRules"
                  :items="orderEmails"
                  type="email"
                  label="Email отдела"
                  style="
                    width: 90%;
                    margin: auto;
                    margin-top: 10px;
                    padding-bottom: 30px;
                  "
                  placeholder="Выберите из списка или впишите Email"
                  required
                ></v-autocomplete>
              </v-card>
            </v-form>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </template>

    <div class="buttons">
      <v-btn color="#64DD17" @click="sendToCurrentMail" :disabled="validInput"
        >Отправить</v-btn
      >

      <v-alert
        :value="alert"
        type="warning"
        color="red"
        prominent
        border="left"
        transition="scale-transition"
        dismissible
        style="position: absolute; z-index: 1"
      >
        Откройте шаблон который хотите отправить
      </v-alert>

      <v-btn @click="emitCloseFormEvent" color="#D84315" style="color: white"
        >Отменить</v-btn
      >
    </div>
  </v-form>
</template>

<script>
import { bus } from "@/main";

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default {
  data: () => ({
    tab: null,
    alert: false,
    valid1: false,
    valid2: false,
    orderEmailAddress: "",
    emailAddress: "",
    emailRules: [
      (v) => !!v || "Поле не может быть пустым",
      (v) => emailRegex.test(v) || "Укажите корректный Email",
    ],
    orderEmails: ["test@email.by", "test2@email.by"],
  }),
  methods: {
    emitCloseFormEvent() {
      this.$emit("close-form");
    },
    sendToCurrentMail() {
      if (this.tab == 0) {
        if (this.$refs.myemail.validate()) {
          if (this.$route.name === "passport") {
            bus.$emit("send-passport-data", this.emailAddress);
            this.$emit("close-form");
          } else if (this.$route.name === "residence") {
            bus.$emit("send-residence-data", this.emailAddress);
            this.$emit("close-form");
          } else this.alert = true;
        }
      } else if (this.tab == 1) {
        if (this.$refs.orderemail.validate()) {
          if (this.$route.name === "passport") {
            bus.$emit("send-passport-data", this.orderEmailAddress);
            this.$emit("close-form");
          } else if (this.$route.name === "residence") {
            bus.$emit("send-residence-data", this.orderEmailAddress);
            this.$emit("close-form");
          } else this.alert = true;
        }
      }
    },
  },
  computed: {
    validInput: function () {
      if (this.tab == 0) {
        return !this.valid1;
      } else if (this.tab == 1) {
        return !this.valid2;
      } else return true;
    },
  },
};
</script>

<style scoped>
.sendForm {
  position: fixed;
  top: 30%;
  left: 30%;
  min-width: 500px;
  min-height: 200px;
  align-content: center;
  padding-bottom: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 2px 15px 10px grey;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.radioButton {
  padding-left: 20px;
}
</style>