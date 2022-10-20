import { defineMyRouter } from "@/modules/defineMyRouter";

import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";

const useBuildPath = false;
const routes = {
    home: { path: "/", component: Home },
    login: { path: "/login", component: Home },
    register: { path: "/register", component: Home },
    dashboard: { path: "/app", component: Dashboard }
};

export default defineMyRouter(routes, useBuildPath);