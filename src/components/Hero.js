// app/components/Hero.js
import Scene from './Scene';



const Hero = ({modelUrl, flip, bgType}) => {
    console.log("flip", flip);
    return (
        <section className={`hero ${bgType}`}>
            <div className="container">
                <div className={`body ${flip ? 'flip' : 'dont-flip'}`}>
                    <div className="hand">
                        <Scene modelUrl={modelUrl} />
                    </div>
                    <div className="right">
                        <h1>STATUE LAND</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
