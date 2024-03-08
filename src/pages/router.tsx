import { createBrowserRouter } from '@vkontakte/vk-mini-apps-router';

export const router = createBrowserRouter([
    {
        path: '/',
        panel: 'cat-fact',
        view: 'default',
    },
    {
        path: '/user-age',
        panel: 'user-age',
        view: 'default',
    },
]);
