import { Item } from '../Item/Item';

export const ItemList = ( {listProducts} ) => {

  return (

    <>
      <h3 className="shop center">Nuestra Tienda</h3>
      <div className="products container">

        { listProducts.map( (products) => 
          (<Item 
            products={products} 
          />) 
        ) }
      </div>
   </>

  )
};
