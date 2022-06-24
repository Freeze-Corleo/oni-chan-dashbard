import Card from "../components/atoms/Card";
import Input from "../components/atoms/Input";
import MenuCard from "../components/atoms/MenuCard";
import SearchInput from "../components/atoms/SearchInput";
import Footer from "../components/organisms/Footer";
import Navigation from "../components/organisms/Navigation";
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProductsInformations } from '../core-logic/usecases/products/productsUseCases';
import { dispatchAddProduct } from "../core-logic/usecases/basket/basketUseCase";
import { ProductGateway } from "../secondary-adapters/products/productGateway";
import { selectRestaurantReducer } from "../view-model-generation/generateRestaurantModel";
import { selectBasketReducer } from "../view-model-generation/generateBasketModel";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { Button } from "@mui/material";
import { retrieveRestaurantInformation } from "../core-logic/usecases/restaurant/restaurantUseCase";
import { retrieveRestaurantsInformations } from "../core-logic/usecases/restaurant/restaurantUseCase";

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
            img: "/img/pizza.jpg",
            price: 7.5,
        },
        {
            plat: "Burger",
            img: "/img/burger.jpg",
            price: 12
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

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    boxShadow: 24,
    borderRadius: '69px',
};

const Restaurant = () => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);
    let prix = 0;
    const addProduct = (img: string, name: string, price: number) => {
        setId(id + 1);
        dispatch(dispatchAddProduct({ id: id, img: img, name: name, price: price }));
    }
    const [datas, setDatas] = useState({
        img: '',
        plat: '',
        price: 0,
    });
    const handleOpen = (img: string, plat: string, price: number) => {
        setDatas({ img, plat, price });
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const restaurants = useSelector(selectRestaurantReducer);
    const basket = useSelector(selectBasketReducer);

    async function getAll(params: any) {
            dispatch(retrieveRestaurantInformation("62b472a47db2c0636e779225"));
          // dispatch(retrieveRestaurantsInformations());
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
                                    <>
                                        <button onClick={ho => handleOpen(plat.img, plat.plat, plat.price)}><MenuCard img={plat.img} label={plat.plat} /></button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <div className="grid grid-cols-1 place-items-center mt-10">
                                                <img className="rounded-lg w-full h-full" src={process.env.PUBLIC_URL +  datas.img } alt="" />
                                                <p className="text-3xl m-5">{datas.plat}</p>
                                                <Button variant="outlined" onClick={price => addProduct(datas.img, datas.plat, datas.price)}>Ajouter au panier</Button>
                                                </div>
                                            </Box>
                                        </Modal>

                                    </>
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
            {basket.data?.map(product => {
                prix += product.price;
            })}
            {basket.data && basket.data?.length > 1 ?
                (
                    <div className="lg:p-10 bg-green-50 fixed bottom-0 w-full z-50 text-center">
                        Prix de votre panier : {prix} €
                    </div>
                ) : (
                    <>

                    </>
                )}
                <button onClick={getAll}>yo</button>
                {console.log(restaurants)}
            <Footer />
        </>
    )
}
export default Restaurant;
