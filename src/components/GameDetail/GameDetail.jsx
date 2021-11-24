import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '../UI/Modal'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const GameDetail = () => {

    const [gameData, setGameData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isModal, setIsModal] = useState(null)
    const { gameId } = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "018e044843msh163c000fcfab21dp19d6e1jsn0179954e2a9c"
            }
        }).then((res) => res.json()).then((data) => {
            setIsLoading(false)
            setGameData(data)
        }).catch(() => setIsLoading(false))

    }, [gameId])

    if(isLoading) {
        return (
            <div className="grid place-items-center text-blue-700 h-screen">
                <p className="animate-pulse">Loading...</p>
            </div>
        )
    }


    return (
        <div className="pt-24 pb-12 px-10 text-white">
            <div className="container">
                <Link to="/" className="flex items-center space-x-3 mb-5 cursor-pointer hover:text-blue-600">
                    <BsArrowLeftCircle className="text-xl"/>
                    <p>Get Back</p>
                </Link>
                <div className="flex flex-col md:flex-row">
                    <img src={gameData?.thumbnail} alt={gameData?.title} className="mr-0 mb-5 md:mb-0 md:mr-5"/>
                    <div>
                        <h1 className="text-3xl md:text-4xl xl:text-5xl mb-3">{gameData?.title}</h1>
                        <h2 className="mb-1 text-md text-blue-500">
                            Genre: {' '}
                            <span className="text-white">{gameData?.genre}</span>
                        </h2>
                        <h2 className="mb-1 text-md text-blue-500">
                            Release date: <span className="text-white">{gameData?.release_date}</span>
                        </h2>
                        <h2 className="mb-1 text-md text-blue-500">
                            Platform: PC <span className="text-white">{gameData?.platform}</span>
                        </h2>
                        <h2 className="mb-1 text-md text-blue-500">
                            Developer: <span className="text-white">{gameData?.developer}</span>
                        </h2>
                        <h2 className="mb-1 text-md text-blue-500">
                            Publisher: <span className="text-white">{gameData?.publisher}</span>
                        </h2>
                        <h2 className="mb-1 text-md text-blue-500">
                            Source: <a href={gameData?.game_url} className="border-b border-blue-500 text-blue-300">{gameData?.game_url}</a>
                        </h2>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="mb-7">
                        <h1 className="text-xl mb-2 text-blue-500">{gameData?.title} Description</h1>
                        <p className="text-md">{gameData?.description}</p>
                    </div>

                    <div className="mb-7">
                        <h1 className="text-xl mb-2 text-blue-500">{gameData?.title} Screenshoots</h1>
                        <div className="grid grid-cols-cards gap-5">
                            {gameData?.screenshots.length > 0 ? gameData?.screenshots.map(image => (
                                <div className="h-44 cursor-pointer" key={image.id}>
                                    <img 
                                        src={image.image}  
                                        alt={image.id} 
                                        onError={(e)=>{e.target.onerror = null; e.target.src="https://rsiarafah.id/assets_web/img/images_pp/A4.jpg"}}
                                        onClick={() => setIsModal(image.image)} className="h-full w-full object-cover"/>
                                </div>
                                )) : <p>Screenshots not found</p>
                            }
                        </div>
                    </div>

                    {gameData?.platform === 'Windows' && (
                        <div className="mb-5 text-gray-300">
                            <h1 className="text-xl mb-2 text-blue-500">Minimum System Requirements</h1>
                            <div className="mb-2">
                                <h3 className="text-gray-500 text-lg">OS</h3>
                                <p>{gameData?.minimum_system_requirements.os}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="text-gray-500 text-lg">Processor</h3>
                                <p>{gameData?.minimum_system_requirements.processor}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="text-gray-500 text-lg">Graphics</h3>
                                <p>{gameData?.minimum_system_requirements.graphics}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="text-gray-500 text-lg">Memory</h3>
                                <p>{gameData?.minimum_system_requirements.memory}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="text-gray-500 text-lg">Storage</h3>
                                <p>{gameData?.minimum_system_requirements.storage}</p>
                            </div>
                        </div>
                    )}
                </div>
                {isModal && <Modal handleClose={() => setIsModal(null)}>
                    <img 
                        src={isModal} 
                        alt={isModal.id} 
                        onError={(e)=>{e.target.onerror = null; e.target.src="https://rsiarafah.id/assets_web/img/images_pp/A4.jpg"}} 
                        className="w-full h-full object-cover"/>
                </Modal>}
            </div>
        </div>
    )
}

export default GameDetail
