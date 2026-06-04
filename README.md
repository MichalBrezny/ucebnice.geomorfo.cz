# Základy geomorfologie — elektronická učebnice

Online učebnice geomorfologie dostupná na [ucebnice.geomorfo.cz](https://ucebnice.geomorfo.cz/). Vznikla převodem původních tištěných skript do webové podoby a postupně ji rozšiřuji o interaktivní prvky, videa a animace.

Učebnice je určena především studentům fyzické geografie a učitelství geografie, ale i všem, kdo se chtějí dozvědět více o zemském reliéfu a procesech, které ho utvářejí.

## Obsah

- **Úvod** — co je geomorfologie, základní koncepty
- **Endogenní procesy a formy** — globální geomorfologie, tektonická geomorfologie, vulkanismus
- **Exogenní procesy a formy** — zvětrávání, svahy, fluviální, glaciální, periglaciální, eolická, krasová, marinní geomorfologie
- **Dlouhodobý vývoj reliéfu** *(rozpracováno)*
- **Geomorfologické metody** *(rozpracováno)*
- **Aplikovaná geomorfologie** *(rozpracováno)*

## Chcete přispět nebo jste našli chybu?

Jakékoliv příspěvky jsou vítány — opravy překlepů, věcné připomínky i doplnění textu.

1. Forkněte tento repozitář
2. Upravte příslušný `.md` soubor v `_chapters/`
3. Pošlete pull request

Není potřeba instalovat Jekyll ani nic jiného — obsah kapitol jsou běžné Markdown soubory. Po schválení změny zajistím nasazení na web.

Případně můžete zadat [issue](https://github.com/MichalBrezny/ucebnice.geomorfo.cz/issues) nebo mě kontaktovat přes [michalbrezny.com](https://www.michalbrezny.com).

## Technický stack

Učebnice je postavena na [Jekyll](https://jekyllrb.com/) s tématem [jekyll-chapterbook](https://github.com/jasongrimes/jekyll-chapterbook). Obsah je psán v Markdownu (kramdown), matematické vzorce renderuje MathJax, citace obstarává jekyll-scholar s BibTeX databází.

### Lokální spuštění

```bash
bundle install
bundle exec jekyll serve --livereload
```

Web se spustí na `http://localhost:4000`. Alternativně je k dispozici devcontainer pro VS Code (Jekyll na portu 8080).

## Podpora

Líbí se vám učebnice? Podpořte mě na [Ko-fi](https://ko-fi.com/michalbrezny). Díky!
