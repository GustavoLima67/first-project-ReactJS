
const Page = () => {

  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format();

  const hour = new Date().getHours();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl 000">{fullTime}</div>
      <div className="text-5xl font-bold">
        {hour >=  0 && hour < 12 && "Bom dia"} 
        {hour >= 12 && hour < 18 && "Boa tarde"}
        {hour >= 18 && hour < 23 && "Boa noite"}
      </div>

    </div>
  )
  // obs: caso as duas condicionais estejam corretas, pode acarretar um erro nas gigantesco
}

export default Page;
