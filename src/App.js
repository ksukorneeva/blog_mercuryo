import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Allposts from './pages/Allposts/Allposts';
import Article from './pages/Article/Article';
import Slider from './components/Slider/Slider';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/articles'
                    element={<Allposts title='Articles' view='page' />}
                />
                <Route
                    path='/authors'
                    element={<Allposts type='authors' view='page' />}
                />
                <Route
                    path='/insights'
                    element={<Allposts title='Insights' view='page' />}
                />
                <Route
                    path='/success%20stories'
                    element={<Allposts title='Success stories' view='page' />}
                />
                <Route
                    path='/announcements'
                    element={<Allposts title='Announcements' view='page' />}
                />
                <Route
                    path='/media'
                    element={<Allposts title='Media' view='page' />}
                />
                <Route path='/round-up' element={<Allposts type='slider' />} />
                <Route path='/articles/:id' element={<Article />} />
                <Route path='/authors/:id' element={<Article />} />
                <Route path='/insights/:id' element={<Article />} />
                <Route path='/success%20stories/:id' element={<Article />} />
                <Route path='/announcements/:id' element={<Article />} />
                <Route path='/media/:id' element={<Article />} />
                <Route path='/round-up/:id' element={<Allposts />} />
            </Routes>
        </div>
    );
}

export default App;
