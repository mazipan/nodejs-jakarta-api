export const WILAYAH = {
	URL_KOTA: 'kota',
	URL_KECAMATAN: 'kecamatan',
	URL_KELURAHAN: 'kelurahan',
	URL_RW: 'rw',
}

export const TPS = {
	URL_TPS: 'tps',
	URL_TPS_DETAIL: (id: string) => `tps/${id}`,
}

export const KESEHATAN = {
	URL_RSU: 'rumahsakitumum',
	URL_RSU_DETAIL: (id: string) => `rumahsakitumum/${id}`,
	URL_RSK: 'rumahsakitkhusus',
	URL_RSK_DETAIL: (id: string) => `rumahsakitkhusus/${id}`,
	URL_PUSKESMAS: 'puskesmas',
	URL_PUSKESMAS_DETAIL: (id: string) => `puskesmas/${id}`,
}

export const CCTV = {
	URL_CCTVBALITOWER_DETAIL: (id: string) => `cctvbalitower/${id}`,
}

export const EMERGENCY = {
	URL_POS_PEMADAM: 'emergency/pospemadam/',
	URL_PETUGAS_PEMADAM: 'emergency/petugaspemadam/',
	URL_AMBULANCE: 'emergency/ambulance/',
	URL_PETUGAS_DINKES: 'emergency/petugasdinkes/',
	URL_PETUGAS_SATPOLPP: 'emergency/petugassatpolpp/',
	URL_POSPOLDA: 'emergency/pospolda/',
	URL_PETUGAS_DISHUB: 'emergency/petugasdishub/',
}
