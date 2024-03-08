import { createRoot } from 'react-dom/client';

import { App } from './app';

import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { router } from '@/pages/router';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';

const container = document.querySelector('#root') as HTMLElement;
const root = createRoot(container);

root.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <AppRoot>
                <RouterProvider router={router}>
                    <App />
                </RouterProvider>
            </AppRoot>
        </AdaptivityProvider>
    </ConfigProvider>,
);
