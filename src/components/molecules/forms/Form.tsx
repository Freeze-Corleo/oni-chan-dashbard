const RegisterForm = () => {
    return (
        <div>
            <form className="space-y-6 grid justify-items-start ml-96">
                <div className="w-2/3">
                    <label htmlFor="email" className="block mb-2 text-sm py-4 font-medium text-gray-900 dark:text-gray-300">Email :</label>
                    <input type="email" id="email" className="shadow-2xl border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer votre email" required style={{backgroundColor: "#F2F2F2"}}/>
                </div>
                <div className="w-1/2">
                    <label htmlFor="mdp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mot de passe :</label>
                    <input type="mdp" id="mdp" className="shadow-2xl bg-slate-100  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer votre mot de passe" required style={{backgroundColor: "#F2F2F2"}}/>
                </div>
                <div className="w-1/2">
                    <label htmlFor="cmdp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirmation du mot de passe :</label>
                    <input type="cmdp" id="cmdp" className="shadow-2xl bg-slate-100  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Confirmer votre mot de passe" required style={{backgroundColor: "#F2F2F2"}} />
                </div>
                <div className="w-1/3">
                    <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Téléphone :</label>
                    <input type="tel" id="tel" className="shadow-2xl bg-slate-100  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Entrer votre téléphone" required style={{backgroundColor: "#F2F2F2"}}/>
                </div>
                <div className="w-1/3">
                    <label htmlFor="adresse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adresse</label>
                    <div className="space-y-4">
                    <input type="rue" id="rue" className="shadow-2xl bg-slate-100  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Adresse rue" required style={{backgroundColor: "#F2F2F2"}}/>
                    <input type="ville" id="ville" className="shadow-2xl bg-slate-100  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Ville" required style={{backgroundColor: "#F2F2F2"}}/>
                    <input type="cp" id="cp" className="shadow-2xl bg-slate-100  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Code postal" required style={{backgroundColor: "#F2F2F2"}}/>
                    </div>
                </div>
            </form>
        </div>
  );
};

export default RegisterForm;
