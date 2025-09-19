import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world, One country at a time.
          </h1>
          <p className="paragraph">
            Discover the history, culture and beauty of every nation. Sort, Search, and filter through countries to find the details.
          </p>
          <NavLink to="country">
            <button className="btn btn-darken btn-inline bg-white-box">Start Exploring<FaArrowRight /></button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img src="/images/world.png" alt="image" className="banner-image"></img>
        </div>
      </div>
    </main>
  )
}

export default HeroSection
