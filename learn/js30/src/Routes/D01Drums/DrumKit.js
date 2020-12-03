import React from 'react'
import './style.css'

import clap from './sounds/clap.wav'
import hihat from './sounds/hihat.wav'
import kick from './sounds/kick.wav'
import openhat from './sounds/openhat.wav'
import boom from './sounds/boom.wav'
import ride from './sounds/ride.wav'
import snare from './sounds/snare.wav'
import tom from './sounds/tom.wav'
import tink from './sounds/tink.wav'

const DrumKit = () => {
    const noteList = [
        { sound: clap, dataKey: '65', keyMap: 'A', text: 'clap' },
        { sound: hihat, dataKey: '68', keyMap: 'D', text: 'kick' },
        { sound: kick, dataKey: '83', keyMap: 'S', text: 'hihat' },
        { sound: openhat, dataKey: '70', keyMap: 'F', text: 'openhat' },
        { sound: boom, dataKey: '71', keyMap: 'G', text: 'boom' },
        { sound: ride, dataKey: '72', keyMap: 'H', text: 'ride' },
        { sound: snare, dataKey: '74', keyMap: 'J', text: 'snare' },
        { sound: tom, dataKey: '75', keyMap: 'K', text: 'tom' },
        { sound: tink, dataKey: '76', keyMap: 'L', text: 'tink' },
    ];

    const showKey = (e) => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        // console.log(key);
        // console.log(audio);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing')
        
    }

    const mapNotes = () =>
        noteList.map(stuff => <Notes stuff={stuff} key={stuff.dataKey}  />);

    return (
        <div className="d01-drums" onKeyDown={showKey} tabIndex="0">
            BadumTsh

            <div className="keys">
                {mapNotes()}
            </div>
        </div>
    )
}

const Notes = (props) => {
    const { dataKey, keyMap, text, sound } = props.stuff;

    // take away highlight
    const endTransitioned = (e) => {
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }

    return (
        <div className="key" data-key={dataKey} onTransitionEnd={endTransitioned}>
            <kbd>{keyMap}</kbd>
            <span className="sound">{text}</span>
            <audio data-key={dataKey} src={sound} />
        </div>
    )
}

export default DrumKit

