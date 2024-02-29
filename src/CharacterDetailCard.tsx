import {useParams} from "react-router-dom";
import {Character} from "./characters.ts";

type CharacterGalleryProps = {
    characters: Character[]
}

function CharacterDetailCard(props: CharacterGalleryProps) {
    const params = useParams();
    return (
        <div>
            <h2>
                Character Detail Card
            </h2>

            {
                props.characters.map(character => {
                    if (character.id === parseInt(params.id || '')) {
                        return (
                            <div>
                                <p>
                                    {character.name}
                                </p>
                                <p>
                                    {character.species}
                                </p>
                                <p>
                                    {character.status}
                                </p>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default CharacterDetailCard;