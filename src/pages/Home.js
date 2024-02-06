

import Hero from "../components/Hero";
import Timeline from "../components/Timeline";


const Home = () => {

    return (
        <section class="home">
            <Hero modelUrl="/art.glb" flip={false} bgType="pink"/>
            <Timeline/>
            <Hero modelUrl="/david.glb" flip={true} bgType="blue"/>

        </section>
    )
}

export default Home;