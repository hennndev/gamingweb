import React from 'react'

const Genres = ({genres, isGenre, setIsGenre}) => {
    return (
        <div className="flex items-center space-x-5 mb-10 scrollbar-hide overflow-x-scroll py-5">
            <h2 className={`text-sm py-2 px-3 rounded-md ${isGenre === 'all' ? 'bg-blue-500 transform scale-110' : 'bg-gray-900'} cursor-pointer text-white whitespace-nowrap`}  onClick={() => setIsGenre('all')}>All</h2>
            {genres.map(genre => (
                <h2 
                    key={genre} 
                    className={`text-sm py-2 px-3 rounded-md ${isGenre === genre ? 'bg-blue-500 transform scale-110' : 'bg-gray-900'} cursor-pointer text-white whitespace-nowrap`} 
                    onClick={() => setIsGenre(genre)}>
                        {genre}
                </h2>
            ))}
        </div>
    )
}

export default Genres
