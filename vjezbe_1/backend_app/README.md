# REST API – Express

## Pokretanje

U ovoj mapi pokrenuti `npm ci`, zatim `npm start`.
Lokalna adresa je http://localhost:3000. Zaustavljanje: Ctrl+C.

## Endpointi

- `GET /api/health` – status i vrijeme poslužitelja.
- `GET /api/courses` – primjer popisa kolegija.
- `POST /api/echo` – prima JSON s poljem `message` i vraća poruku; ništa se ne pohranjuje.
- Nepostojeća putanja vraća 404, neispravna poruka 400.

## Render – Web Service

- Repository: jdudaric/RS-vjezbe
- Root Directory: vjezbe_1/backend_app
- Language: Node
- Build Command: npm ci
- Start Command: npm start
- Instance Type: Free
- Health Check Path: /api/health

## Javni URL

https://rs-vjezbe-backend-jakov.onrender.com

## Provjera pomoću curl-a

Lokalno (nakon deploymenta zamijeniti osnovnu adresu javnim URL-om):

```sh
curl -i http://localhost:3000/api/health
curl -i http://localhost:3000/api/courses
curl -i -X POST http://localhost:3000/api/echo -H 'Content-Type: application/json' -d '{"message":"Pozdrav s klijenta!"}'
```

## Provjera u Postmanu

Izraditi GET zahtjeve na javni URL s putanjama /api/health i /api/courses.
Za POST /api/echo odabrati Body → raw → JSON i upisati:

```json
{"message":"Pozdrav iz Postmana!"}
```

Kliknuti Send i provjeriti status 200 te JSON odgovor.
Spremiti snimke provjera deployanog servisa kao dokaz rada.
