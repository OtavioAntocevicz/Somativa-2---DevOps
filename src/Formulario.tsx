import {ChangeEvent, useState} from "react";

const Formulario = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isLoginError, setIsLoginError] = useState<boolean>(false);

  const handleLogin = () => {
    if (email === "eduardo.lino@pucpr.br" && password === "123456") {
      setIsLogged(true);
      setIsLoginError(false);
    } else {
      setIsLogged(false);
      setIsLoginError(true);
    }
  };

  const onEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      }}
    >
      <h2
        style={{
          fontFamily: "Arial",
          color: "#fff",
        }}
      >
        Login
      </h2>
      <input
        type="email"
        placeholder="Email"
        onChange={onEmailInputChange}
        style={{width: "10rem", borderRadius: "10px"}}
      />
      <br />
      <input
        type="password"
        placeholder="Senha"
        onChange={onPasswordInputChange}
        style={{width: "10rem", borderRadius: "10px"}}
      />
      <br />
      <button type="submit" onClick={handleLogin} style={{width: "10rem"}}>
        Acessar
      </button>
      <br />
      {isLogged && <p>Acessado com sucesso!</p>}
      {isLoginError && <p>Usuário ou senha incorretos!</p>}
    </div>
  );
};

export default Formulario;
