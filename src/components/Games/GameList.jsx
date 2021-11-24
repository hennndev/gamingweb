import React from 'react'

const GameList = ({handleClick, game}) => {
    return (
        <div className="min-h-80 bg-gray-900 rounded-md overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105" onClick={handleClick}>     
            <div className="h-44">
                <img src={game.thumbnail} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="px-3 py-4">
                <h1 className="text-lg">{game.title}</h1>
                <p className="text-sm text-gray-600 mb-1">
                    {game.short_description.split(' ').length > 10 ? 
                        `${game.short_description.split(' ').slice(0, 10).join(' ')}...` :
                        game.short_description
                    }
                </p>
                <p className="text-sm text-gray-600 mb-2">
                    Release date: <span className="ml-2">{game.release_date}</span>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                    Genre: <span className="bg-gray-800 text-white py-1 px-2 rounded-md ml-2">{game.genre}</span>
                </p>
            </div>
        </div>
    )
}

export default GameList
