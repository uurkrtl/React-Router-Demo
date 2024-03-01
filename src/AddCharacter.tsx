import React, {ChangeEvent, useState} from 'react';

type Input = {
    name: string;
    species: string;
    status: string;
    gender: string;
}

const initialFormValue = {
    name: '',
    species: '',
    status: '',
    gender: ''
}
function AddCharacter() {
    const [formData, setFormData] = useState<Input>(initialFormValue);
    const [submittedFormDatas, setSubmittedFormDatas] = useState<Input[]>([]);

    console.log('formData', formData);

    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setFormData({
            ...formData,
            name: value
        });
    }


    return (
        <div>
            <div className="container mt-4">
                <main>
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-4" src="https://i.scdn.co/image/ab67616100005174d624c3bdcf79aeac5190479d" alt=""
                             width="160" height="160"/>
                        <h2>Create a new character</h2>
                        <p className="lead">On this page you can create your dream Rick and Morty character.</p>
                    </div>

                    <div className="row g-5">

                        <div className="col-md-7 col-lg-12">
                            <form className="needs-validation">
                                <div className="row g-3">

                                    <div className="col-sm-3">
                                        <label htmlFor="name" className="form-label">Character name</label>
                                        <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChangeName}/>
                                    </div>

                                    <div className="col-sm-3">
                                        <label htmlFor="species" className="form-label">Species</label>
                                        <input type="text" className="form-control" id="species" value=""/>
                                    </div>

                                    <div className="col-sm-3">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <input type="text" className="form-control" id="status" value=""/>
                                    </div>

                                    <div className="col-sm-3">
                                        <label htmlFor="gender" className="form-label">Gender</label>
                                        <input type="text" className="form-control" id="gender" value=""/>
                                    </div>

                                </div>

                                <hr className="my-4"/>

                                <button className="w-100 btn btn-primary btn-lg" type="submit">Save character
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AddCharacter;