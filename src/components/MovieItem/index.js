// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {id, thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <li className="list-container" key={id}>
          <img className="item-img" alt="thumbnail" src={thumbnailUrl} />
        </li>
      }
      className="popup-content"
    >
      {kavya => (
        <div>
          <div className="close-icon-container">
            <button
              onClick={() => kavya()}
              className="view"
              data-testid="closeButton"
              type="button"
            >
              <IoMdClose onClick={() => kavya()} role="button" size={30} />
            </button>
          </div>
          <ReactPlayer controls url={videoUrl} height={300} width={640} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
