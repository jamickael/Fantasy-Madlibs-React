import {useState} from 'react';
import { Link } from 'react-router-dom';


function FourthWing() {
    const [madlib, setMadlib] = useState({
        adjectiveOne:"",
        pluralNoun:"",
        adjectiveFive:"",
        number:"",
        verb:"",
        timePeriod:"",
        adjectiveTwo:"",
        pluralBodyPart:"",
        familyMember:"",
        maleName:"",
        adjectiveThree:"",
        animal:"",
        color:"",
        pluralNounTwo:"",
        adjectiveFour:"",
        bodyPart:"",
        adjectiveOneArticle:"",
        adjectiveFiveArticle:"",
        animalCap:""
    });
    const {adjectiveOne, pluralNoun, adjectiveFive, number, verb, timePeriod, adjectiveTwo,pluralBodyPart, 
        familyMember, maleName, adjectiveThree, animal, color, pluralNounTwo, adjectiveFour, bodyPart, 
        adjectiveOneArticle, adjectiveFiveArticle, animalCap} = madlib;
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
        const adjFiveArticle = aOrAn(adjectiveFive);
        const animalCapitalized = capitalize(animal);
        const colorCapitalized = capitalize(color);
        const maleNameCapitalized = capitalize(maleName);

        setMadlib({
            ...madlib,
            adjectiveOneArticle: adjOneArticle,
            adjectiveFiveArticle: adjFiveArticle,
            animalCap: animalCapitalized,
            color: colorCapitalized,
            maleName: maleNameCapitalized,
        });
        console.log("Locked and loaded")

        setShowMadlib(true);
    };


    return (
        <div className="">
            {showMadlib ? (
                <div>
                    <p>
                    Twenty-year-old {color} Sorrengail was supposed to enter the Scribe Quadrant, 
                    living {adjectiveOneArticle} {adjectiveOne} life among books and {pluralNounTwo}. Now, the 
                    commanding general -- also known as her tough-as-{pluralBodyPart} mother -- has ordered {color} to 
                    join the {number} candidates striving to become the elite of Navarre: {animal} riders.
                    </p> 
                    
                    <p>
                    But when you're smaller than everyone else and your {bodyPart} is {adjectiveTwo}, death is only a 
                    heartbeat away...because {animal}s don't bond to '{adjectiveTwo}' humans. They incinerate them.
                    </p> 
                    
                    <p> 
                    With fewer {animal}s willing to bond than cadets, most would kill {color} to better their 
                    own chances of success. The rest would kill her just for being her {familyMember}'s daughter 
                    -- like {maleName}, the most {adjectiveThree} and {adjectiveFour} wingleader in the Rider's Quadrant. 
                    </p> 
                    
                    <p>
                    She'll need every edge her wits can give her just to see the next {timePeriod}. Yet, with every 
                    day that passes, the war outside grows more deadly, the kingdom's protective {pluralNoun} are 
                    failing, and the death toll continues to rise. Even worse, {color} begins to suspect leadership is hiding 
                    {adjectiveFiveArticle} {adjectiveFive} secret. 
                    </p> 
                    
                    <p>
                    Friends, enemies, lovers. Everyone at Basgiath {animalCap} College 
                    has an agenda -- because once you enter, there are only two ways out: {verb} or die.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <p>Would you like to create another madlib?</p>
                        <Link className="btn btn-outline-primary m-4 shadow" to="/fourthwing">Fourth Wing again!</Link>
                        <Link className="btn btn-outline-primary m-4 shadow" to="/">A different madlib.</Link>
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
                                name="adjectiveOne" 
                                value={adjectiveOne}
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
                                <label htmlFor="Name" className="form-label">Number: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a number" 
                                name="number" 
                                value={number}
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
                                <label htmlFor="Name" className="form-label">Length of Time: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a length of time" 
                                name="timePeriod" 
                                value={timePeriod}
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
                                <label htmlFor="Name" className="form-label">Plural body part: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a plural body part" 
                                name="pluralBodyPart" 
                                value={pluralBodyPart}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Family Member: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a family member" 
                                name="familyMember" 
                                value={familyMember}
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
                                <label htmlFor="Name" className="form-label">Color: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a color" 
                                name="color" 
                                value={color}
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
                                name="pluralNounTwo" 
                                value={pluralNounTwo}
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
                                <label htmlFor="Name" className="form-label">Body part: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a body part" 
                                name="bodyPart" 
                                value={bodyPart}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-outline-primary m-4 shadow">Create Madlib!</button>
                        <Link className="btn btn-outline-danger m-4 shadow" to="/">Cancel</Link>
                    </form>
            </div>
        )}
            
        </div>
    )
}




export default FourthWing;