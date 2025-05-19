import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Lotr() {
    let navigate = useNavigate();
    const [madlib, setMadlib] = useState({
        verbTwo:"",
        adjectiveOne:"",
        adjective:"",
        amount:"",
        liquid:"",
        adjectiveTwo:"",
        lastName:"",
        adjectiveEight:"",
        nounOne:"",
        adjectiveFour:"",
        profession:"",
        adjectiveThree:"",
        direction:"",
        adjectiveFive:"",
        verb:"",
        adjectiveSix:"",
        pluralNoun:"",
        adjectiveSeven:"",
        pluralizedNoun:"",
        adjectiveThreeArticle:"",
        adjectiveEightArticle:"",
        adjectiveSixArticle:""
    });
    const {verbTwo, adjectiveOne, adjective, amount, liquid, adjectiveTwo, lastName,
        adjectiveEight, nounOne, adjectiveFour, profession, adjectiveThree, direction, 
        adjectiveFive, verb, adjectiveSix, pluralNoun, adjectiveSeven, pluralizedNoun, 
        adjectiveThreeArticle, adjectiveEightArticle, adjectiveSixArticle} = madlib;
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
        const capPlNoun = capitalize(pluralNoun);
        const capDirection = capitalize(direction);
        const capLastName = capitalize(lastName);
        const capNoun = capitalize(nounOne);
        const plCapNoun = capitalize(nounOne+'s');
        const plProfession = profession+"s";
        const adjThreeArticle = aOrAn(adjectiveThree);
        const adjSixArticle = aOrAn(adjectiveSix);
        const adjEightArticle = aOrAn(adjectiveEight);

        setMadlib({
            ...madlib,
            pluralNoun: capPlNoun,
            direction: capDirection,
            lastName: capLastName,
            noun: capNoun,
            pluralizedNoun: plCapNoun,
            profession: plProfession,
            adjectiveThreeArticle: adjThreeArticle,
            adjectiveSixArticle: adjSixArticle,
            adjectiveEightArticle: adjEightArticle
        });

        setShowMadlib(true);
    };

    const resetMadlib = () => {
        setMadlib({
            verbTwo:"", adjectiveOne:"", adjective:"", amount:"", liquid:"", adjectiveTwo:"", lastName:"", adjectiveEight:"", nounOne:"",
            adjectiveFour:"", profession:"", adjectiveThree:"", direction:"", adjectiveFive:"", verb:"", adjectiveSix:"", pluralNoun:"",
            adjectiveSeven:"", pluralizedNoun:"", adjectiveThreeArticle:"", adjectiveEightArticle:"", adjectiveSixArticle:""
        });
        setShowMadlib(false);
    }


    return (
        <div className="">
            {showMadlib ? (
                <div>
                    <p>
                    One {nounOne} to rule them all, One {nounOne} to find them, One {nounOne} to bring them all and in the darkness {verbTwo} them.
                    </p>
                    <p>
                    In {adjectiveOne} times the {pluralizedNoun} of Power were crafted by the Elven-{profession}, and Sauron, the {adjective} Lord, forged 
                    the One {nounOne}, filling it with his own {liquid} so that he could {verb} all others. But the One {nounOne} was taken 
                    from him, and though he sought it throughout {direction}-earth, it remained lost to him. After {amount} ages it 
                    fell by chance into the hands of the {adjectiveTwo} Bilbo {lastName}. 
                    </p>
                    <p>
                    In {adjectiveEightArticle} {adjectiveEight} village in the Shire, {adjectiveFour} Frodo {lastName} finds himself faced with {adjectiveThreeArticle} {adjectiveThree} task, as 
                    his {adjectiveFive} cousin Bilbo entrusts the {nounOne} to his care. Frodo must leave his home and make 
                    {adjectiveSixArticle} {adjectiveSix} journey across {direction}-earth to the {pluralNoun} of Doom, there to destroy the {nounOne} and 
                    foil the {adjective} Lord in his {adjectiveSeven} purpose.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => setShowMadlib(false)}>Edit</button>
                        <br></br>
                        <p>Would you like to create another madlib?</p>
                        <button onClick={resetMadlib}>Lord of the Rings again!</button>
                        <button onClick={() => navigate("/")}>Literally any other madlib.</button>
                    </div>
                </div>
            ) : (
                <div>
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Verb: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a verb (no -ing)" 
                                name="verbTwo" 
                                value={verbTwo}
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
                                <label htmlFor="Name" className="form-label">Adjective: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an adjective" 
                                name="adjective" 
                                value={adjective}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Amount: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an amount" 
                                name="amount" 
                                value={amount}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
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
                                <label htmlFor="Name" className="form-label">Common Last Name: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a common last name" 
                                name="lastName" 
                                value={lastName}
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
                                name="adjectiveEight" 
                                value={adjectiveEight}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Singular Noun: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a noun" 
                                name="nounOne" 
                                value={nounOne}
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
                                <label htmlFor="Name" className="form-label">Profession: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a profession" 
                                name="profession" 
                                value={[profession]}
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
                                <label htmlFor="Name" className="form-label">Direction: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a direction (e.g. where an object could be placed)" 
                                name="direction" 
                                value={direction}
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
                                <label htmlFor="Name" className="form-label">Verb: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a verb" 
                                name="verb" 
                                value={verb}
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
                                name="adjectiveSix" 
                                value={adjectiveSix}
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
                                <label htmlFor="Name" className="form-label">Adjective: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an adjective" 
                                name="adjectiveSeven" 
                                value={adjectiveSeven}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-outline-primary m-4 shadow">Create Madlib!</button>
                        <button onClick={() => navigate('/')}>Cancel</button>
                    </form>
            </div>
        )}
            
        </div>
    )
}

export default Lotr;