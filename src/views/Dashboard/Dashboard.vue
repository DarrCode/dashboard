<template>
    <v-container fluid>
        <div class="dashboard-page">
            <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
                <h1 class="page-title">Dashboard</h1>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            v-bind="attrs"
                            v-on="on"
                            color="secondary"
                            class="text-capitalize button-shadow mr-1">
                            Latest Reports
                        </v-btn>
                    </template>
                </v-menu>
            </v-row>
            <v-row>
                <v-col lg="3" sm="6" md="5" cols="12">
                    <v-card class="mx-1 mb-1">
                        <v-card-title class="pa-6 pb-3">
                            <p>Visits Today</p>
                            <v-spacer></v-spacer>
                            <v-menu>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        v-for="(item, i) in mock.menu"
                                        :key="i"
                                        @click="() => {}" >
                                        <v-list-item-title>{{ item }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-card-text class="pa-6 pt-0">
                            <v-row no-gutters class="pb-5">
                                <v-col cols="5" class="my-auto">
                                    <span class="font-weight-medium card-dark-grey" style="font-size: 24px">12, 678</span>
                                </v-col>
                                <v-col cols="6">
                                    <Trend
                                        :data="getRandomDataForTrends()"
                                        :gradient="mock.trend.gradient"
                                        :height="40"
                                        stroke-width="4"
                                        smooth
                                    />
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="justify-space-between pb-3">
                                <v-col cols="5">
                                    <div class="card-light-grey">Registrations</div>
                                    <div class="text-h6 card-dark-grey font-weight-regular">860</div>
                                </v-col>
                                <v-col cols="3">
                                    <div class="card-light-grey">Sign Out</div>
                                    <div class="text-h6 card-dark-grey font-weight-regular">32</div>
                                </v-col>
                                <v-col cols="4" xl="2">
                                    <div class="text-right card-light-grey">Rate</div>
                                    <div class="text-right text-h6 card-dark-grey font-weight-regular">3.25%</div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col lg="3" sm="6" md="7" cols="12">
                    <v-card class="mx-1 mb-1">
                        <v-card-title class="pa-6 pb-3">
                            <p>App Performance</p>
                            <v-spacer></v-spacer>
                            <v-menu>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        v-for="(item, i) in mock.menu"
                                        :key="i"
                                        @click="() => {}"
                                    >
                                        <v-list-item-title>{{ item }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-card-text class="pa-6 pt-0">
                            <v-row no-gutters class="pb-5">
                                <div class="mr-4">
                                    <v-icon color="primary" class="ml-n2">
                                        mdi-circle-medium
                                    </v-icon>
                                    <span class="card-light-grey">Integration</span>
                                </div>
                                <div>
                                    <v-icon color="warning"> mdi-circle-medium </v-icon>
                                    <span class="card-light-grey">SDK</span>
                                </div>
                            </v-row>
                            <v-row no-gutters class="pb-3">
                                <v-col>
                                    <div class="text-h6 card-light-grey font-weight-regular">
                                        Integration
                                    </div>
                                    <v-progress-linear
                                        :value="value"
                                        background-color="#ececec"
                                        color="primary"
                                    ></v-progress-linear>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="pb-1">
                                <v-col>
                                    <div class="text-h6 card-light-grey font-weight-regular">SDK</div>
                                    <v-progress-linear
                                        :value="value2"
                                        background-color="#ececec"
                                        color="warning"
                                    ></v-progress-linear>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <v-card class="support-requests mx-1 mb-1">
                        <v-card-title class="pa-6 pb-0">
                            <p>Support Requests</p>
                            <v-spacer></v-spacer>
                            <v-menu>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        v-for="(item, i) in mock.menu"
                                        :key="i"
                                        @click="() => {}"
                                    >
                                        <v-list-item-title>{{ item }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-card-title>
                        <v-card-text class="pa-0">
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead class="pl-2">
                                        <tr>
                                            <th class="text-left pa-6">NAME</th>
                                            <th class="text-left">EMAIL</th>
                                            <th class="text-left">PRODUCT</th>
                                            <th class="text-left">PRICE</th>
                                            <th class="text-left">DATE</th>
                                            <th class="text-left">CITY</th>
                                            <th class="text-left">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in mock.table" :key="item.name">
                                            <td class="pa-6">{{ item.name }}</td>
                                            <td>{{ item.email }}</td>
                                            <td>{{ item.product }}</td>
                                            <td>{{ item.price }}</td>
                                            <td>{{ item.date }}</td>
                                            <td>{{ item.city }}</td>
                                            <td v-if="item.status === 'Sent'">
                                                <v-chip link color="success" class="ma-2 ml-0">
                                                    Sent
                                                </v-chip>
                                            </td>
                                            <td v-else-if="item.status === 'Pending'">
                                                <v-chip link color="warning" class="ma-2 ml-0">
                                                    Pending
                                                </v-chip>
                                            </td>
                                            <td v-else-if="item.status === 'Declined'">
                                                <v-chip link color="secondary" class="ma-2 ml-0">
                                                    Declined
                                                </v-chip>
                                            </td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import mock from './mock';

export default {
    name: 'Dashboard',
    data() {
        return {
            mock,
            apexLoading: false,
            value: this.getRandomInt(10, 90),
            value2: this.getRandomInt(10, 90),
            mainApexAreaSelect: 'Daily',
        };
    },
    methods: {
        getRandomDataForTrends() {
            const arr = [];
            for (let i = 0; i < 12; i += 1) {
                arr.push(Math.random().toFixed(1) * 10);
            }
            return arr;
        },
        generatePieSeries() {
            const series = [];

            for (let i = 0; i < 4; i += 1) {
                const y = Math.floor(Math.random() * (500 - 100 + 100)) + 100;
                series.push(y);
            }
            return series;
        },
        getRandomInt(min, max) {
            const rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        },
    },
    mounted() {
        setTimeout(() => {
            this.apexLoading = true;
        });
    },
};
</script>

<style src="./Dashboard.scss" lang="scss"/>
