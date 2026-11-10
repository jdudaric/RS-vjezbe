import asyncio

async def dohvati_korisnike():
    await asyncio.sleep(3)
    return [
        {"id": 1, "ime": "Marko"},
        {"id": 2, "ime": "Ana"}
    ]

async def dohvati_proizvode():
    await asyncio.sleep(5)
    return [
        {"id": 1, "naziv": "Laptop"},
        {"id": 2, "naziv": "Mobitel"}
    ]

async def main():
    korisnici, proizvodi = await asyncio.gather(dohvati_korisnike(),dohvati_proizvode())

    print("Korisnici:", korisnici)
    print("Proizvodi:", proizvodi)

asyncio.run(main())
