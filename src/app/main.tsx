import { createRoot } from 'react-dom/client';
import { App } from './app';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { router } from '@/pages/router';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import bridge from '@vkontakte/vk-bridge';

void bridge.send('VKWebAppInit');

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
