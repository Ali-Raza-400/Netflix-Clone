import './listitem.scss'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
const Listitem = () => {
  return (
    <div className='listItem'>
        <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />

        <div className="itemInfo">
          <div className="icons">
            <PlayArrowIcon/>
            <AddOutlinedIcon/>
            <ThumbUpOutlinedIcon/>
            <ThumbDownOutlinedIcon/>
          </div>
        </div>
    </div>
  )
}

export default Listitem