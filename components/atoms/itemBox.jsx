import Link from 'next/link';

const ItemBox = ({ element }) => {
    const queryString = encodeURIComponent(JSON.stringify(element));
  
    return (
    <Link href={`/producto/${queryString}`}>
        <div 
            className="bg-cover bg-center shadow-2xl rounded-3xl"
            style={{backgroundImage: `url(${element.data.plato_imagen.url})`,}}>
            <div className="box-border h-32 border-4 text-white font-viking">
                {element.data.plato_titulo}
            </div>
      </div>
    </Link>
    );
  };

  export default ItemBox;