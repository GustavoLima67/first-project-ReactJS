type Props = {
    label: string;
    onClick: () => void;
}

export const CustomButton = ({label, onClick} : Props) => {

    const handleButtonClick = () => {
        //antes de alguma coisa
        onClick();
        //depois de alguma coisa 
    }

    return(
        <button onClick={handleButtonClick} className="p-3 bg-blue-700 text-white rounded-md">{label}</button>
    )
}