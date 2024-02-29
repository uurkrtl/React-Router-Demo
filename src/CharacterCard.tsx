import {Character} from "./characters.ts";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    return (
        <div>
            <a href={`/character/${props.character.id}`}>{props.character.name}</a>
            <p>
                {props.character.species}
            </p>
        </div>
    )
}