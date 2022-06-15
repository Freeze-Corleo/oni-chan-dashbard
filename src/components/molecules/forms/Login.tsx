import React from 'react';

const LoginForm = () => {
  const [emailLogin, setEmailLogin] = React.useState<boolean>(false);

  const onDisplayLoginForm = () => {
    setEmailLogin(true);
  };

  return (
    <>
      <h1 className="py-16 flex justify-center font-medium text-3xl">
        Se connecter
      </h1>
      <div className="relative z-50 grid place-content-center space-y-4">
        {!emailLogin && (
          <>
            {/* <button
              type="button"
              className="rounded-full flex items-center bg-blue-700 text-white font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-blue-900 shadow-md transition duration-300 linear"
            >
              <img
                src={process.env.PUBLIC_URL + '/img/facebook-icon.png'}
                alt="icone de facebook"
                className="w-7"
              />
              <p style={{ fontSize: 16 }}>Se connecter avec Facebook</p>
            </button> */}
            <button
              type="button"
              className="rounded-full flex items-center bg-white text-black font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-gray-200 shadow-md transition duration-300 linear border"
            >
              <img
                src={process.env.PUBLIC_URL + '/img/google-icon.png'}
                alt="icone de google"
                className="w-7"
              />
              <p style={{ fontSize: 16 }}>Se connecter avec Google</p>
            </button>

            <button
              type="button"
              className="rounded-full flex items-center bg-[#A2F5B5] text-black font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-[#6bc17f] shadow-md transition duration-300 linear"
              onClick={() => onDisplayLoginForm()}
            >
              <p style={{ fontSize: 16 }}>
                Se connecter avec une adresse e-mail
              </p>
            </button>
            <div className="grid place-content-center pt-8">
              <a href="/register">
                <button
                  type="button"
                  className="rounded-full flex items-center bg-black text-white font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-gray-800 shadow-md transition duration-300 linear"
                >
                  <p style={{ fontSize: 16 }}>S'inscrire</p>
                </button>
              </a>
            </div>
          </>
        )}
        {emailLogin && <></>}
      </div>
    </>
  );
};

export default LoginForm;
