import { getAge } from './get-age';
import { AgeQuery } from './query/age.query';

export const userQueries = {
    age: (query: AgeQuery) => ({
        queryKey: ['user', query.name],
        queryFn: ({ signal }: { signal: AbortSignal }) => getAge(query, { signal }),
        enabled: false
    }),
};

