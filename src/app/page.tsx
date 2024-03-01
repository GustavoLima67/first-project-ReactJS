import { Person } from "@/components/person";

const Page = () => {
  return (
    <div>
      <Person 
        name='Elon Musk'
        avatar='https://th.bing.com/th/id/OIP.O4Lrw3QH_SZeKwid1-Ha7QAAAA?rs=1&pid=ImgDetMain'
        roles={['Ceo da Amazon', 'Ceo da Blue Origin']}
      />
      <Person 
        name='Elon Musk'
        avatar='https://th.bing.com/th/id/R.7f74cdafb3416c87fcf605e66f4c12fd?rik=20zeF75LZuhQ7Q&riu=http%3a%2f%2fwww.thefamouspeople.com%2fprofiles%2fimages%2felon-musk-1.jpg&ehk=bGWEbcsdoxqEEwaNuveQSXmdQ1%2b%2bOFWRbnwdiGtgLoM%3d&risl=&pid=ImgRaw&r=0'
        roles={['Ceo da SpaceX', 'Ceo da Tesla']}
      />
      
    </div>
  )
}

export default Page;
