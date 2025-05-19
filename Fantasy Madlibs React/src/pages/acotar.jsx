import {useState} from 'react';
import { useNavigate} from 'react-router-dom';


function Acotar() {
    const [madlib, setMadlib] = useState({
        number:"",
        nounOne:"",
        adjectiveFour:"",
        nounTwo:"",
        adjectiveOne:"",
        pluralNoun:"",
        adjectiveTwo:"",
        nounThree:"",
        maleName:"",
        adjectiveThree:"",
        profession:"",
        adjectiveFive:"",
        animal:"",
        adjectiveSix:"",
        nounFour:"",
        verb:"",
        spanOfTime:"",
        adjectiveOneArticle:"",
        adjectiveFourArticle:"",
        adjectiveFiveArticle:"",
        nounThreeArticle:"",
        animalArticle:"",
        unpluralNoun:""
    });
    const {number, nounOne, adjectiveFour, nounTwo, adjectiveOne, pluralNoun, adjectiveTwo, 
        nounThree, maleName, adjectiveThree, profession, adjectiveFive, animal, adjectiveSix,
        nounFour, verb, spanOfTime, adjectiveOneArticle, adjectiveFourArticle, adjectiveFiveArticle,
        nounThreeArticle, animalArticle, unpluralNoun} = madlib;
    const [showMadlib, setShowMadlib] = useState(false);
    let navigate = useNavigate(); 
    

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
        const adjFourArticle = aOrAn(adjectiveFour);
        const adjFiveArticle = aOrAn(adjectiveFive);
        const nnThreeArticle = aOrAn(nounThree);
        const aniArticle = aOrAn(animal);
        const length = pluralNoun.length
        const slicedNoun = pluralNoun.slice(0, length -1);
        const capAdjFiveArt = capitalize(adjFiveArticle);
        const capMaleName = capitalize(maleName);

        setMadlib({
            ...madlib,
            adjectiveOneArticle: adjOneArticle,
            adjectiveFourArticle: adjFourArticle,
            adjectiveFiveArticle: capAdjFiveArt,
            nounThreeArticle: nnThreeArticle,
            animalArticle: aniArticle,
            unpluralNoun: slicedNoun,
            maleName:capMaleName
        });

        setShowMadlib(true);
    };

    const resetMadlib = () => {
        setMadlib({
            number:"", nounOne:"", adjectiveFour:"", nounTwo:"", adjectiveOne:"", pluralNoun:"",
            adjectiveTwo:"", nounThree:"", maleName:"", adjectiveThree:"", profession:"", adjectiveFive:"",
            animal:"", adjectiveSix:"", nounFour:"", verb:"", spanOfTime:"", adjectiveOneArticle:"",
            adjectiveFourArticle:"", adjectiveFiveArticle:"", nounThreeArticle:"", animalArticle:"", unpluralNoun:""
        });
        setShowMadlib(false);
    };


    return (
        <div className="">
            {showMadlib ? (
                <div>
                    <p>
                    When {number}-year-old {profession} Feyre kills {animalArticle} {animal} in the woods, a terrifying {nounOne} arrives 
                    to demand {nounTwo}. Dragged to {adjectiveOneArticle} {adjectiveOne} {adjectiveTwo} land she knows about only 
                    from legends, Feyre discovers that her captor is not truly {nounThreeArticle} {nounThree}, but one of the lethal, 
                    immortal {pluralNoun} who once ruled her world. 
                    </p>
                    <p>
                    At least, he's not {nounThreeArticle} {nounThree} all the time. 
                    </p>
                    <p>
                    As she adapts to her new home, her feelings for the {unpluralNoun}, {maleName}, transform 
                    from {adjectiveThree} hostility into {adjectiveFourArticle} {adjectiveFour} passion that burns through every lie 
                    she's been told about the beautiful, dangerous world of the {unpluralNoun}. But something 
                    is not right in the {pluralNoun}'s lands. {adjectiveFiveArticle} {adjectiveFive}, {adjectiveSix} {nounFour} is 
                    growing, and Feyre must find a way to {verb} it, or doom {maleName} - and his world-for {spanOfTime}.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => setShowMadlib(false)}>Edit</button>
                        <br></br>
                        <p>Would you like to create another madlib?</p>
                        <button onClick={resetMadlib}>A Court of Thorns and Roses again!</button>
                        <button onClick={() => navigate("/")}>Literally any other madlib.</button>
                    </div>
                </div>
            ) : (
                <div>
                    <form onSubmit={(e)=> onSubmit(e)}>
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
                                <label htmlFor="Name" className="form-label">Noun: </label>
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
                                placeholder="Enter an adjective" 
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
                                name="adjectiveTwo" 
                                value={adjectiveTwo}
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
                                name="nounThree" 
                                value={nounThree}
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
                                <label htmlFor="Name" className="form-label">Noun: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a noun" 
                                name="nounFour" 
                                value={nounFour}
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
                                <label htmlFor="Name" className="form-label">Span of Time: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a span of time" 
                                name="spanOfTime" 
                                value={spanOfTime}
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

export default Acotar;