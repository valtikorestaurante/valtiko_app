import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PrismicRichText } from '@prismicio/react'


const IndividualPage = () => {
  const router = useRouter();
  const { product } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (product) {
      // Deserializar la cadena JSON
      try {
        const parsedData = JSON.parse(product);
        setItem(parsedData);
      } catch (error) {
        console.error('Error al deserializar JSON:', error);
      }
    }
  }, [product]);

  console.log(item)

  return (
    <div>
      <h1>Página Individual</h1>
      {item ? (
        <div>
          <h2>{item.data.plato_titulo}</h2>
          <h2>{item.data.plato_categoria}</h2>
        
          <h2>{item.data.plato_precio}</h2>
          <PrismicRichText field={item.data.plato_descripcion}/>

          {/* Mostrar otros detalles del elemento */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default IndividualPage;
