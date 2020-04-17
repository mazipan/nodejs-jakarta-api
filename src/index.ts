import createRequest from './api';
import { WILAYAH, TPS, KESEHATAN, CCTV, EMERGENCY } from './constant'

interface JakGoOptions {
	token: string;
}

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

	/** WILAYAH */
	public async getKota(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: WILAYAH.URL_KOTA
		});
	}

	public async getKelurahan(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: WILAYAH.URL_KELURAHAN
		});
	}

	public async getKecamatan(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: WILAYAH.URL_KECAMATAN
		});
	}

	public async getRW(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: WILAYAH.URL_RW
		});
	}

	/** TPS */
	public async getTPS(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: TPS.URL_TPS
		});
	}

	/** KESEHATAN */
	public async getRSU(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: KESEHATAN.URL_RSU
		});
	}

	public async getRSK(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: KESEHATAN.URL_RSK
		});
	}

	public async getPuskesmas(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: KESEHATAN.URL_PUSKESMAS
		});
	}

	/** CCTV */
	public async getCCTV(id: string): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: CCTV.URL_CCTVBALITOWER_DETAIL(id)
		});
	}

	/** EMERGENCY */
	public async getPosPemadam(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: EMERGENCY.URL_POS_PEMADAM
		});
	}

	public async getPetugasPemadam(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: EMERGENCY.URL_PETUGAS_PEMADAM
		});
	}

	public async getAmbulance(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: EMERGENCY.URL_AMBULANCE
		});
	}

	public async getPetugasDinkes(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: EMERGENCY.URL_PETUGAS_DINKES
		});
	}

	public async getPetugasSatpolPP(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: EMERGENCY.URL_PETUGAS_SATPOLPP
		});
	}

	public async getPosPolda(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: EMERGENCY.URL_POSPOLDA
		});
	}

	public async getPetugasDishub(): Promise<any> {
		return await createRequest({
			token: JakGoAPI.tokenPrivate,
			url: EMERGENCY.URL_PETUGAS_DISHUB
		});
	}
}
