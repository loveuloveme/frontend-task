import { FC, useState } from 'react';
import { PanelHeader, PanelHeaderContent, PanelHeaderContext } from '@vkontakte/vkui';
import { Icon16Dropdown, Icon24GhostOutline, Icon24SadFaceOutline } from '@vkontakte/icons';
import { NavbarLink } from './navbarlink';  

interface Props {
    title: string;
}

export const Navbar: FC<Props> = ({ title }) => {
    const [contextOpened, setContextOpened] = useState(false);

    const toggleContext = () => {
        setContextOpened((prev) => !prev);
    };

    return (
        <>
            <PanelHeader>
                <PanelHeaderContent
                    aside={
                        <Icon16Dropdown
                            style={{
                                transform: `rotate(${contextOpened ? '180deg' : '0'})`,
                                marginLeft: '10px',
                                marginTop: '2px'
                            }}
                        />
                    }
                    onClick={toggleContext}
                >
                    {title}
                </PanelHeaderContent>
            </PanelHeader>
            <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
                <NavbarLink href='/' title='Про котов' icon={<Icon24GhostOutline />} />
                <NavbarLink href='/user-age' title='Возраст' icon={<Icon24SadFaceOutline />} />
            </PanelHeaderContext>
        </>
    );
};
