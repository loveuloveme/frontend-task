import { yupResolver } from '@hookform/resolvers/yup';
import { FormLayoutGroup, FormItem, Input, Button } from '@vkontakte/vkui';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IAgeFormInput } from './types';
import useDebounce from '@/shared/lib/use-debounce';
import { ageFormSchema } from '../lib/validation/age-form.schema';


interface Props {
    isLoading: boolean;
    onSubmit: (data: IAgeFormInput) => void
}

export const AgeForm: FC<Props> = ({ isLoading, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm<IAgeFormInput>({ resolver: yupResolver(ageFormSchema), mode: 'onChange' });

    const name = watch('name');
    const debounceName = useDebounce(name, 3_000);


    const mapRegister = (reg: ReturnType<typeof register>) => {
        return {
            ...reg,
            getRef: reg.ref,
            ref: undefined
        };
    };

    useEffect(() => {
        void handleSubmit(onSubmit)();
    }, [debounceName]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormLayoutGroup mode="vertical">
                <FormItem htmlFor="name" top="Имя" bottom="только латиница">
                    <Input
                        id="name"
                        type="text"
                        placeholder="Ваше имя"
                        status={!errors.name ? 'default' : 'error'}
                        {...mapRegister(register('name'))}
                    // getRef={register('name').ref}
                    />
                </FormItem>
                <FormItem>
                    <Button
                        type="submit"
                        stretched={true}
                        size='l'

                        loading={isLoading}
                        disabled={isLoading || !isValid}
                    >
                        Посчитать возраст
                    </Button>
                </FormItem>
            </FormLayoutGroup>
        </form>
    );
};