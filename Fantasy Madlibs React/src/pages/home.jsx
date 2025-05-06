
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Book Club Madlibs</h1>
            <p>Buckle up folks. You're in for a night of ridiculous, raunchy, and eXtrEamLy realistic stories.</p>

            <Link className="btn btn-outline-primary" to="/fourthwing" style={{margin:5}}>Fourth Wing</Link>
            <br></br>
            <Link className="btn btn-outline-primary" to="/acotar" style={{margin:5}}>A Court of Thorns and Roses</Link>
            <br></br>
            <Link className="btn btn-outline-primary" to="/lordoftherings" style={{margin:5}}>Lord of the Rings</Link>
            <br></br>
            <Link className="btn btn-outline-primary" to="/harrypotter" style={{margin:5}}>Harry Potter and the Sorceror's Stone</Link>
            <br></br>
            <Link className="btn btn-outline-primary" to="/ledge" style={{margin:5}}>Ledge</Link>
        </div>
    )
}

export default Home;