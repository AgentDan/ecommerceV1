import {Environment, OrbitControls, Scroll, ScrollControls} from "@react-three/drei"
import './ProjectOne.css'
import ModelOne from "./ModelOne.js"

function ProjectOne({currentLang}) {
    return (
        <>
            <Environment preset='warehouse'/>

            <ScrollControls pages={4} damping={0.2}>

                <ModelOne/>
                <color attach="background" args={["#f9f9fa"]}/>

                <Scroll html style={{width: '100%'}}>
                    <h1 style={{
                        color: '#ff0000',
                        position: 'absolute',
                        top: `65vh`,
                        left: '50%',
                        fontSize: '4em',
                        transform: `translate(-50%,-50%)`
                    }}>
                        {currentLang === "en" ? "Welcome" : ""}
                        {currentLang === "rs" ? "Добродошли" : ""}
                        {currentLang === "ru" ? "Привет" : ""}
                    </h1>

                    <div style={{position: 'absolute', top: `132vh`}}>
                        <h1 style={{
                            color: '#ff0000',
                            position: 'absolute',
                            top: `65vh`,
                            left: '50%',
                            fontSize: '4em',
                            transform: `translate(-50%,-50%)`
                        }}>
                            {currentLang === "en" ? "Welcome" : ""}
                            {currentLang === "rs" ? "Добродошли" : ""}
                            {currentLang === "ru" ? "Привет" : ""}
                        </h1>
                    </div>

                    <div style={{position: 'absolute', top: `264vh`}}>
                        <h1 style={{
                            color: '#ff0000',
                            position: 'absolute',
                            top: `65vh`,
                            left: '50%',
                            fontSize: '4em',
                            transform: `translate(-50%,-50%)`
                        }}>
                            {currentLang === "en" ? "Welcome" : ""}
                            {currentLang === "rs" ? "Добродошли" : ""}
                            {currentLang === "ru" ? "Привет" : ""}
                        </h1>
                    </div>

                </Scroll>
            </ScrollControls>
        </>
    )
}

export default ProjectOne