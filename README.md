This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Este es un proyecto creado por Gluonico. Basándonos en arquitecturas Jamstack, usando Next.JS para generación de aplicación SSR y generar contenido estático usando CMS Headless para almacenamiento de contenido. Esta aplicación está alojada en Vercel.

Para VALTIKO - Cristian Giraldo

npm install

First, run the development server:

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Otras Integraciones

Es necesario conectar el proyecto con la cuenta de vercel. 
El proyecto debe estar alojado en un repositorio. Github en este caso.
Y posteriormente debe relacionarse el proyecto en Vercel con el repositorio en Github. Esto se hace desde configuración de proyecto en Vercel.com.

Este proyecto usa Prismic, como proveedor CMS Headless.
La conexion con prismic se realiza en prismic-configuration.js. Accediendo a las variables, que deben estar configuradas en el archivo .env.local.

## Agregar y modificar tipos de datos en pismic

Es necesario instalar y ejecutar slicemachine.
Es una consola gráfica, que se ejecuta en el puerto :9000, para editar, agregar, custom Types.
Para agregar información y creación de instancias de esos custom Types, se hace por medio web prismic.io

## Deploy on Vercel

Los valores de las variables de entorno, alojadas en .env.local, deben estar agregados en la configuración de proyecto.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.