import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import Wellcome from "./Wellcome.tsx";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom";
import Header from "./Header.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";
import 'bootstrap/dist/css/bootstrap.css';
import AddCharacter from "./AddCharacter.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/home/wellcome" element={<Wellcome/>}/>
                <Route path="/" element={<Wellcome/>}/>
                <Route path="/characters" element={<CharacterGallery characters={characters}/>}/>
                <Route path={"/character/:id"} element={<CharacterDetailCard characters={characters} />} />
                <Route path={"/add-character"} element={<AddCharacter />} />
            </Routes>
        </>
    )
}

export default App
