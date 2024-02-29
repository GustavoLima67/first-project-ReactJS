import { Circle } from "./Circle"
import { Square } from "./square"

export const GeoForm =()=> {
    return (
        <div>
            <h1 className="font-bold text-2xl">Formas geometricas</h1>
            <h3>Algum texto aleatorio</h3>
            
            <div className="flex gap-2 border-2 p-3">
                <Square />
                <Circle/>
            </div>

        </div>
    )
}