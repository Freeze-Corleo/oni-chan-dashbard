import Card from "../components/atoms/Card";
import Input from "../components/atoms/Input";
import MenuCard from "../components/atoms/MenuCard";
import SearchInput from "../components/atoms/SearchInput";
import Footer from "../components/organisms/Footer";
import Navigation from "../components/organisms/Navigation";
import { connect } from 'react-redux';
import { IProduct } from "../appState";
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProductsInformations } from '../core-logic/usecases/products/productsUseCases';
import { ProductGateway } from "../secondary-adapters/products/productGateway";
import { selectProductReducer } from "../view-model-generation/generateProductModel";

const title = "Burger and co";
const rating = "4.8/5 Excellent ( + 400 avis )";
const km = "2.6 km - 15 min";
const horaires = "Horaires : Ferme à 20h30";
const detail = "Livraison offerte à partir de 30€";

const menus = {
    menuEnfant: [
        {
            plat: "Burger",
            img: "/img/burger.jpg"
        },
        {
            plat: "Pizza",
            img: "/img/pizza.jpg"
        },
        {
            plat: "Camion",
            img: "/img/camion.png"
        },
    ],
    menuAdulte: [
        {
            plat: "Pizza",
            img: "/img/pizza.jpg"
        },
        {
            plat: "Burger",
            img: "/img/burger.jpg"
        },

    ],
    accompagnement: [
        {
            plat: "Courses",
            img: "/img/les-courses.png"
        },
        {
            plat: "Camion",
            img: "/img/camion.png"
        },

    ],

}


const Restaurant = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProductReducer);
    const _product = new ProductGateway();
    async function getAll(params: any) {
        const {error} = await _product.retrieve();
        if(!error){
         dispatch(retrieveProductsInformations());
        }
     }
    
    return (
        <>
            <Navigation />
            <div className='grid grid-cols-2 gap-0 place-items-center mt-20 mb-10 p-20'>
                <SearchInput />
                <div className="mt-28">
                    <Card img='/img/burger.jpg' />
                </div>
                <div className="mt-20 justify-self-start space-y-4">
                    <p className="font-bold text-5xl">{title}</p>
                    <p>{rating}</p>
                    <p>{km}</p>
                    <p>{horaires}</p>
                    <p>{detail}</p>
                </div>
            </div>
            <div className="p-10">
            {menus.menuAdulte ? (
                <div className="pl-20">
                    <div className="font-bold text-4xl mb-10">Menu adulte</div>
                    <div className="grid grid-cols-3 place-items-center gap-10 mb-16">
                        {menus.menuAdulte.map(
                            plat =>
                                <MenuCard img={plat.img} label={plat.plat} />
                        )}
                    </div>
                </div>
            ) : (
                <>
                </>
            )}

            {menus.menuEnfant ? (
                <div className="pl-20">
                    <div className="font-bold text-4xl mb-10">Menu enfant</div>
                    <div className="grid grid-cols-3 place-items-center gap-10 mb-16">
                        {menus.menuEnfant.map(
                            plat =>
                                <MenuCard img={plat.img} label={plat.plat} />
                        )}
                    </div>
                </div>
            ) : (
                <>
                </>
            )}

            {menus.accompagnement ? (
                <div className="pl-20">
                    <div className="font-bold text-4xl mb-10">Accompagnements</div>
                    <div className="grid grid-cols-3 place-items-center gap-10 mb-16">
                        {menus.accompagnement.map(
                            plat =>
                                <MenuCard img={plat.img} label={plat.plat} />
                        )}
                    </div>
                </div>
            ) : (
                <>
                </>
            )}
            
            </div>
            {console.log("mins", products.data)}
            <button onClick={getAll} >YYo </button>
            <Footer />
        </>
    )
} 
export default Restaurant;
