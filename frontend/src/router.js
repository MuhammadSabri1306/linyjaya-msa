import { defineMyRouter } from "@/modules/defineMyRouter";

import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Report from "@/views/Report.vue";
import Attendance from "@/views/Attendance.vue";
import Inventory from "@/views/Inventory.vue";
import Finance from "@/views/Finance.vue";

const useBuildPath = false;
const routes = {
    home: { path: "/", component: Home },
    login: { path: "/login", component: Home },
    register: { path: "/register", component: Home },
    dashboard: { path: "/app", component: Dashboard },
    contact: { path: "/contact", component: Dashboard },
    report: { path: "/app/report/:tab?", component: Report },
    attendance: { path: "/app/attendance/:tab?", component: Attendance },
    inventory: { path: "/app/inventory", component: Inventory },
    finance: { path: "/app/finance/:tab?", component: Finance }
};

export default defineMyRouter(routes, useBuildPath);