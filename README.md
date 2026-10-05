# Mariola de Lope

## Control de versiones

Repositorio principal: https://github.com/EM-IA-J/mariola-de-lope

El remoto `github` conserva el código, las imágenes, los CV y el historial de cambios. El remoto `origin` se mantiene para publicar en Sites.

La publicación para Hostinger se prepara automáticamente al subir cambios de `dist/` a `main`. GitHub Actions actualiza la rama `hostinger`, conectada a marioladelope.com con implementación automática activada. Web pública y conexión verificadas el 5 de octubre de 2026; ver [HOSTINGER.md](HOSTINGER.md).

Después de comprobar cada cambio, crea un commit y ejecuta `git push github main`. Si el proceso de publicación crea otro commit, súbelo también a GitHub. El repositorio no sincroniza cambios sin commit de forma automática.

Portfolio estático en español. Inspiración visual: https://www.zendaya.com/.
Contenido y fotografías recuperados de https://marioladelope.com/ el 2 de octubre de 2026 con autorización del propietario.

## Ver en local

Desde esta carpeta: `python3 -m http.server 4173 --directory dist`
Abrir http://localhost:4173.

## Edición

- `dist/index.html`: contenido, trayectoria y enlaces.
- `dist/style.css`: diseño y adaptación móvil.
- `dist/app.js`: filtros, galería, visor accesible y navegación.
- `dist/assets/`: fotografías descargadas del sitio original.
- `research/assets.json`: correspondencia de archivos con sus fuentes.

El videobook usa el vídeo existente de Vimeo (1229566565). El correo abre el cliente de email; no hay un formulario ni un servidor de envíos. Los proyectos futuros conservan su fecha prevista. La nueva web ya se publica en marioladelope.com.

## Actualización bilingüe

- Español en `/` e inglés en `/en/`, con selector de idioma.
- Jost alojada localmente en pesos 200, 400 y 600; licencia OFL incluida.
- CV originales descargables en `/cv/`.
- Polas usa inicialmente el retrato del CV. Las temporadas se añaden en `seasons` dentro de `dist/app.js` cuando estén confirmadas.
