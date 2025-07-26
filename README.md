# QUICKBITE - onlajn platforma za dostavu hrane

## Opis projekta

Online platforma za dostavu hrane omogućava korisnicima da pregledaju ponudu restorana, naručuju hranu i prate status svojih porudžbina. Platforma podržava tri vrste korisnika:

**Neulogovani korisnici**: Mogu pregledati restorane, jelovnike i kategorije hrane.

**Registrovani korisnici**: Mogu naručivati hranu, pratiti porudžbine i ostavljati recenzije.

**Administratori**: Upravljaju restoranima, jelima, kategorijama i prate statistiku prodaje.

Projekat je razvijen koristeći Laravel za backend i React za frontend.

## Tehnologije

**Frontend**: React, JavaScript, HTML, CSS

**Backend**: Laravel (PHP), MySQL

**Autentifikacija**: Laravel Sanctum

**Komunikacija**: REST API

## Instalacija i pokretanje

**Preduslovi**:

Node.js (https://nodejs.org/)

Composer (https://getcomposer.org/)

MySQL baza podataka

PHP (preporučeno 8.0 ili novije)

## Koraci za instalaciju

_Kloniranje projekta_:

```bash
git clone https://github.com/elab-development/internet-tehnologije-2024-projekat-dostavahrane_20210017_20210203.git
cd internet-tehnologije-2024-projekat-dostavahrane_20210017_20210203
```

_Instalacija backend zavisnosti_:

```bash
cd backend
composer install
```

_Konfiguracija baze podataka_:

1. Kreirajte MySQL bazu podataka.
2. Kopirajte _.env.example_ u _.env_ i ažurirajte sledeće vrednosti:

```text
DB_DATABASE=ime_baze
DB_USERNAME=korisnik_baze
DB_PASSWORD=lozinka_baze
```

_Pokretanje migracija i seeder-a_:

```bash
php artisan migrate --seed
```

_Instalacija frontend zavisnosti_:

```bash
cd ../frontend
npm install
```

_Pokretanje projekta_:

Pokrenite Laravel server (backend):

```bash
cd ../backend
php artisan serve
```

Pokrenite React aplikaciju (frontend):

```bash
cd ../frontend
npm start
```

_Pristup aplikaciji_:

Frontend: http://localhost:3000

Backend API: http://localhost:8000

## Funkcionalnosti

**Za sve korisnike**:

_Pregled restorana_: Galerija restorana sa osnovnim informacijama.

_Pretraga jela i restorana_: Pretraga po nazivu, kategoriji ili cenovnom rangu.

_Pregled menija_: Detaljan pregled jela u restoranima sa mogućnošću filtriranja i sortiranja.

_Mapa restorana_: Prikaz lokacija restorana na mapi.

**Za registrovane korisnike**:

_Registracija i prijava_: Kreiranje naloga i prijava u sistem.

_Naručivanje hrane_: Dodavanje jela u korpu i kreiranje porudžbine.

_Pregled istorije porudžbina_: Lista svih prethodnih narudžbina.

_Ocenjivanje_: Ostavljanje recenzija za hranu i uslugu dostave.

**Za administratore**:

_Upravljanje restoranima_: Dodavanje, brisanje i izmena restorana.

_Upravljanje jelima_: Dodavanje i uklanjanje jela iz restorana.

_Upravljanje kategorijama_: Kreiranje i brisanje kategorija jela.

_Statistika_: Pregled broja porudžbina, prihoda i popularnih jela po restoranima.

## Autori

Anastasija Spasić (2021/0017)

Aleksa Vlaški (2021/0203)

## Mentor

Tamara Naumović

## GitHub Repozitorijum

Projekat je dostupan na GitHub-u:
https://github.com/elab-development/internet-tehnologije-2024-projekat-dostavahrane_20210017_20210203
