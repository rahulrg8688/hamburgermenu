// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'

const about = () => (
  <div>
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      alt="About"
    />
    <h1>About</h1>
    <Link to="/">
      <button type="button">Home</button>
    </Link>
  </div>
)

export default about
