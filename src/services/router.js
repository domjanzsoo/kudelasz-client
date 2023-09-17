import PropertyList from '@/components/properties/list/property-list'
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
