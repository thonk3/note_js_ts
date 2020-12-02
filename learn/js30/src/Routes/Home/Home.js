import React from 'react'

import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

const Home = props => {
    const dayLinks = [
        { dest: '/d01_drumkit', text: "Day 01 - Drum Kits"}, 
    ]

    const mapLinks = () => {
        return dayLinks.map(i => <DayLink dest={i.dest} text={i.text} />)
    }

    return (
        <div>
            <p>Yes this is a js 30 thing</p>

            <List ordered>
                {/* probably transform this to cards later */}
                { mapLinks() }
            </List>
        </div>
    )
}

// ======================================
const DayLink = props => {
    const { dest, text } = props;

    return (
        <List.Item>
            <Link to={dest}> {text} </Link>
        </List.Item>
    )
}

export default Home;