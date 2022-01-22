const productos = [
	{
		nombre: 'Buzo',
		imagen: '../img/producto1.jpg',
		descripImagen: 'buzo-pato-lucas',
		precio: 890,
		oferta: 950,
        categoria: 'Perro',
        id: 1,
		stock: 20,
	},

    {
		nombre: 'Casita de madera con rascador',
		imagen: '../img/producto2.jpg',
		descripImagen: 'casita-con-rascador',
		precio: 3150,
		oferta: 3400,
        categoria: 'Gato',
        id: 2,
		stock: 6,
	},

    {
		nombre: 'Corcho con plumas y cascabel',
		imagen: '../img/producto3.jpg',
		descripImagen: 'corcho-plumas',
		precio: 129,
		oferta: 150,
        categoria: 'Gato',
        id: 3,
		stock: 15,
	},

    {
		nombre: 'Collar Huesitos Liso Nº2',
		imagen: '../img/producto4.jpg',
		descripImagen: 'collar-huesitos',
		precio: 265,
		oferta: 300,
        categoria: 'Perro',
        id: 4,
		stock: 25,
	},

    {
		nombre: 'Rascador 2 pisos 80cm',
		imagen: '../img/producto5.jpg',
		descripImagen: 'rascador-dos-pisos',
		precio: 9549,
		oferta: 9800,
        categoria: 'Gato',
        id: 5,
		stock: 3,
	},

    {
		nombre: 'Comedero Mini Gato',
		imagen: '../img/producto6.jpg',
		descripImagen: 'rascador-dos-pisos',
		precio: 155,
		oferta: 200,
        categoria: 'Gato',
        id: 6,
		stock: 30,
	},

    {
		nombre: 'Comedero MDF Gatito simple',
		imagen: '../img/producto7.jpg',
		descripImagen: 'comedero-mdf-simple',
		precio: 729,
		oferta: 800,
        categoria: 'Gato',
        id: 7,
		stock: 15,
	},

    {
		nombre: 'Cinturon Seguridad (doble)',
		imagen: '../img/producto8.jpg',
		descripImagen: 'cinturon-seguridad',
		precio: 369,
		oferta: 399,
        categoria: 'Gato',
        id: 8,
		stock: 12,
	},

	{
		nombre: 'Peluche ovejita con soga',
		imagen: '../img/producto9.jpg',
		descripImagen: 'peluche-ovejita',
		precio: 455,
		oferta: 520,
        categoria: 'Perro',
        id: 9,
		stock: 8,
	},

	{
		nombre: 'Pelota soga entrelazada',
		imagen: '../img/producto10.jpg',
		descripImagen: 'pelota-soga',
		precio: 195,
		oferta: 220,
        categoria: 'Perro',
        id: 10,
		stock: 20,
	},

	{
		nombre: 'Comedero acero inox Nº2 Cebra (15 cm)',
		imagen: '../img/producto11.jpg',
		descripImagen: 'comedero-aceroinox-cebra-15cm',
		precio: 439,
		oferta: 630,
        categoria: 'Perro',
        id: 11,
		stock: 10,
	},

	{
		nombre: 'Collar Moño brillante',
		imagen: '../img/producto12.jpg',
		descripImagen: 'collar-moño',
		precio: 135,
		oferta: 200,
        categoria: 'Gato',
        id: 12,
		stock: 30,
	},
];



export const getFetch = new Promise( (res,rej)=> {
    let condition= true
    if (condition) {
        setTimeout(()=>{
            res(productos)        
        }, 2000)
    }else{
        rej('404 not found')
    }
} )
