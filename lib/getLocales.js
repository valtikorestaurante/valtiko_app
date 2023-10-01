/**
 * Devuelve un array de metadatos de idiomas disponibles en el repositorio.
 *
 * Cada elemento del array contiene la información del idioma, incluyendo el nombre del idioma tal como está configurado en el repositorio de Prismic.
 *
 * @param {import("@prismicio/client").Client} client
 *
 * @returns {Promise<{ id: string, name: string }[]>}
 */
export async function getLocales(client) {
  const repository = await client.getRepository();

  return repository.languages.map((lang) => {
    return {
      id: lang.id,
      name: lang.name,
    };
  });
}