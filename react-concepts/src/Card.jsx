import profilePic from './assets/profile.jpg'
function Card() {
  return( 
  
  <div className="card">
    <img className="card-image" src={profilePic} alt="Profile Picture"></img>
    <h2 className='card-title'>Janushi Shastri</h2>
    <p className='card-text'> Learning React and watching Naruto</p>
    </div>
);
}
export default Card;
