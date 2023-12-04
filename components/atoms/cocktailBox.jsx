import Link from 'next/link';

const CocktailBox = ({ element }) => {
    const queryString = encodeURIComponent(JSON.stringify(element));
  
    return (
    <Link href={`/cocktail/${element.id}`}>
        <div 
            className="bg-cover bg-center shadow-2xl rounded-xl box-border"
            style={{backgroundImage: `url(${element.data.cocktail_imagen.url})`,}}>
                <div className='xl:hover:bg-black xl:hover:opacity-75 rounded-xl'>
                    <div className="rounded-xl h-32 border-4 text-white font-viking">
                        <div className='p-1'>
                            <div className='font-viking flex xl:text-lg text-xs'>
                                {element.data.cocktail_titulo}
                            </div>
                        </div>
                        
                    </div>
                </div>
      </div>
    </Link>
    );
  };

  export default CocktailBox;