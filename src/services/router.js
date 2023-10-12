import PropertyList from '@/components/properties/list/PropertyList'
import { createRouter, createWebHistory } from "vue-router";

const Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            'path': '/properties',
            'component': PropertyList
        }
    ]
});

export default Router;
