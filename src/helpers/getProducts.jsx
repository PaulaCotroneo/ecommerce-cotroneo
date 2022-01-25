import products from './mock';

export const getProducts = new Promise( (res,rej)=> {
    let condition= true
    if (condition) {
        setTimeout(()=>{
            res(products)        
        }, 2000)
    }else{
        rej('404 not found')
    }
} )
