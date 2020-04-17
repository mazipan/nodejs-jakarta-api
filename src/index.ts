import createRequest from './api';
import { WILAYAH } from './constant'

export default class JakGoAPI {
	private static instance: JakGoAPI;
	private static tokenPrivate: string;
	private constructor({ token }: JakGoOptions) {
		JakGoAPI.tokenPrivate = token;
	}

	public static getInstance({ token }: JakGoOptions): JakGoAPI {
		if (!JakGoAPI.instance) {
			JakGoAPI.instance = new JakGoAPI({ token });
		}
		return JakGoAPI.instance;
	}

	public getKota(): Promise<any> {
		return createRequest({
			token: JakGoAPI.tokenPrivate,
			url: WILAYAH.URL_KOTA
		});
	}

	public getKelurahan(): Promise<any> {
		return createRequest({
			token: JakGoAPI.tokenPrivate,
			url: WILAYAH.URL_KELURAHAN
		});
	}

	public getKecamatan(): Promise<any> {
		return createRequest({
			token: JakGoAPI.tokenPrivate,
			url: WILAYAH.URL_KECAMATAN
		});
	}

	public getRW(): Promise<any> {
		return createRequest({
			token: JakGoAPI.tokenPrivate,
			url: WILAYAH.URL_RW
		});
	}
}
