import './App.css';
import React from 'react';
import {useForm} from 'react-hook-form';

function App() {
  const {register, 
        handleSubmit, 
        formState: {errors}, 
        reset } = useForm({mode: 'onBlur'});
        //Arrow Function
  const onSubmit = (data) => {
    console.log("Dados enviados com sucesso", data)
    reset();

  }
  return (
    <div className="App">
      <h1>Criando Formulários</h1>
    <form onSubmit={handleSubmit(onSubmit)}  noValidate>
      <label>Nome </label>
    <input placeholder='Digite seu nome'
    {...register("nome", {required: "O nome é obrigatório"})}
    />
    {errors.nome && <p style={{color: "red"}}>{errors.nome.message}</p>}
    <br/>
    <label>Email </label>
    <input placeholder='Digite seu email' type='email'
    {...register("email", {required: "O email é obrigatório"})}
    />
        {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}<br/> 
    <label>Senha </label>
    <input placeholder='Digite sua senha' type='password'
    {...register("senha", {required: "A senha é obrigatória"})}
    /><br/>
        {errors.senha && <p style={{color: "red"}}>{errors.senha.message}</p>}
    <button type='submit'>Enviar</button>
    </form>
    </div>  
  );
}

export default App;
