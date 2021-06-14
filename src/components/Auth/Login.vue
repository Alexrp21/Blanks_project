<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card
                    elevation="5"
                >
                <v-toolbar color="#BDBDBD" flat>
                    <v-toolbar-title>Авторизация</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form v-model="valid" ref="form" validation>
                        <v-text-field
                            prepend-icon="mdi-account"
                            name="email"
                            label="Email"
                            type="email"
                            v-model="email"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                        <v-text-field
                            prepend-icon="mdi-key"
                            name="password"
                            label="Пароль"
                            type="password"
                            v-model="password"
                            :rules="passwordRules"
                            :counter="6"
                            required
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions style="justify-content: center">
                    <v-btn
                    style="color: white; background-color: #1565C0"
                    @click="onSubmit"
                    :disabled="!valid"
                    >Войти</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
 const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export default {
    data: () => ({
        email: '',
        password: '',
        valid: false,
        emailRules: [
            v => !!v || 'Это поле не может быть пустым',
            v => emailRegex.test(v) || 'Некорректный email',
        ],
        passwordRules: [
            v => !!v || 'Это поле не может быть пустым',
            v => (v && v.length >= 6) || 'Пароль должен быть не менее 6 символов'
        ]
    }),
    methods: {
        onSubmit () {
            if (this.$refs.form.validate()) {
                const user = {
                    email: this.email,
                    password: this.password
                }
            }
        }
    }
}
</script>

<style scoped>
.center {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}
</style>