import {peopleList} from '@/data/people';

const Page = () => {

  const chemists = peopleList.filter(person => person.profession === 'chemist');

  return (

    <div>
      <h1 className="font-bold text-2xl">Ola mundo</h1>
      <h3>Algum outro texto</h3> 

      {chemists.length > 0 &&
        <>
          <h3>Lista de Quimicos</h3>
          <ul>
            {chemists.map(person => 
            <li key={person.id}>{person.name}</li> )}
          </ul>
        </>
      }

    </div>  
  )
}

export default Page;
