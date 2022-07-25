import './index.css';
import Profile from './components/Profile';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './slices/themeSlice';

function App() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    return (
        <div className={"App " + theme.value}>
            <Profile />
            <Login />

            <button className='toggle' onClick={() => dispatch(toggleTheme())}>Toggle theme: {theme.value}</button>
        </div>
    );  
}

export default App;