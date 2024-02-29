import {Character} from "./characters.ts";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    return (
        <div>

            <div className="col">
                <div className="card shadow-sm">
                    <img src={props.character.image} className="bd-placeholder-img card-img-top" width="100%" height="225"/>
                    <div className="card-body">
                        <p className="card-text text-center text-danger">{props.character.name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <a href={`/character/${props.character.id}`} className="btn btn-sm btn-outline-secondary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}