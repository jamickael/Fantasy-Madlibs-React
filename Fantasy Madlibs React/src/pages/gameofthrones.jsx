import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function GameOfThrones() {
    let navigate = useNavigate();
    const [madlib, setMadlib] = useState({
        lengthOfTimeOne:"", lengthOfTimeTwo:"", liquid:"", pluralNounOne:"", pluralNounTwo:"", verbOne:"", nounOne:"", adjectiveOne:"",
        adjectiveTwo:"", pluralNounThree:"", pluralNounFour:"", adjectiveThree:"", adverbOne:"", emotion:"", pluralNounFive:"", adjectiveFour:""
    });
    const {lengthOfTimeOne, lengthOfTimeTwo, liquid, pluralNounOne, pluralNounTwo, verbOne, nounOne, adjectiveOne,
            adjectiveTwo, pluralNounThree, pluralNounFour, adjectiveThree, adverbOne, emotion, pluralNounFive, adjectiveFour} = madlib;
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
        

        setMadlib({
            ...madlib,
            
        });
        console.log("Locked and loaded")

        setShowMadlib(true);
    };

    const resetMadlib = () => {
        setMadlib({
            lengthOfTimeOne:"", lengthOfTimeTwo:"", liquid:"", pluralNounOne:"", pluralNounTwo:"", verbOne:"", nounOne:"", adjectiveOne:"",
            adjectiveTwo:"", pluralNounThree:"", pluralNounFour:"", adjectiveThree:"", adverbOne:"", emotion:"", pluralNounFive:"", adjectiveFour:""
        });
        setShowMadlib(false);
    }


    return (
        <div className="">
            {showMadlib ? (
                <div>
                    <p>
                    In a land where summers can last {lengthOfTimeOne} and winters last {lengthOfTimeTwo}, {liquid} is brewing. 
                    The cold is returning, and in the frozen {pluralNounOne} to the North of Winterfell, sinister and 
                    supernatural {pluralNounTwo} are {verbOne} beyond the kingdom's protective {nounOne}. At the center of 
                    the conflict lie the Starks of Winterfell, a family as {adjectiveOne} and {adjectiveTwo} as the land they were born to. 
                    </p>
                    <p>
                    Sweeping from a land of brutal cold to a distant summertime kingdom, here is a tale of 
                    lords and ladies, soldiers and {pluralNounThree}, {pluralNounFour} and bastards, who come together in a 
                    time of {adjectiveThree} omens. Amid plots and counterplots, tragedy and betrayal, {emotion} and {pluralNounFive}, 
                    the fate of the Starks, their allies, and their enemies hangs {adverbOne} in the 
                    balance, as each endeavors to win the most {adjectiveFour} of conflicts: The Game of Thrones.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => setShowMadlib(false)}>Edit</button>
                        <br></br>
                        <p>Would you like to create another madlib?</p>
                        <button onClick={resetMadlib}>Game of Thrones again!</button>
                        <button onClick={() => navigate("/")}>Literally any other madlib.</button>
                    </div>
                </div>
            ) : (
                <div>
                    <form onSubmit={(e)=> onSubmit(e)}>
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
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Plural Noun: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a plural noun" 
                                name="pluralNounThree" 
                                value={pluralNounThree}
                                onChange={(e)=>onInputChange(e)}
                                required 
                                autoFocus="true"></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Adverb: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an adverb" 
                                name="adverbOne" 
                                value={adverbOne}
                                onChange={(e)=>onInputChange(e)}
                                required 
                                autoFocus="true"></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Length of Time: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a length of time" 
                                name="lengthOfTimeTwo" 
                                value={lengthOfTimeTwo}
                                onChange={(e)=>onInputChange(e)}
                                required 
                                autoFocus="true"></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Liquid: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a liquid" 
                                name="liquid" 
                                value={liquid}
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
                                name="pluralNounOne" 
                                value={pluralNounOne}
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
                                placeholder="Enter a noun" 
                                name="adjectiveThree" 
                                value={adjectiveThree}
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
                                name="pluralNounFive" 
                                value={pluralNounFive}
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
                                <label htmlFor="Name" className="form-label">Length of Time: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a length of time" 
                                name="lengthOfTimeOne" 
                                value={lengthOfTimeOne}
                                onChange={(e)=>onInputChange(e)}
                                required 
                                autoFocus="true"></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Emotion: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an emotion" 
                                name="emotion" 
                                value={emotion}
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
                                <label htmlFor="Name" className="form-label">Verb: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a verb" 
                                name="verbOne" 
                                value={verbOne}
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
                                name="pluralNounFour" 
                                value={pluralNounFour}
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
                                name="pluralNounTwo" 
                                value={pluralNounTwo}
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

export default GameOfThrones;