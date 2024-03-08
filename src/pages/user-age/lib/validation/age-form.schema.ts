import * as yup from 'yup';

export const ageFormSchema = yup.object().shape({
    name: yup.string().required().matches(/^[A-Za-z]+$/, 'Только латиница'),
});