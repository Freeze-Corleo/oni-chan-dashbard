import Button from "../../components/atoms/RegisterButton";
import RegisterForm from "../../components/molecules/forms/Register";

const RegisterContent = () => {
    return (
        <>
            <div className="h-screen">
                <RegisterForm />
                <div className='mt-16 mb-20'>
                    <Button label="S'inscrire" />
                </div>
            </div>
        </>
    );
}

export default RegisterContent;