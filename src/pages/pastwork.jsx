import Nav from "../components/navbar"
import "../styles/pastwork.css"

function PastWork() {
  return (
    <>
      <Nav />
      <div className="past-work">
        <a href="https://shorturl.at/BIQT2" target="_blank">
          <button>
            <img src="../../src/assets/1.jpg"/>
            <span>Sharab Shrestha</span>
            <hr />
            <p>Advertisement of a Server</p>
          </button>
        </a>
      </div>
      <p className="footer2">&copy; 2023 BlazeOP. All rights reserved</p>
    </>
  )
}

export default PastWork
