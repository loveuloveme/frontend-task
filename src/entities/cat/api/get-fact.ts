import { apiClient } from '@/shared/api/base';
import { Fact } from '../model/fact';


export const getFact = async (): Promise<Fact> => {
    return await apiClient.get<Fact>('https://catfact.ninja/fact');
};