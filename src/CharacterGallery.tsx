import {Character} from "./characters.ts";
import CharacterCard from "./CharacterCard.tsx";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div>
            <div className="album py-5 bg-body-tertiary mt-4">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">

                        {props.characters.map(character => <CharacterCard
                            key={character.id}
                            character={character}/>)}

                    </div>
                </div>
            </div>
        </div>
    )
}