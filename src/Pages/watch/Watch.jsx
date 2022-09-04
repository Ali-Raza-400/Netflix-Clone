import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import xyz from '../../assets/demo.mp4'
const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        <video
        className="video"
        autoPlay
        progress
        controls
        src={xyz}
      />
    </div>
  )
}

export default Watch