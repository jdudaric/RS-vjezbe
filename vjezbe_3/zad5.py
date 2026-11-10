import asyncio


async def secure_data(podaci):
    await asyncio.sleep(3)
    return {
        'prezime': podaci['prezime'],
        'broj_kartice': hash(podaci['broj_kartice']),
        'CVV': hash(podaci['CVV'])
    }


async def main():
    podaci = [
        {'prezime': 'Horvat', 'broj_kartice': '1111222233334444', 'CVV': '123'},
        {'prezime': 'Anić', 'broj_kartice': '5555666677778888', 'CVV': '456'},
        {'prezime': 'Babić', 'broj_kartice': '9999000011112222', 'CVV': '078'}
    ]
    zadaci = [asyncio.create_task(secure_data(podatak)) for podatak in podaci]
    rezultati = await asyncio.gather(*zadaci)
    for rezultat in rezultati:
        print(rezultat)


if __name__ == '__main__':
    asyncio.run(main())
