import Link from 'next/link';

const ItemBox = ({ element }) => {
    const queryString = encodeURIComponent(JSON.stringify(element));
  
    return (
    <Link href={`/producto/${queryString}`}>
        <div 
            className="xl:hover:bg-black xl:hover:opacity-75 bg-cover bg-center shadow-2xl rounded-xl"
            style={{backgroundImage: `url(${element.data.plato_imagen.url})`,}}>
            <div className="rounded-xl box-border h-32 border-4 text-white font-viking">
                <div className=''>
                    <div className='font-viking'>
                        {element.data.plato_titulo}
                    </div>
                </div>
                
            </div>
      </div>
    </Link>
    );
  };

  export default ItemBox;