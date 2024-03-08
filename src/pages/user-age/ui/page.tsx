import { FC, useEffect, useState } from 'react';
import { Card, CardGrid, Div, Group, Panel, Spinner, Title } from '@vkontakte/vkui';
import { Navbar } from '@/shared/ui/navbar';
import { useQuery } from '@tanstack/react-query';
import { Error } from '@/shared/ui/error/';
import { Page } from '@/app/types';
import styles from './styles.module.css';
import { userApi } from '@/entities/user';
import { AgeForm } from './age-form';
import { IAgeFormInput } from './types';
import { queryClient } from '@/shared/api/query-client';

export const UserAgePage: FC<Page> = () => {
    const [name, setName] = useState<string>('');

    const {
        data,
        isFetching,
        isError,
        refetch
    } = useQuery(userApi.queries.age({ name }));

    useEffect(() => {
        if (name) {
            void refetch();
        }
    }, [name]);

    const onSubmit = (data: IAgeFormInput) => {
        queryClient.cancelQueries({ queryKey: ['user', name] })
            .finally(() => {
                setName(data.name);
            });
    };

    return (
        <Panel>
            <Navbar title='Узнать возраст' />
            <Group>
                {isError ?
                    <Error /> :
                    null
                }

                <CardGrid size="l">
                    <Card>
                        <Div
                            className={styles.age}
                        >
                            <Title level="1">
                                Ваш возраст:
                            </Title>
                            <Title level="1">
                                {isFetching ? <Spinner /> : <>
                                    {data ? data.age : 'XX'}
                                    {data?.age === null ? 'Неизвестно' : ''}
                                </>}
                            </Title>
                        </Div>
                    </Card>
                </CardGrid>

                <AgeForm
                    isLoading={isFetching}
                    onSubmit={onSubmit}
                />
            </Group>
        </Panel>
    );
};
