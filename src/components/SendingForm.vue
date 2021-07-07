<template>
  <v-form elevation="24" class="sendForm">
    <template>
      <v-tabs v-model="tab" style="padding-top: 15px">
        <v-tab>
          <v-icon left>mdi-email-newsletter</v-icon>
          {{ $t("sendToAddress") }}
        </v-tab>
        <v-tab>
          <v-icon left>mdi-card-account-mail</v-icon>
          {{ $t("sendToDepartment") }}
        </v-tab>
        <v-tabs-items v-model="tab" style="padding: 20px 0 20px 0">
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
                  prepend-icon="mdi-office-building"
                  v-model="currentOrderName"
                  :rules="requiredRules"
                  :items="orderNames"
                  type="text"
                  :label="$t('enterDepartName')"
                  style="
                    width: 90%;
                    margin: auto;
                    margin-top: 10px;
                    padding-bottom: 30px;
                  "
                  :placeholder="$t('selectInList')"
                  required
                ></v-autocomplete>
              </v-card>
            </v-form>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </template>

    <div class="buttons">
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="#64DD17"
            :disabled="validInput"
            >{{ $t("sendButton") }}</v-btn
          >
        </template>
        <v-card>
          <v-card-title style="font-size: 18px; line-height: 25px">
            {{ $t("privacyPolicyWindowTitle") }}
          </v-card-title>
          <v-card-text>
            <div @click="emitCloseFormEvent" style="text-align: center">
              <router-link to="/privace-policy">{{
                $t("privacyPolicyWindowText")
              }}</router-link>
            </div>
          </v-card-text>
          <v-card-actions class="buttons">
            <v-btn color="green darken-1" text @click="sendToCurrentMail">
              {{ $t("agree") }}
            </v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">
              {{ $t("disagree") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
        {{ $t("sendFormWarningMessage") }}
      </v-alert>

      <v-btn @click="emitCloseFormEvent" color="#D84315" style="color: white">{{
        $t("canselButton")
      }}</v-btn>
    </div>
  </v-form>
</template>

<script>
import { bus } from "@/main";

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default {
  data: (_t) => ({
    dialog: false,
    tab: null,
    alert: false,
    valid1: false,
    valid2: false,
    currentOrderName: "",
    currentOrderEmail: "",
    emailAddress: "",
    emailRules: [
      (v) => !!v || _t.$i18n.t("sendFormEmailValidEmpty"),
      (v) => emailRegex.test(v) || _t.$i18n.t("sendFormEmailValidCorrect"),
    ],
    requiredRules: [(v) => !!v || _t.$i18n.t("sendFormEmailValidEmpty")],
    orderNames: ["test1", "test2"],
    orderEmails: ["test1@mail.ru", "test2@mail.ru"],
  }),
  methods: {
    emitCloseFormEvent() {
      this.dialog = false;
      this.$emit("close-form");
    },
    sendToCurrentMail() {
      this.dialog = false;
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
            bus.$emit("send-passport-data", this.currentOrderEmail);
            this.$emit("close-form");
          } else if (this.$route.name === "residence") {
            bus.$emit("send-residence-data", this.currentOrderEmail);
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
  watch: {
    currentOrderName: function (oldVal, newVal) {
      const index = this.orderNames.indexOf(this.currentOrderName);
      this.currentOrderEmail = this.orderEmails[index];
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