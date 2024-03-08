import { FC, useEffect } from 'react';
import { Button, Div, Group, Panel, Textarea } from '@vkontakte/vkui';
import { Navbar } from '@/shared/ui/navbar';
import { useQuery } from '@tanstack/react-query';
import styles from './styles.module.css';
import useAreaCursor from '../lib/use-area-cursor';
import { catApi } from '@/entities/cat';
import { Error } from '@/shared/ui/error/';
import { Page } from '@/app/types';

export const CatFactPage: FC<Page> = () => {
    const { ref, setCursor } = useAreaCursor();

    const {
        data,
        isFetching,
        isError,
        refetch
    } = useQuery(catApi.queries.fact());

    const handleSubmit = () => {
        void refetch();
    };

    useEffect(() => {
        setCursor();
    }, [data]);

    return (
        <Panel>
            <Navbar title='Про котов' />
            <Group>
                {isError ?
                    <Error /> :
                    <Div>
                        <Textarea
                            className={styles.area}
                            placeholder="Здесь будет факт про кота"
                            value={data?.fact ?? ''}
                            maxHeight='250px'
                            getRef={ref}
                        />
                    </Div>
                }
                <Div>
                    <Button
                        stretched={true}
                        size='l'

                        onClick={handleSubmit}
                        loading={isFetching}
                        disabled={isFetching}
                    >
                        Запросить факт
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};
