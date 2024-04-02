import { Card } from "@/components/card";
const Page = () => {

  const People = [
    {id: 1, name: "Fulano", prefission: "mathematician"},
    {id: 2, name: "Ciclano", prefission: "chemist"},
    {id: 3, name: "Beltrano", prefission: "phcisist"},
    {id: 4, name: "Glutano", prefission: "chemist"},
    {id: 5, name: "Jungulano", prefission: "astrophysicist"},
  ]

  
  return (
    <div>
      <h1 className="font-bold text-2xl">Ola mundo</h1>
      <h3>Algum outro texto</h3> 

    </div>  
  )
}

export default Page;
