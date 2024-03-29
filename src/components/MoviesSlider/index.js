// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: true,

    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const {moviesList} = props
  console.log(moviesList)

  return (
    <Slider {...settings}>
      {moviesList.map(each => (
        <MovieItem key={each.id} movieDetails={each} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
