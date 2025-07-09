import { CalendarFilter } from '@/app/models/contracts/filters/CalendarFilter';
import { ApiClient } from './ApiClient';
import { Request } from '@/app/models/contracts/Request';
import { Response } from '@/app/models/contracts/Response';

const api = new ApiClient();
const controllerName = 'Calendar';

export const CalendarService = {

    getSelectedMonth: (data: Request<CalendarFilter>): Promise<Response> =>
        api.request('POST', controllerName, data),

};