import { apiClient } from '@/shared/api/base';
import { Age } from '../model/age';
import { AgeQuery } from './query/age.query';

export const getAge = async (query: AgeQuery, init?: RequestInit): Promise<Age> => {
    return await apiClient.get<Age>(`https://api.agify.io/?name=${query.name}`, init);
};