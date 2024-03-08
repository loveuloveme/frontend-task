import { FC } from 'react';
import { View, Root } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { Layout } from '@/shared/ui/layout';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/shared/api/query-client';
import { CatFactPage } from '@/pages/cat-fact';
import { UserAgePage } from '@/pages/user-age';

import '@vkontakte/vkui/dist/vkui.css';

export const App: FC = () => {
    const { view: activeView } = useActiveVkuiLocation();
    const activePanel = useGetPanelForView('default_view');
    
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Root activeView={activeView || 'default'}>
                    <View nav="default" activePanel={activePanel || 'cat-fact'}>
                        <CatFactPage id="cat-fact" />
                        <UserAgePage id="user-age" />
                    </View>
                </Root>
            </Layout >
        </QueryClientProvider>
    );
};
