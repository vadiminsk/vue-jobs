import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/jobs/results",
            name: "results",
            component: JobResultsView,
        },
    ],
})

export default router