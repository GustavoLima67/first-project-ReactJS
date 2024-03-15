import { Card } from "@/components/card";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Ola mundo</h1>
      <h3>Algum 3utro texto</h3> 

      <Card>
        <>
          <h3 className="text-3xl font-bold italic">Frase de Efeito</h3>
          <p className="text-right text-sm">autor desconhecido</p>
        </>
      </Card>
    </div>  
  )
}

export default Page;
