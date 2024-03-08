export class ApiClient {
    async handleResponse<TResult>(response: Response): Promise<TResult> {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return await response.json();
        } catch (error) {
            throw new Error('Error parsing JSON response');
        }
    }

    public async get<TResult = unknown>(endpoint: string, init?: RequestInit, queryParams?: Record<string, string | number>): Promise<TResult> {
        const url = new URL(endpoint);

        if (queryParams) {
            Object.entries(queryParams).forEach(([key, value]) => {
                url.searchParams.append(key, value.toString());
            });
        }

        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            ...init
        });

        return this.handleResponse<TResult>(response);
    }
}

export const apiClient = new ApiClient();