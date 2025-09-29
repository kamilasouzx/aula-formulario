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
   
    alert("Formulário enviado: " + JSON.stringify(data));
    console.log("Dados enviados com sucesso", data)
    reset();

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div>
      <h1 className='text-3xl'>Criando Formulários</h1>
    <form onSubmit={handleSubmit(onSubmit)}  noValidate>
      <label>Nome </label>
    <input 
    placeholder='Digite seu nome'
    {...register("nome", {required: "O nome é obrigatório"})}
    className = "color: blue, border rounded-lg p-1 pl-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    />
    {errors.nome && <p style={{color: "red"}}>{errors.nome.message}</p>}
    <br/>
    <label>Email </label>
    <input placeholder='Digite seu email' type='email'
    {...register("email", {required: "O email é obrigatório", pattern:{ value: /^[^\s@]+@[^\s]+\.[^\s]+$/, message: "Email inválido"}})}
    />
        {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}<br/> 
    <label>Senha </label>
    <input placeholder='Digite sua senha' type='password'
    {...register("senha", {required: "A senha é obrigatória", minLength: {value: 6, message: "A senha deve ter no mínimo 6 caracteres"}})}
    /><br/>
    {errors.senha && <p style={{color: "red"}}>{errors.senha.message}</p>}
    <label>Telefone </label>
    <input placeholder='(XX)99999999' type='tel' //criar uma máscara, ajustar o placeholder
    {...register("telefone", {required: "O telefone é obrigatório", pattern: {value: /^\(\d{2}\)\d{9}$/, message: "Telefone inválido"}})}
    /><br/>
    {errors.telefone && <p style={{color: "red"}}>{errors.telefone.message}</p>}
    <label>Data de Nascimento </label>
    <input type='date'
    {...register("dataNascimento", {required: "A data de nascimento é obrigatória"})}
    /><br/>
    {errors.dataNascimento && <p style={{color: "red"}}>{errors.dataNascimento.message}</p>}
    <button className="bg-sky-500 hover:bg-sky-700" type='submit'>Enviar</button>
    </form>
    </div>  
    </div>
  );
}

export default App;
