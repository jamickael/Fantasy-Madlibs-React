import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Ledge() {
    let navigate = useNavigate();
    const [madlib, setMadlib] = useState({
        nounOne:"",
        adjectiveOne:"",
        pluralNoun:"",
        femaleName:"",
        pastTenseVerbTwo:"",
        adjectiveFive:"",
        animal:"",
        nounTwo:"",
        verbOne:"",
        adjectiveThree:"",
        size:"",
        pastTenseVerbOne:"",
        adjectiveFour:"",
        maleName:"",
        temperature:"",
        adjectiveTwo:"",
        feeling:"",
        nounOneArticle:"",
        sizeArticle:"",
        adjectiveFiveArticle:""
    });
    const {nounOne, adjectiveOne, pluralNoun, femaleName, pastTenseVerbTwo, adjectiveFive, animal, nounTwo, verbOne,
        adjectiveThree, size, pastTenseVerbOne, adjectiveFour, maleName, temperature, adjectiveTwo, feeling,
        nounOneArticle, sizeArticle, adjectiveFiveArticle} = madlib;
    const [showMadlib, setShowMadlib] = useState(false);
    

    //OnChange
    const onInputChange=(e)=>{
        setMadlib({...madlib,[e.target.name]:e.target.value});
    };

    //A or An assignment
    function aOrAn(word) {
        word = word.toLowerCase();
        if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u" ) {
            return "an";
        } else {
            return "a";
        }
    };

    //Capitalization
    function capitalize(string) {
        if (!string) return "";
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //OnSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        const nnOneArticle = aOrAn(nounOne);
        const szArticle = aOrAn(size);
        const adjFiveArticle = aOrAn(adjectiveFive);
        const maleNameCapitalized = capitalize(maleName);
        const femaleNameCapitalized = capitalize(femaleName);

        setMadlib({
            ...madlib,
            nounOneArticle: nnOneArticle,
            sizeArticle: szArticle,
            adjectiveFiveArticle: adjFiveArticle,
            maleName: maleNameCapitalized,
            femaleName: femaleNameCapitalized
        });
        console.log("Locked and loaded")

        setShowMadlib(true);
    };

    const resetMadlib = () => {
        setMadlib({
            nounOne:"", adjectiveOne:"", pluralNoun:"", femaleName:"", pastTenseVerbTwo:"", adjectiveFive:"", animal:"", nounTwo:"", verbOne:"",
            adjectiveThree:"", size:"", pastTenseVerbOne:"", adjectiveFour:"", maleName:"", temperature:"", adjectiveTwo:"", feeling:"",
            nounOneArticle:"", sizeArticle:"", adjectiveFiveArticle:""
        });
        setShowMadlib(false);
    }


    return (
        <div className="">
            {showMadlib ? (
                <div>
                    <p>
                    In a place known as the Ledge, {nounOneArticle} {nounOne} is trapped by {sizeArticle} {size} chasm and {adjectiveFour} mountain 
                    face. There is no way for anyone to escape the {temperature} wasteland without befalling {adjectiveFiveArticle} {adjectiveFive} drop. 
                    They know nothing of the outside world except that it is where the {animal} reside - {adjectiveOne} and {adjectiveTwo} winged 
                    creatures who bring meagre {pluralNoun} in exchange for a periodic human sacrifice.
                    </p>
                    <p>                    
                    {femaleName}, {nounTwo} wielder and only remaining member of her family, has so far 
                    avoided the annual {verbOne}, but her luck has run out. She is {pastTenseVerbTwo} and ripped from 
                    her {adjectiveThree} home, the only world she knows. No one knows what will happen 
                    to her on the other side, least of all {femaleName}. 
                    </p>
                    <p>
                    Murdered? {pastTenseVerbOne}? Worse?  
                    </p>
                    <p>
                    Fortunately, a half-{animal} called {maleName} offers to help them both escape, but 
                    how can she trust one of the very creatures that plagued her life? {femaleName} is 
                    a survivor, and she is not {feeling} to cut anyone down to live.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => setShowMadlib(false)}>Edit</button>
                        <br></br>
                        <p>Would you like to create another madlib?</p>
                        <button onClick={resetMadlib}>Ledge again!</button>
                        <button onClick={() => navigate("/")}>Literally any other madlib.</button>
                    </div>
                </div>
            ) : (
                <div>
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Noun: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a noun" 
                                name="nounOne" 
                                value={nounOne}
                                onChange={(e)=>onInputChange(e)}
                                required 
                                autoFocus="true"></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Adjective: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an adjective" 
                                name="adjectiveOne" 
                                value={adjectiveOne}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Plural Noun: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a plural noun" 
                                name="pluralNoun" 
                                value={pluralNoun}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Female Name: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a female name" 
                                name="femaleName" 
                                value={femaleName}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Past Tense Verb: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a past tense verb" 
                                name="pastTenseVerbTwo" 
                                value={pastTenseVerbTwo}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Adjective: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an adjective" 
                                name="adjectiveFive" 
                                value={adjectiveFive}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Animal: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an animal" 
                                name="animal" 
                                value={animal}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Noun: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a noun" 
                                name="nounTwo" 
                                value={nounTwo}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Verb: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a verb" 
                                name="verbOne" 
                                value={verbOne}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Adjective: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an adjective" 
                                name="adjectiveThree" 
                                value={adjectiveThree}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Size: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a size" 
                                name="size" 
                                value={size}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Past Tense Verb: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a past tense verb" 
                                name="pastTenseVerbOne" 
                                value={pastTenseVerbOne}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Adjective: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an adjective" 
                                name="adjectiveFour" 
                                value={adjectiveFour}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Male Name: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a male name" 
                                name="maleName" 
                                value={maleName}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Temperature: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a temperature" 
                                name="temperature" 
                                value={temperature}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Adjective: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an adjective" 
                                name="adjectiveTwo" 
                                value={adjectiveTwo}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Feeling: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a feeling" 
                                name="feeling" 
                                value={feeling}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-outline-primary m-4 shadow">Create Madlib!</button>
                        <button onClick={() => navigate("/")}>Cancel</button>
                    </form>
            </div>
        )}
            
        </div>
    )
}

export default Ledge;