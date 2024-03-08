import { FC, ReactNode } from 'react';
import { SimpleCell } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

interface Props {
    href: string;
    title: string;
    icon: ReactNode;
}

export const NavbarLink: FC<Props> = ({ title, href, icon }) => {
    const routeNavigator = useRouteNavigator();

    return (
        <SimpleCell
            before={icon}
            data-mode="all"
            onClick={() => routeNavigator.replace(href)}
        >
            {title}
        </SimpleCell>
    );
};
