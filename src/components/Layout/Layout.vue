<template>
    <v-app class="pa-6">
        <Header />
        <Sidebar />
        <v-main class="content">
            <router-view />
            <Footer />
        </v-main>
    </v-app>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
    name: 'Layout',
    components: { Footer, Header, Sidebar },
};
</script>

<style src="./Layout.scss" lang="scss" />
