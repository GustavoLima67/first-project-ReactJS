"use client"
import { CustomButton } from "@/components/customButton";

const Page = () => {

  const handleButtonClick1 = () => alert('Clicou no botão 1');
  const handleButtonClick2 = () => alert('Clicou no botão 2');
  const handleButtonClick3 = () => alert('Clicou no botão 3');

  return(
    <div className="w-screen h-screen flex justify-center items-center">
      <CustomButton label="Clique aqui" onClick={handleButtonClick1}/>
      <CustomButton label="Clique aqui 2" onClick={handleButtonClick2}/>
      <CustomButton label="Clique aqui 3" onClick={handleButtonClick3}/>
    </div>
  )

}

export default Page;
