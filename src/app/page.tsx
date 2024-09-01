"use client"

import { Person } from "@/types/Person";
import { useState } from "react";

const Page = () => {
  const [fullName, setFullName] = useState<Person>({name: 'Gustavo', lastName: 'Lima'});
  
  // Para pegar esse valor, e poder trocar o valor há duas possibilidades: 
  // 1 - Pegar o valor com o onChange, usar funçao Event, e trocar TODAS as informações usando o Type.
  // De certa forma resolve o problema... Mas tras consigo um codigo muito mal estruturado e linhas de codigos desnessarias.

  // 2 - Clonar o Objeto como está no codigo fonte abaixo - " ...fullName ". Primeiro clona esse PROPS, que contem todas as lista.
  // Depois apenas pegue o valor que deseja alterar com o "event, target e value" 
  // Com a segunda forma trás um código limpo, linhas de códigos apenas necessarias e de certa forma um encapsulamento

  const handleClearButton = () => {
    setFullName({ name: '', lastName: ''})
  }

  // Vemos o Código acima demostrando utilidades para usar o State com Objetos caso queria trocar tudo. "setFullName({ name: '', lastName: ''})"
  // Caso queria trocar apenas um objeto da lista. "setFullName({ ...fullName, name: '' })"
  // obs: funcionalidade para buttoes. 
  
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input type="text" 
      placeholder="Name"
      className="border border-black p-3 text-2xl text-black rounded-md mb-3"
      value={fullName.name}
      onChange={e => setFullName({ ...fullName, name: e.target.value }) }/>

      <input type="text" 
      placeholder="Sobrenome"
      className="border border-black p-3 text-2xl text-black rounded-md mb-3"
      value={fullName.lastName}
      onChange={e => setFullName({ ...fullName, lastName: e.target.value }) }/>

      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>

      <button 
      onClick={handleClearButton} 
      className="rounded-md border border-white bg-white text-black p-2 m-3">Limpar Tudo
      </button>
    </div>
  );

}

export default Page;
