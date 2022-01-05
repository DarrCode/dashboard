<template>
    <v-app>
        <v-container fluid>
            <v-row no-gutters>
                <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
                    <div class="d-flex">
                        <v-img :src="logo" max-height="550" max-width="550"></v-img>
                    </div>
                </v-col>
                <v-col cols="12" lg="5" class="login-part d-flex align-center justify-center">
                    <v-row no-gutters class="align-start">
                        <v-col cols="12" class="login-part d-flex align-center justify-center flex-column">
                            <div class="login-wrapper pt-md-4 pt-0">
                                <v-form>
                                    <v-container>
                                        <v-row class="flex-column">
                                            <v-col>
                                                <p class="login-slogan display-2 text-center font-weight-medium my-10">Inicia sesion</p>
                                                <v-btn height="45" block color="white" elevation="0" class="google text-capitalize">
                                                    <v-img :src="metamask" max-width="30" class="mr-4"></v-img>
                                                    Sign in with MetaMask
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="12" class="d-flex align-center my-2">
                                                <v-divider></v-divider>
                                                <span class="px-5"> or </span>
                                                <v-divider></v-divider>
                                            </v-col>
                                            <v-form>
                                                <v-col>
                                                    <v-text-field
                                                        v-model="email"
                                                        value="admin@flatlogic.com"
                                                        label="Email Address"
                                                        required
                                                    ></v-text-field>
                                                    <v-text-field
                                                        v-model="password"
                                                        type="password"
                                                        label="Password"
                                                        hint="At least 6 characters"
                                                        required
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col class="d-flex justify-space-between">
                                                    <v-btn
                                                        large
                                                        :disabled="password.length === 0 || email.length === 0"
                                                        color="primary"
                                                        @click="login"
                                                    >
                                                        INICIAR
                                                    </v-btn>
                                                </v-col>
                                            </v-form>
                                        </v-row>
                                    </v-container>
                                </v-form>
                            </div>
                        </v-col>
                        <v-col cols="12" class="d-flex justify-center">
                            <v-footer>
                                <div class="primary--text">
                                    {{date}}
                                    Paradise Hotel Admin
                                </div>
                            </v-footer>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            email: 'admin@flatlogic.com',
            createFullName: 'John Smith',
            createEmail: 'john@flatlogic.com',
            createPassword: '123456',
            password: '123456',
            logo: require('@/assets/img/logo.png'),
            metamask: require('@/assets/img/metamask.png'),
            date: new Date().getFullYear(),
        };
    },
    methods: {
        login() {
            window.localStorage.setItem('authenticated', true);
            this.$router.push('/dashboard');
        },
    },
    created() {
        if (window.localStorage.getItem('authenticated') === 'true') {
            this.$router.push('/dashboard');
        }
    },
};

</script>
<style src="./Login.scss" lang="scss"/>
