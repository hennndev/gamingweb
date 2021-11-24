import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import GameList from './GameList'
import Genres from './Genres'
import { BsArrowRightShort } from 'react-icons/bs'

const Games = (props) => {

    const [games, setGames] = useState([])
    const [isGenre, setIsGenre] = useState('all')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "018e044843msh163c000fcfab21dp19d6e1jsn0179954e2a9c"
            }
        }).then((res) => res.json()).then((data) => {
            setIsLoading(false)
            const formattedData = data.slice(100, 300)
            setGames(formattedData)
        }).catch(() => setIsLoading(false))

    }, [])

    const browserGames = games.filter(game => game.platform === 'Web Browser')
                    .filter(game => game.genre.includes(isGenre === 'all' ? '' : isGenre))
    const PCGames = games.filter(game => game.platform === 'PC (Windows)')
                    .filter(game => game.genre.includes(isGenre === 'all' ? '' : isGenre))

    const genres = [...new Set(games.map(game => game.genre))]

    if(isLoading) {
        return (
            <div className="flex items-center justify-center text-blue-700 mt-10">
                <p className="animate-pulse">Loading...</p>
            </div>
        )
    }

    return (
        <div className="text-white pt-24 pb-12 px-10">
            <div className="container">
                <h1 className="text-2xl sm:text-3xl mb-10 text-center">Best free to play games PC and Browser in 2021!</h1>

                <div className="flex items-center justify-end space-x-3 text-sm text-blue-400">
                    <BsArrowRightShort className="text-xl"/>
                    <p>Swipe to right</p>
                </div>
                <Genres genres={genres} setIsGenre={setIsGenre} isGenre={isGenre}/>
                
                {/* BROWSER */}
                <h1 className="text-2xl mb-10">Browser Game</h1>
                <div className="grid grid-cols-cards gap-10 mb-10">
                    {browserGames.length > 0 ? browserGames.map(game => (
                        <GameList key={game.id} game={game} handleClick={() => props.history.push(`/games/${game.id}`)}/>
                        )) : <h1 className="text-lg">Can't find a game</h1>
                    }
                </div>

                {/* PC */}
                <h1 className="text-2xl mb-10">PC Game</h1>
                <div className="grid grid-cols-cards gap-10">
                    {PCGames.length > 0 ? PCGames.map(game => (
                        <GameList key={game.id} game={game} handleClick={() => props.history.push(`/games/${game.id}`)}/>
                        )) : <h1>Can't find a game</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Games)
