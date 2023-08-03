import historyPage from "@/page/historyPage"
import authorPage from "@/page/authorPage"
import Main from "@/page/mainPage"
import authorid from "@/page/authorId"
import userPage from "@/page/userPage"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [

    {
        path:'/',
        component: Main,
    },
    {
        path:'/history',
        component: historyPage,
    },
    {
        path:'/authors',
        component: authorPage,
    },
    {
        path: '/authors/:id',
        component: authorid,
    },
    {
        path: '/user',
        component: userPage,
    },

]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL),
})

export default router