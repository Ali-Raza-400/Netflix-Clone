import './Home.scss'

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/Featured/Featured';
import List from '../../components/list/List';
const home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <Featured type="movie"/>
    <List/>
    <List/>
    <List/>
    <List/>
   
    </div>
  )
}

export default home