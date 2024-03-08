import { getFact } from './get-fact';

export const catQueries = {
    fact: () => ({
        queryKey: ['cat'],
        queryFn: getFact,
        enabled: false,
    })
};

