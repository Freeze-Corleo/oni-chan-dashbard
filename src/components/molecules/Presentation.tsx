const Presentation = () => {
    return (
        <>
            <div className='text-center mt-20 mb-20 text-3xl font-bold'>
                <p>TRAVAILLER AVEC ONI-CHAN</p>
            </div>
            <div className='grid grid-cols-2 gap-0 place-items-center mb-40 p-10'>
                <img className='object-scale-down h-48 w-48 mb-4 ml-32' src={process.env.PUBLIC_URL + '/img/camion.png'} />
                <div>
                    <p className='mt-6 font-bold text-center text-3xl'>Livrer pour nous</p>
                    <p className='mt-6 text-center'>Roulez avec Matr et travaillez à votre propre rythme. En rejoignant la communauté de livreurs et livreuses partenaires de Matr, vous profiterez également de tout un tas d'avantages et de réductions.</p>
                </div>
                <div>
                    <p className='mt-6 font-bold text-center text-3xl'>Devenez partenaire</p>
                    <p className='mt-6 text-center'>Devenez partenaire de Matr et attirez encore plus de clients. Nous gérons la livraison, vous ne gérez que la préparation !</p>
                </div>
                <img className='object-scale-down h-48 w-48 mb-4 mr-32' src={process.env.PUBLIC_URL + '/img/serveur.png'} />
                <img className='object-scale-down h-48 w-48 mb-4 ml-32' src={process.env.PUBLIC_URL + '/img/travail.png'} />
                <div>
                    <p className='mt-6 font-bold text-center text-3xl'>Carrières</p>
                    <p className='mt-6 text-center'>Notre mission est de révolutionner la manière dont vous commandez vos plats. C'est un projet ambitieux, comme nous. Et nous avons besoin de vous pour nous aider !</p>
                </div>
            </div>
        </>
    );
}

export default Presentation;