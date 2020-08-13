import { environment } from 'src/environments/environment';

export class RequestUrls {
    static readonly RESTART = environment.BASE_URL + 'restart';
    static readonly TOKEN = environment.BASE_URL + 'token';
}