import { createRouter, createWebHistory } from 'vue-router';
import HomeViews from '../views/HomeViews.vue';
import JobsView from '../views/JobsView.vue';
import JobView from '../views/JobView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import AddJobView from '../views/AddJobView.vue';
import EditJobView from '../views/EditJobView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeViews,
            name: 'Home'
        },
        {
            path: '/jobs',
            component: JobsView,
            name: 'Jobs'
        },
        {
            path: '/jobs/:id',
            component: JobView,
            name: 'Job'
        },
        {
            path: '/jobs/add',
            component: AddJobView,
            name: 'AddJob'
        },
        {
            path: '/jobs/edit/:id',
            component: EditJobView,
            name: 'EditJob'
        },
        {
            path: '/:catchAll(.*)',
            component: NotFoundView,
            name: 'NotFound'
        }
    ]
})

export default router;