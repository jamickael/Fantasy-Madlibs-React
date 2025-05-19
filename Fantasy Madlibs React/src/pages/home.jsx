
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();

    return (
        <div>
            <h1>Book Club Madlibs</h1>
            <p>Buckle up folks. You're in for a night of ridiculous, raunchy, and eXtrEamLy realistic stories.</p>

            <button onClick={() => navigate('/fourthwing')}>Fourth Wing</button>
            <br></br>
            <button onClick={() => navigate('/acotar')}>A Court of Thorns and Roses</button>
            <br></br>
            <button onClick={() => navigate('/lotr')}>Lord of the Rings</button>            
            <br></br>
            <button onClick={() => navigate('/eragon')}>Eragon</button>            
            <br></br>
            <button onClick={() => navigate('/harrypotter')}>Harry Potter and the Sorceror's Stone</button>            
            <br></br>
            <button onClick={() => navigate('/ledge')}>Ledge</button>        
        </div>
    )
}

export default Home;