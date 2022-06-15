import React from 'react';
import Button from '../atoms/RegisterButton';

const ParrainageCard = () => {
    return (
        <>
            <div className='w-full h-2/3' style={{ backgroundColor: "#BBF49B" }}>
                <div className='grid grid-cols-1 place-items-center'>
                    <div className='text-center mt-10 mb-6 text-3xl font-bold'>
                        <p>PARRAINER UN AMI</p>
                    </div>
                    <img className='object-scale-down h-60 w-96 mb-4' src={process.env.PUBLIC_URL + '/img/ami.png'} />
                    <Button label='Partager votre code' />
                    <p className='mt-6 font-bold'>Offrez 10€ et recevez 10€ - Invitez vos amis et c'est nous qui régalons !</p>
                </div>
            </div>
        </>
    );
};

export default ParrainageCard;
