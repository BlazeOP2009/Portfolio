import Avatar from "../../src/assets/rounded_corners.png"
import { Link } from "react-router-dom"
import "../styles/navbar.css"

export default function Nav() {
  return (
    <div className="navbar">
      <img src={Avatar} />
      <h1>BlazeOP</h1>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/pastworks" className="nav-link">PastWork</Link>
      <a href="https://discordapp.com/users/694432690073763850" target="blank" className="nav-link">Discord</a>
      <a href="https://github.com/BlazeOP2009" target="blank" className="nav-link">Github</a>
    </div>
  )
}