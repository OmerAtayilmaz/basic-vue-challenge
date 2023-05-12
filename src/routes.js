import LoginPanel from "./auth/LoginPanel.vue";
import HomePage from "./pages/HomePage.vue";

export default [
    {
       name:"LoginPage",
       path:"/",
       component:LoginPanel
    },
    {
        name:"HomePage",
        path:"/product-list",
        component: HomePage
    }
]
