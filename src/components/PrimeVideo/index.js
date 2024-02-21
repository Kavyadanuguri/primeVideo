// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')

  return (
    <div>
      <img
        className="prime-img"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="prime-container">
        <div className="display-container">
          <h1 className="prime-h1">Action Movies</h1>
          <MoviesSlider moviesList={actionMovies} />
        </div>
        <div className="display-container">
          <h1 className="prime-h1">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
