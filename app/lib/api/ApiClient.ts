export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = process.env.NEXT_PUBLIC_CALENDAR_API_URL || '') {
    this.baseUrl = baseUrl;
  }

  async request<TResponse, TRequest = undefined>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    body?: TRequest
  ): Promise<TResponse> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    console.log(`Requesting ${method} ${this.baseUrl}${endpoint} with body:`, body);
    const options: RequestInit = {
      method,
      headers,
    };

    if (body && method !== 'GET') {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, options);

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`HTTP ${method} ${endpoint} failed: ${message}`);
    }

    //Manejar errores de la API

    return response.json();
  }
}
