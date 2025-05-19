import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';


function HarryPotter() {
    let navigate = useNavigate();
    const [madlib, setMadlib] = useState({
        sport:"",
        nounOne:"",
        holiday:"",
        verbOne:"",
        adjectiveSix:"",
        clothingItem:"",
        adjectiveOne:"",
        animal:"",
        adjectiveTwo:"",
        place:"",
        size:"",
        nounTwo:"",
        adjectiveFour:"",
        maleName:"",
        adjectiveFive:"",
        bodyPart:"",
        number:"",
        nounThree:"",
        pluralNoun:"",
        adjectiveThree:"",
        event:"",
        sportArticle:"",
        nounOneArticle:"",
        clothingArticle:"",
        adjectiveOneArticle:"",
        placeArticle:"",
        holidayArticle:""
    });
    const {sport, nounOne, holiday, verbOne, adjectiveSix, clothingItem, adjectiveOne, animal, adjectiveTwo, place, size,
        nounTwo, adjectiveFour, maleName, adjectiveFive, bodyPart, number, nounThree, pluralNoun, adjectiveThree, event,
        sportArticle, nounOneArticle, clothingArticle, adjectiveOneArticle, placeArticle, holidayArticle} = madlib;
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
        const sptArticle = aOrAn(sport);
        const nnOneArticle = aOrAn(nounOne);
        const clothArticle = aOrAn(clothingItem);
        const adjOneArticle = aOrAn(adjectiveOne);
        const holArticle = aOrAn(holiday);
        const maleNameCapitalized = capitalize(maleName);
        const sportCapitalized = capitalize(sport);
        const holidayCapitalized = capitalize(holiday);
        const placeCapitalized = capitalize(place);

        setMadlib({
            ...madlib,
            sportArticle: sptArticle,
            nounOneArticle: nnOneArticle,
            clothingArticle: clothArticle,
            adjectiveOneArticle: adjOneArticle,
            holidayArticle: holArticle,
            maleName: maleNameCapitalized,
            sport: sportCapitalized,
            holiday: holidayCapitalized,
            place: placeCapitalized
        });
        console.log("Locked and loaded")

        setShowMadlib(true);
    };

    const resetMadlib = () => {
        setMadlib({
            sport:"",
        nounOne:"",
        holiday:"",
        verbOne:"",
        adjectiveSix:"",
        clothingItem:"",
        adjectiveOne:"",
        animal:"",
        adjectiveTwo:"",
        place:"",
        size:"",
        nounTwo:"",
        adjectiveFour:"",
        maleName:"",
        adjectiveFive:"",
        bodyPart:"",
        number:"",
        nounThree:"",
        pluralNoun:"",
        adjectiveThree:"",
        event:"",
        sportArticle:"",
        nounOneArticle:"",
        clothingArticle:"",
        adjectiveOneArticle:"",
        placeArticle:"",
        holidayArticle:"" 
        });
        setShowMadlib(false);
    }


    return (
        <div className="">
            {showMadlib ? (
                <div>
                    <p>
                    {maleName} Potter has never been the star of {sportArticle} {sport} team, scoring points while  
                    riding {nounOneArticle} {nounOne} far above the ground. He knows no spells, has never helped to {verbOne} a dragon, and 
                    has never worn {clothingArticle} {clothingItem} of invisibility.
                    </p> 
                    <p>
                    All he knows is {adjectiveOneArticle} {adjectiveOne} life with the Dursleys, his {adjectiveTwo} aunt and uncle, and 
                    their {adjectiveThree} son, Dudley -- a {size} {adjectiveFour} spoiled bully. {maleName}'s room is 
                    a {adjectiveFive} closet at the {bodyPart} of the stairs, and he hasn't had {holidayArticle} {holiday} party in {number}.
                    </p> 
                    <p>
                    But all that is about to change when a mysterious {nounTwo} arrived by {animal} messenger: a {nounTwo} 
                    with an invitation to {placeArticle} {place} that {maleName} will find {adjectiveSix}. 
                    </p> 
                    <p>
                    For it's there that he finds not only friends, aerial sports, and {nounThree} in everything 
                    from classes to {pluralNoun}, but a great destiny that's been waiting for him... 
                    if {maleName} can survive the next {event}.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => setShowMadlib(false)}>Edit</button>
                        <br></br>
                        <p>Would you like to create another madlib?</p>
                        <button onClick={resetMadlib}>Harry Potter again!</button>
                        <button onClick={() => navigate("/")}>Literally any other madlib.</button>
                    </div>
                </div>
            ) : (
                <div>
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Sport: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a sport" 
                                name="sport" 
                                value={sport}
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
                                <label htmlFor="Name" className="form-label">Holiday: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a holiday" 
                                name="holiday" 
                                value={holiday}
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
                                name="adjectiveSix" 
                                value={adjectiveSix}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Clothing Item: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an item of clothing" 
                                name="clothingItem" 
                                value={clothingItem}
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
                                name="adjectiveTwo" 
                                value={adjectiveTwo}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Place: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a place" 
                                name="place" 
                                value={place}
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
                                <label htmlFor="Name" className="form-label">Body Part: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a body part" 
                                name="bodyPart" 
                                value={bodyPart}
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
                                <label htmlFor="Name" className="form-label">Plural Noun: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter a noun" 
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
                                name="adjectiveThree" 
                                value={adjectiveThree}
                                onChange={(e)=>onInputChange(e)}
                                required></input>
                            </div>
                        </div>
                        <div className="row w-50 position-relative start-50 translate-middle-x">
                            <div className="text-center mt-5">
                                <label htmlFor="Name" className="form-label">Event: </label>
                                <input type={"text"} 
                                className="form-control shadow" 
                                placeholder="Enter an event you can attend" 
                                name="event" 
                                value={event}
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

export default HarryPotter;