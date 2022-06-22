import HomeRoot from '../../components/organisms/HomeRoot';

import RegisterRestorerForm from '../../components/molecules/forms/RegisterRestorer';

const RegisterRestorer = () => {
  return (
    <div>
      <div className="">
        <HomeRoot mAuto={false}>
          <div className="absolute top-0">
            <img
              src="https://imagedelivery.net/Ds4NTVcRof2Jd7oc2wT6Wg/6af07a68-f00f-40bd-bfbe-f9818ca21400/public"
              className="object-cover w-screen h-screen"
              alt="header"
            />
          </div>
          <div className="relative z-50 grid h-screen place-content-center">
            <div className="flex items-center">
              <div className="px-32">
                <h1 className="text-[48px] font-medium text-white leading-10 py-4">
                  Une multitude de client à votre port&eacute;e
                </h1>
                <h2 className="text-[16px] font-medium text-white opacity-80">
                  La plateforme internationale MatR vous offre la flexibilité,
                  la visibilité et les données nécessaires pour vous mettre en
                  relation avec davantage de clients. Devenez partenaire dès
                  aujourd'hui.
                </h2>
              </div>
              <div className="pr-48">
                <RegisterRestorerForm />
              </div>
            </div>
          </div>
          <div className="px-32 py-8">
            <h3 className="pb-8 text-2xl font-bold tracking-wide">
              Pourquoi MatR ?
            </h3>
            <div className="grid grid-cols-3">
              <div className="pr-8">
                <span className="text-xl font-medium ">
                  Livrez vos commandes à votre façon
                </span>
                <div className="pt-4 tracking-wide">
                  Nos offres sont flexibles : vous pouvez ainsi les adapter à
                  vos besoins. Rejoignez MatR et faites livrer vos commandes par
                  vos coursiers ou ceux de notre plateforme.
                </div>
              </div>
              <div className="pr-8">
                <span className="text-xl font-medium ">
                  Augmentez votre visibilité
                </span>
                <div className="pt-4 tracking-wide">
                  Démarquez-vous grâce au marketing intégré à l'application afin
                  de toucher encore plus de clients et d'accroître vos ventes.
                </div>
              </div>
              <div className="pr-8">
                <span className="text-xl font-medium ">
                  Créez du lien avec vos clients
                </span>
                <div className="pt-4 tracking-wide">
                  Transformez vos clients en habitués grâce à des données
                  exploitables, répondez aux avis laissés sur votre
                  établissement ou proposez un programme de fidélité.
                </div>
              </div>
            </div>
          </div>
          <div className="px-32 py-16">
            <h3 className="pb-8 text-2xl font-bold tracking-wide">
              Fonctionnement de MatR pour les restaurants partenaires
            </h3>
            <div className="grid grid-cols-3">
              <div className="pr-8">
                <img
                  src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_493,h_328/v1622579235/assets/3c/3f70e6-bd04-495f-84d8-f7288ad01cb7/original/CustomersOrder.svg"
                  className="object-cover w-full"
                  alt="client passe commande"
                />
                <p className="py-4 text-xl font-medium">
                  Les clients passent commande
                </p>
                <div className="tracking-wide">
                  Le client trouve votre restaurant et passe commande sur
                  l'application MatR.
                </div>
              </div>
              <div className="pr-8">
                <img
                  src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_493,h_328/v1622579254/assets/f8/3a023b-d455-4aab-97a0-12bc3026cebf/original/YouPrepare.svg"
                  className="object-cover w-full"
                  alt="preparation commande"
                />
                <p className="py-4 text-xl font-medium">Vous préparez</p>
                <div className="tracking-wide">
                  Votre restaurant accepte et prépare la commande.
                </div>
              </div>
              <div className="pr-8">
                <img
                  src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_493,h_328/v1622579274/assets/61/94ae40-5638-4fb7-88d2-94178d4d3eba/original/DeliveryPeopleArrive.svg"
                  className="object-cover w-full"
                  alt="coursier qui arrive"
                />
                <p className="py-4 text-xl font-medium">
                  Les coursiers arrivent
                </p>
                <div className="tracking-wide">
                  Un coursier utilisant la plateforme MatR prend en charge la
                  commande dans votre restaurant, puis la livre au client.
                </div>
              </div>
            </div>
          </div>
        </HomeRoot>
      </div>
    </div>
  );
};

export default RegisterRestorer;
