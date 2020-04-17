# nodejs-jakarta-api

Node.js wrapper for JakGo API (api.jakarta.go.id)

> API Jakgo merupakan sebuah layanan yang menyediakan informasi data yang ada di lingkup Pemerintah Provinsi DKI Jakarta. Data ini mencakup semua bidang yang ada di Provinsi DKI Jakarta seperti Kesehatan, Kebersihan, Transportasi, dll.

## Get your token

+ Go to [api.jakarta.go.id](http://api.jakarta.go.id/)
+ Login or register
+ Create new Apps

## How to use?

Create instance

```js
import JakGoAPI from 'nodejs-jakarta-api';
const JakGoAPI = new JakGoAPI({ token: 'YOUR_TOKEN_HERE' });
```

Create request

```js
const response = await JakGoAPI.getKota();
```

## Available Methods

| Method Name 		  |  Description |
|-------------------|--------------|
| `getKota`  				|  Get Kota 	 |
| `getKelurahan`  	|  Get Kelurahan |
| `getKecamatan`  	|  Get Kecamatan |
| `getRW`  					|  Get RW |

## Credits

- [api.jakarta.go.id](http://api.jakarta.go.id/)

---

Copyright © 2020 by Irfan Maulana
