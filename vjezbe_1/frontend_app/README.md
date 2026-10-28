# Vježba 1 – Statična web aplikacija

HTML definira sadržaj, CSS izgled, a JavaScript omogućuje brojač klikova.
Nisu potrebne vanjske biblioteke ni postupak izgradnje (build).

## Lokalno pokretanje

Iz ove mape pokrenuti:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Otvoriti http://localhost:8000. Za zaustavljanje: Ctrl+C.
Brojač radi u pregledniku i ne šalje zahtjeve poslužitelju.

## Render – Static Site

- Repository: `jdudaric/RS-vjezbe`
- Root Directory: `vjezbe_1/frontend_app`
- Build Command: ostaviti prazno; ako obrazac zahtijeva vrijednost, upisati `echo "No build required"`
- Publish Directory: `.`

## Javni URL

https://rs-vjezbe-frontend-jakov.onrender.com