import "./types.css"

type PokemonCardProps = {
  numero: number,
  nome: string,
  tipos: string[],
  sprite: string
}

const PokemonCard = (props: PokemonCardProps) =>
{
    return(
        <div className={`flex flex-col ${props.tipos[0]} rounded-xl p-3`}>
          <div className="flex justify-between w-full">
            <h1 className="font-bold capitalize">{props.nome}</h1>
            <h1 className="font-bold">#{props.numero.toString().padStart(3,"0")}</h1>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              {props.tipos.map((tipo) => <div className={`${tipo} px-4 mt-2 rounded-3xl font-bold text-white border-white border text-center capitalize brightness-125`}>{tipo}</div>)}
            </div>
            <img className="object-cover w-15" src={props.sprite} alt="sprite"/>
          </div>
        </div>
    );
}

export default PokemonCard;