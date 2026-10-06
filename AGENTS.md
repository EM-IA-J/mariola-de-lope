# Control de versiones

Este proyecto mantiene su historial en el repositorio principal `EM-IA-J/mariola-de-lope`.

- Al completar cambios solicitados en la web, comprueba el resultado, crea un commit descriptivo y súbelo al remoto `github`.
- Incluye únicamente los archivos correspondientes al trabajo realizado y conserva cualquier cambio ajeno.
- El remoto `origin` pertenece a Sites y se utiliza para publicar; conserva ambos remotos. Tras publicar mediante Sites, sube también los commits resultantes a `github`.
- No uses force push ni reescribas el historial sin una petición explícita.
- No guardes credenciales, tokens, archivos `.env` ni archivos temporales en Git.
- Mantén coherentes las versiones española (`dist/index.html`) e inglesa (`dist/en/index.html`).
- El destino solicitado para la web es Hostinger, en marioladelope.com. Consulta `HOSTINGER.md` para la conexión y su estado; no supongas que está activa sin verificarlo en hPanel.
- Sube los cambios a `main` en el remoto `github`; el workflow genera la rama `hostinger`. No edites ni fuerces esa rama de publicación.
- Conserva el remoto de Sites como historial previo; no publiques allí de forma rutinaria al trabajar en la migración a Hostinger.
- Hostinger indica a los navegadores que guarden `style.css` y `app.js` 7 días. Cada vez que cambies alguno, actualiza su `?v=` en `dist/index.html` y `dist/en/index.html` para que los visitantes vean la versión nueva.
