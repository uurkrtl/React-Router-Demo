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
                            <div className="container mt-3">
                                <div className="py-5 text-center">
                                    <img className="d-block mx-auto mb-3"
                                         src={character.image} alt="" width="172" height="157"/>
                                    <h2>{character.name}</h2>
                                </div>
                                <div className="row g-5">
                                    <div className="col-md-7 col-lg-12">
                                        <div className="row g-3">

                                            <div className="col-4">
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text">Species</span>
                                                    <input type="text" className="form-control"
                                                           value={character.species} readOnly={true}/>
                                                </div>
                                            </div>

                                            <div className="col-4">
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text">Status</span>
                                                    <input type="text" className="form-control" value={character.status}
                                                           readOnly={true}/>
                                                </div>
                                            </div>

                                            <div className="col-4">
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text">Gender</span>
                                                    <input type="text" className="form-control" value={character.gender}
                                                           readOnly={true}/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default CharacterDetailCard;