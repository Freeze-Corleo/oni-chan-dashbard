import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveHistoCommandByUser } from '../../../core-logic/usecases/command/commandUseCase';
import { retrieveMyUserFromCookie } from '../../../core-logic/usecases/my-profil/myUserUseCase';
import { selectCommandReducer } from '../../../view-model-generation/generateCommandModel';
import { selectMyProfilReducer } from '../../../view-model-generation/generateMyProfilModel';


const HistoCommandResto = () => {
    const [response, setResponse] = useState('');
    const dispatch = useDispatch();
    const commands = useSelector(selectCommandReducer);
    const commandsData: any = commands;

    const cookie: any = useCookies(['FREEZE_JWT']);
    const user = useSelector(selectMyProfilReducer);
    React.useEffect(() => {
        dispatch(retrieveMyUserFromCookie(cookie[0].FREEZE_JWT));
    }, []);
    useEffect(() => {
        if (user) {
            dispatch(retrieveHistoCommandByUser(user?.data?.uuid, "restorer"))
        }
    }, [user])

    return (
        <>
            <div className="col-span-12 bg-white rounded-lg shadow-lg">
                {commandsData?.commands?.data ? (
                    <>
                        <div className="col-span-12 bg-white rounded-lg mt-60 shadow-lg">
                            <div className="grid grid-cols-3 gap-4 m-20 mt-60 p-10">

                                {console.log(commandsData)}
                                {commandsData?.commands?.data?.map(((command: any) => {
                                    return <>
                                        <p>Prix de la commande : {command.price} € dans la ville de {command.city}</p>
                                    </>
                                }))}
                            </div>
                        </div>
                    </>
                ) : (<></>)}
            </div>
        </>
    );
};
export default HistoCommandResto;
