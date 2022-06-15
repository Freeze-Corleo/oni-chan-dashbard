
const Faq = () => {
  return (
   <>
        <div className='text-center mb-20 text-5xl font-bold'>
          <p>Foire aux questions</p>
        </div>
        <div className='grid grid-cols-1 place-items-center space-y-4'>
          <button type="button" className="shadow-2xl w-2/3 text-black font-medium rounded-full text-sm px-36 py-3 text-center" style={{ backgroundColor: "#BBF49B" }}>
            <p style={{ fontSize: 18 }}>Puis-je envoyer mes propres images de menus ?</p>
          </button>
          <button type="button" className="shadow-2xl w-2/3 text-black font-medium rounded-full text-sm px-36 py-3 text-center" style={{ backgroundColor: "#BBF49B" }}>
            <p style={{ fontSize: 18 }}>Comment augmenter mon chiffre d'affaire ?</p>
          </button>
          <button type="button" className="shadow-2xl w-2/3 text-black font-medium rounded-full text-sm px-36 py-3 text-center" style={{ backgroundColor: "#BBF49B" }}>
            <p style={{ fontSize: 18 }}>Comment mettre en place la commande à emporter ?</p>
          </button>
          <button type="button" className="shadow-2xl w-2/3 text-black font-medium rounded-full text-sm px-36 py-3 text-center" style={{ backgroundColor: "#BBF49B" }}>
            <p style={{ fontSize: 18 }}>Que faire en cas de problèmes avec une commande ?</p>
          </button>
        </div>
   </>
  );
};

export default Faq;
