CATCHAT — PUBLIKACJA PRZEZ IPHONE

1. Rozpakuj ZIP w aplikacji Pliki.
2. Wejdź na https://github.com/ i utwórz repozytorium o nazwie catchat.
3. Dodaj do repozytorium zawartość tego folderu: index.html, styles.css, app.js oraz folder functions. Nie wysyłaj żadnych kluczy API ani haseł.
4. Wejdź na https://dash.cloudflare.com/ → Workers & Pages → Create → Pages → Connect to Git.
5. Wybierz repozytorium catchat. Build command zostaw pusty (jeśli formularz wymaga polecenia, wpisz `exit 0`), a Build output directory ustaw na `.`.
6. Uruchom wdrożenie. Cloudflare pokaże publiczny adres strony.
7. W ustawieniach projektu znajdź Functions/Settings → Bindings → Add binding → Workers AI. Nazwa bindingu musi być dokładnie `AI`.
8. Zapisz i ponownie wdroż projekt.

WAŻNE:
- To jest prosty punkt startowy CatChat do publikacji, nie kompletna produkcyjna platforma.
- Przed udostępnieniem szerokiej publiczności dodaj limity zapytań i ochronę przed botami; bez nich inni mogą szybko zużyć darmowy limit.
- Darmowe użycie AI jest limitowane. Nie włączaj płatnego planu ani rozliczeń bez zgody rodzica/opiekuna.
- Historia rozmów w tej wersji nie jest zapisywana na serwerze.
