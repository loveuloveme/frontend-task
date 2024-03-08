import { FC, ReactNode } from 'react';
import { PanelHeader, SplitCol, SplitLayout, usePlatform } from '@vkontakte/vkui';

interface Props {
    children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
    const platform = usePlatform();

    return (
        <SplitLayout
            header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}
            style={{ justifyContent: 'center' }}
        >
            <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
                {children}
            </SplitCol>
        </SplitLayout>
    );
};
