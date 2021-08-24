import './App.css';
import React, {useEffect} from "react";
import {moviesService} from "./services";


const PageLayout = ({children}) => {

    return (
        <div className={'main-wrapper'}>
            <header>header</header>
                <main>
                    {children}
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                    <div className="item">5</div>
                    <div className="item">6</div>
                </main>
            <footer>footer</footer>
        </div>
    )
}

const Home = () => {

    return (<div>
        hello home
    </div>)
}


function App() {

    useEffect(()=> {
        moviesService.getMovies().then(console.log)
    }, [])


    return (
        <div className={'App'}>
<PageLayout>
    <Home/>
</PageLayout>
        </div>
    );
}

export default App;
