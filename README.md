Este es un proyecto de [Next.js](https://nextjs.org/) creado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Empezando
Este proyecto fue iniciado por Gluonico. Utiliza arquitecturas Jamstack, empleando Next.JS para generar aplicaciones SSR y contenido estático mediante CMS Headless para el almacenamiento de contenido. La aplicación está alojada en Vercel.

Para VALTIKO - Cristian Giraldo

npm install

Primero, ejecuta el servidor de desarrollo:

npm run dev

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `pages/index.js`. La página se actualiza automáticamente a medida que editas el archivo.

Las [rutas de API](https://nextjs.org/docs/api-routes/introduction) están disponibles en [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint se puede editar en `pages/api/hello.js`.

El directorio `pages/api` está mapeado a `/api/*`. Los archivos en este directorio se tratan como [rutas de API](https://nextjs.org/docs/api-routes/introduction) en lugar de páginas React.

## Otras Integraciones

Es necesario conectar el proyecto con la cuenta de Vercel. El proyecto debe estar alojado en un repositorio, en este caso, Github. Luego, el proyecto en Vercel debe vincularse con el repositorio en Github, lo cual se hace desde la configuración del proyecto en Vercel.com.

Este proyecto utiliza Prismic como proveedor de CMS Headless. La conexión con Prismic se realiza en `prismic-configuration.js`, accediendo a las variables que deben configurarse en el archivo `.env.local`. (Es importante para la seguridad del proyecto, ya que se utilizan variables de entorno.)

## Agregar y modificar tipos de datos en Prismic

Es necesario instalar y ejecutar SliceMachine. Es una consola gráfica que se ejecuta en el puerto: 9000 y que permite editar, agregar y personalizar tipos. Para agregar información y crear instancias de esos tipos personalizados, se realiza a través de la web prismic.io.

## Implementación en Vercel

Los valores de las variables de entorno, alojados en `.env.local`, deben agregarse a la configuración del proyecto.

La forma más sencilla de implementar tu aplicación Next.js es utilizar la [Plataforma Vercel](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de implementación de Next.js](https://nextjs.org/docs/deployment) para obtener más detalles.

Este proyecto utiliza un tipo de letra especial llamado Vikingo. Su nombre es: Celtic Garamond the 2nd, y se encuentra en la carpeta FONTS con el nombre VikingMedium.ttf.
