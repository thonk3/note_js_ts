import React from 'react'
import './style.css'

const DrumKit = () => {

    const noteList = [
        { dataKey: '65', keyMap: 'A', text: 'clap' },
        { dataKey: '83', keyMap: 'S', text: 'hihat' },
        { dataKey: '68', keyMap: 'D', text: 'kick' },
        { dataKey: '70', keyMap: 'F', text: 'openhat' },
        { dataKey: '71', keyMap: 'G', text: 'boom' },
        { dataKey: '72', keyMap: 'H', text: 'ride' },
        { dataKey: '74', keyMap: 'J', text: 'snare' },
        { dataKey: '75', keyMap: 'K', text: 'tom' },
        { dataKey: '76', keyMap: 'L', text: 'tink' },
    ];

    const showKey = (e) => {
        console.log(e);
    }

    // ok so this works?
    window.addEventListener('keydown', function(e) {console.log(e)})

    const mapNotes = () =>
        noteList.map(i => <Notes dataKey={i.dataKey} key={i.dataKey} keyMap={i.keyMap} text={i.text} />);

    return (
        <div className="d01-drums" onKeyDown={showKey}>
            BadumTsh

            <div className="keys">
                {mapNotes()}
            </div>

            <audio data-key="65" src="sounds/clap.wav"></audio>
            <audio data-key="83" src="sounds/hihat.wav"></audio>
            <audio data-key="68" src="sounds/kick.wav"></audio>
            <audio data-key="70" src="sounds/openhat.wav"></audio>
            <audio data-key="71" src="sounds/boom.wav"></audio>
            <audio data-key="72" src="sounds/ride.wav"></audio>
            <audio data-key="74" src="sounds/snare.wav"></audio>
            <audio data-key="75" src="sounds/tom.wav"></audio>
            <audio data-key="76" src="sounds/tink.wav"></audio>
        </div>
    )
}

const Notes = (props) => {
    const { dataKey, keyMap, text } = props;
    return (
        <div className="key" data-key={dataKey}>
            <kbd>{keyMap}</kbd>
            <span className="sound">{text}</span>
        </div>
    )
}

export default DrumKit

