# Despliegue de marioladelope.com

## Funcionamiento

1. Los cambios del proyecto se guardan en `main` de `EM-IA-J/mariola-de-lope`.
2. GitHub Actions valida el sitio y actualiza la rama `hostinger` con el contenido de `dist/` en la raíz.
3. Una vez vinculada la rama desde hPanel y activado el despliegue automático, Hostinger publica sus cambios en marioladelope.com.

La rama `hostinger` es generada: no se debe editar manualmente. Conserva el historial de los archivos publicados y no incluye el código de gestión, documentación, `.git` ni la configuración de Sites. El workflow no necesita credenciales de Hostinger.

## Estado verificado el 5 de octubre de 2026

La web está publicada en https://marioladelope.com/ y https://www.marioladelope.com/. El alojamiento PHP/HTML, creado el 3 de octubre inicialmente como `seashell-octopus-604875.hostingersite.com`, ya tiene asociado el dominio principal.

Se ha restablecido la conexión a `EM-IA-J/mariola-de-lope`, rama `hostinger`, destino `public_html`. hPanel confirma despliegue completado e implementación automática activada. Tras limpiar la caché de Hostinger, se verificaron HTTPS, español, `/en/`, imagen principal, CSS, JavaScript y ambos CV (HTTP 200).

El fork `marioladelope/mariola-de-lope` no es el origen de producción. Sus contribuciones deben integrarse en el repositorio principal. No se ha configurado la aceptación automática de contribuciones.

## Referencia para configurar la conexión

La preparación en GitHub no conecta por sí sola el alojamiento. Para reconstruir la conexión desde la cuenta de Hostinger que gestiona marioladelope.com:

- Comprobar el tipo de alojamiento. La integración Git funciona con webs HTML/PHP de alojamiento web o cloud; el constructor de Hostinger no admite esta integración.
- Si la web actual utiliza el constructor, conservar una copia antes de sustituirla y preparar un sitio HTML compatible con el plan. La sustitución de la web actual está autorizada por el propietario.
- Desde el sitio correcto, abrir **Avanzado → Git → Conectar con GitHub**.
- Autorizar el acceso al repositorio privado `EM-IA-J/mariola-de-lope`, limitado a ese repositorio cuando el panel lo permita.
- Seleccionar la rama **hostinger** y el directorio de destino **public_html** del sitio marioladelope.com. No seleccionar `main`: el HTML publicado está dentro de `dist/` en esa rama.
- Desplegar y activar el despliegue automático.
- Comprobar el dominio, HTTPS, `/en/`, las imágenes y las descargas de CV tras el primer despliegue.

## Seguimiento y recuperación

El resultado de **Prepare Hostinger deployment** confirma la actualización de la rama de publicación; el estado del despliegue real se comprueba en hPanel. No modificar el dominio ni el correo de otros sitios de la cuenta.

Para recuperar una versión anterior, revertir el commit correspondiente en `main` y subir el nuevo commit a GitHub. Esto genera una nueva publicación sin reescribir el historial. También se puede volver a ejecutar el workflow desde Actions para publicar el estado actual de `main`.

Documentación oficial: https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/
