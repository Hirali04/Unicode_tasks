import { useContext, useEffect, useRef, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Pause from './Pause';
import Play from './Play';
import Restart from './Restart';
import SettingsContext from './SettingsContext';

const red = '#f54e4e';
const green = 'rgb(25, 193, 27)';

function Timer() {
    const settingsInfo = useContext(SettingsContext);
    const[isPaused, setPaused] = useState(true);
    const[mode,setMode] = useState('work');
    const[secondsLeft, setsecondsLeft] = useState(0);
    
    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function switchMode(){
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds=(nextMode === 'work' ? settingsInfo.workTime*60 : settingsInfo.breakTime*60);
        setMode(nextMode);
        modeRef.current=nextMode;
        setsecondsLeft(nextSeconds);
        secondsLeftRef.current=nextSeconds;
    }

    function tick(){
        secondsLeftRef.current--;
        setsecondsLeft(secondsLeftRef.current);
    }

    function iniTimer(){
        secondsLeftRef.current=settingsInfo.workTime*60;
        setsecondsLeft(secondsLeftRef.current);
    }


    useEffect(() =>{
        iniTimer();
        const interval =  setInterval(() =>{
            if(isPausedRef.current){
                return;
            }
            if(secondsLeftRef.current === 0){
                return switchMode();
            }
            
            tick();
        },10);

        return () =>clearInterval(interval);
    },[settingsInfo]);

    const totalSeconds = mode === 'work'? settingsInfo.workTime*60 : settingsInfo.breakTime*60;
    const percentage = Math.round(secondsLeft/totalSeconds *100);

    let minutes=Math.floor(secondsLeft/60);
    if(minutes<10)
    minutes = '0'+minutes;
    let seconds=secondsLeft %60;
    if(seconds<10)
    seconds = '0'+seconds;
    

    return(
    <div><CircularProgressbar value={percentage} text={minutes+":"+seconds}  styles={buildStyles({
        textColor: "#fff",
        pathColor:mode==='work'? red:green,
        tailColor:'grey',
    })} />
    <div>
        {isPaused ?
         <Play onClick={() => {setPaused(false); isPausedRef.current=false;}} />:
         <Pause onClick={() => {setPaused(true); isPausedRef.current=true;}}/>}
    </div>
    <div>
        <Restart onClick={() => {
        setPaused(true); // Pause the timer
        isPausedRef.current = true;
        // Reset the timer
        const nextSeconds = settingsInfo.workTime * 60;
        setsecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;}}/>
    </div>
    </div>
    
    );
}

export default Timer;