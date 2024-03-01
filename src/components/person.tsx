const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-br',  {weekday: 'long'}).format(today);
}

export const Person = () => {
    const data = {
        name: 'Elon Musk',
        avatar: 'https://th.bing.com/th/id/OIP.O4Lrw3QH_SZeKwid1-Ha7QAAAA?rs=1&pid=ImgDetMain',
        roles: ['Ceo da Tesla', 'Ceo da SpaceX']
    }

    const today: Date = new Date();

    return (
        <>
            <h1 style={{color: 'red', fontSize: '30px'}}>{data.name} - {getWeekday(today)}</h1>
            <img src={data.avatar} alt={data.avatar} className="w-40"/>

            <ul>
                <li>{data.roles[0]}</li>
                 <li>{data.roles[1]}</li>
            </ul>
        </>
    )
}