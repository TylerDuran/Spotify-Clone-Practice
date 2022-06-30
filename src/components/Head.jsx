import "../css/Head.css"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useStateProviderValue } from '../StateProvider';

function Head() {

    const [{ user }] = useStateProviderValue();

    return (
        <div className='Header'>
            <div className='HeadLeft'>
                <SearchIcon />
                <input type="text" placeholder='Artist, Songs, or Podcasts' />
            </div>

            <div className='HeadRight'>
                <h3>{user?.display_name}</h3>
                <Avatar src="" alt='User Prof Pic' />

            </div>
        </div>
    )
}

export default Head