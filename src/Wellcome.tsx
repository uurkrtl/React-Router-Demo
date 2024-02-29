import React from 'react';

function Wellcome() {
    return (
        <div>
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src="https://m.media-amazon.com/images/I/81CwjScs2aL._AC_UF894,1000_QL80_.jpg" alt="" width="250"
                     height="200"/>
                <h1 className="display-5 fw-bold text-body-emphasis">Rick and Morty Character Gallery</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Welcome to our site. Here you can find information about your favorite Rick and Morty characters. So let's start:</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href={"/characters"} className="btn btn-primary btn-lg px-4 gap-3">All characters</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wellcome;