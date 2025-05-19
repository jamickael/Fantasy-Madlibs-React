import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Eragon() {
    let navigate = useNavigate();
    const [madlib, setMadlib] = useState({
        number:"", adjectiveFourArticle:"", adjectiveFour:"", nounTwo:"", adjectiveTwoArticle:"", adjectiveTwo:"", animalArticle:"", animal:"", 
        nounOneArticle:"", nounOne:"", adjectiveSeven:"", adjectiveOneArticle:"", adjectiveOne:"", adjectiveThree:"", adjectiveSixArticle:"", 
        adjectiveSix:"", pluralNoun:"", adjectiveFive:""
    });
    const {number, adjectiveFourArticle, adjectiveFour, nounTwo, adjectiveTwoArticle, adjectiveTwo, animalArticle, animal, 
        nounOneArticle, nounOne, adjectiveSeven, adjectiveOneArticle, adjectiveOne, adjectiveThree, adjectiveSixArticle, 
        adjectiveSix, pluralNoun, adjectiveFive} = madlib;
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
        const adjOneArticle = aOrAn(adjectiveOne);
        const adjTwoArticle = aOrAn(adjectiveTwo);
        const adjFourArticle = aOrAn(adjectiveFour);
        const adjSixArticle = aOrAn(adjectiveSix);
        const nnOneArticle = aOrAn(nounOne);

        setMadlib({
            ...madlib,
            adjectiveOneArticle: adjOneArticle,
            adjectiveTwoArticle: adjTwoArticle,
            adjectiveFourArticle: adjFourArticle,
            adjectiveSixArticle: adjSixArticle,
            nounOneArticle: nnOneArticle
        });
        console.log("Locked and loaded")

        setShowMadlib(true);
    };

    const resetMadlib = () => {
        setMadlib({
            number:"", adjectiveFourArticle:"", adjectiveFour:"", nounTwo:"", adjectiveTwoArticle:"", adjectiveTwo:"", animalArticle:"", animal:"", 
            nounOneArticle:"", nounOne:"", adjectiveSeven:"", adjectiveOneArticle:"", adjectiveOne:"", adjectiveThree:"", adjectiveSixArticle:"", 
            adjectiveSix:"", pluralNoun:"", adjectiveFive:""
        });
        setShowMadlib(false);
    }


    return (
        <div className="">
            {showMadlib ? (
                <div>
                    <p>
                    When {number}-year-old Eragon finds {adjectiveFourArticle} {adjectiveFour} blue {nounTwo} in the forest, he thinks it is the 
                    lucky discovery of {adjectiveTwoArticle} {adjectiveTwo} farm boy. But when the {nounTwo} brings {animalArticle} {animal} hatchling, 
                    Eragon soon realizes he has stumbled upon {nounOneArticle} {nounOne} nearly as old as the Empire itself.
                    </p>
                    <p>
                    Overnight his {adjectiveSeven} life is shattered, and, gifted with only {adjectiveOneArticle} {adjectiveOne} sword, 
                    a loyal {animal}, and {adjectiveThree} advice from {adjectiveSixArticle} {adjectiveSix} storyteller, Eragon is soon swept into 
                    a dangerous tapestry of magic, {pluralNoun}, and power. Now his choices could save —or destroy— the {adjectiveFive} Empire.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => setShowMadlib(false)}>Edit</button>
                        <br></br>
                        <p>Would you like to create another madlib?</p>
                        <button onClick={resetMadlib}>Eragon again!</button>
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
                                name="adjectiveFive" 
                                value={adjectiveFive}
                                onChange={(e)=>onInputChange(e)}
                                required 
                                autoFocus="true"></input>
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
                                name="adjectiveThree" 
                                value={adjectiveThree}
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
                                name="adjectiveFour" 
                                value={adjectiveFour}
                                onChange={(e)=>onInputChange(e)}
                                required 
                                autoFocus="true"></input>
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
                                required 
                                autoFocus="true"></input>
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
                                name="adjectiveSix" 
                                value={adjectiveSix}
                                onChange={(e)=>onInputChange(e)}
                                required 
                                autoFocus="true"></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Number: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a number" 
                                name="number" 
                                value={number}
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
                                name="adjectiveSeven" 
                                value={adjectiveSeven}
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
                                name="adjectiveTwo" 
                                value={adjectiveTwo}
                                onChange={(e)=>onInputChange(e)}
                                required 
                                autoFocus="true"></input>
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

export default Eragon;