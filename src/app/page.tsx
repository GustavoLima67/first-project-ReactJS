import {peopleList} from '@/data/people';

const Page = () => {

  return (

    <div>
      <h1 className="font-bold text-2xl">Ola mundo</h1>
      <h3>Algum outro texto</h3> 

      {peopleList.length > 0 &&
        <ul>
          {peopleList.map(person => 
          <li key={person.id}> {person.name} - {person.profession}</li>)}
        </ul>
      }

    </div>  
  )
}

export default Page;
