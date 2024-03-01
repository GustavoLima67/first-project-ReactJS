const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-br',  {weekday: 'long'}).format(today);
}

type Props = {
    name: string;
    avatar?: string;
    roles: string[];
    adreess?: string;
}

export const Person = ({name, 
    avatar = 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks=', 
    roles}: Props) => {

    return (
        <div className="p-3">
            <h1>{name}</h1>

            <img src={avatar} alt={avatar} className="w-40"/>

            <ul>
                <li>{roles[0]}</li>
                 <li>{roles[1]}</li>
            </ul>
        </div>
    )
}