import '../../App.css'
import { BarHero } from '../BarHero/BarHero';


export const Hero = () => {

    return (

        <>
            <div className="hero">
                <div className="hero__content container">
                        <h1>Bienvenidos a <span>Fermín Pet Shop!</span></h1>
                        <p>Descubre todos nuestros productos!</p>
                </div>
            </div>     
            <BarHero/>   
        </>                      
        
    )
};