import HomePage from '../svelte/pages/HomePage.svelte';
import ChildPage from '../svelte/pages/ChildPage.svelte';

export default {
    home: {
        component: HomePage,

        children: {
            'child-page': {
                component: ChildPage,
                title: 'Child Page',
            },
        }
    },
};