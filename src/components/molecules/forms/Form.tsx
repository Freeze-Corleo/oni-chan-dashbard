import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

const RegisterForm = () => {
    const onChangeValueRegister = (
        event: React.ChangeEvent<{ name: string; value: string }>
      ) => {};
    return (
        <div>
            <form className="space-y-6 grid justify-items-start ml-96">
                <div className="w-2/3">
                    <Label htmlfor="email" label="Email :" />
                    <Input type="text" nameInput="email" placeholder="Entrer votre email" onChangeFunction={onChangeValueRegister} />
                </div>
                <div className="w-1/2">
                    <Label htmlfor="mdp" label="Mot de passe :" />
                    <Input type="text" nameInput="mdp" placeholder="Entrer votre mot de passe" onChangeFunction={onChangeValueRegister} />                    
                </div>
                <div className="w-1/2">
                    <Label htmlfor="cmdp" label="Confirmation du mot de passe :" />
                    <Input type="text" nameInput="cmdp" placeholder="Confirmer votre mot de passe" onChangeFunction={onChangeValueRegister} />                    
                </div>
                <div className="w-1/3">
                    <Label htmlfor="tel" label="Téléphone :" />
                    <Input type="text" nameInput="tel" placeholder="Entrer votre téléphone" onChangeFunction={onChangeValueRegister} />                    
                </div>
                <div className="w-1/3">
                    <Label htmlfor="adresse" label="Adresse :" />
                    <div className="space-y-4 mb-20">
                    <Input type="text" nameInput="rue" placeholder="Adresse rue" onChangeFunction={onChangeValueRegister} />   
                    <Input type="text" nameInput="ville" placeholder="Ville" onChangeFunction={onChangeValueRegister} />   
                    <Input type="text" nameInput="cp" placeholder="Code Postal" onChangeFunction={onChangeValueRegister} />   
                    </div>
                </div>
            </form>
        </div>
  );
};

export default RegisterForm;
