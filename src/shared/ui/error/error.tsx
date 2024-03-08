import { Icon56UsersOutline } from '@vkontakte/icons';
import { Placeholder, Button, Separator } from '@vkontakte/vkui';
import { FC, } from 'react';

export const Error: FC = () => {
    return (
        <>
            <Placeholder
                icon={<Icon56UsersOutline />}
                header="Ошибка загрузки"
                action={
                    <Button
                        size="m"
                    >
                        Попробовать ещё раз
                    </Button>
                }
            >
                Произошла ошибка при загрузке
            </Placeholder>
            <Separator />
        </>
    );
};
