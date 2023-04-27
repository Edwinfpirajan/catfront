import { useEffect, useState } from "react";
import { CatApiService } from "../services/CatApiServices";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CatApiGalery = () => {
    const [catImages, setCatImages] = useState<CatImage[]>([]);
    const [favorites, setFavorites] = useState<CatImage[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            const images = await CatApiService.getCatApi();
            setCatImages(images);
        };
        loadImages();
    }, []);

    const handleAddFavorite = (image: CatImage) => {
        setFavorites((prevFavorites) => [...prevFavorites, image]);
    };

    const handleRemoveFavorite = (image: CatImage) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((fav) => fav.id !== image.id)
        );
    };

    return (
        <>
            <div className="grid grid-cols-5 gap-2">
                {catImages.slice(0, 10).map((image: CatImage) => (
                    <div key={image.id}>
                        <LazyLoadImage
                            src={image.url}
                            alt="cat"
                            effect="opacity"
                            className="h-40 w-40 object-cover object-center"
                        />
                        <div className="flex justify-center items-center mt-2">
                            <button
                                onClick={() =>
                                    favorites.find((fav) => fav.id === image.id)
                                        ? handleRemoveFavorite(image)
                                        : handleAddFavorite(image)
                                }
                                className="p-1 rounded-full bg-gray-200"
                            >
                                {favorites.find((fav) => fav.id === image.id)
                                    ? "❤"
                                    : "🤍"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h2 className="text-center text-xl font-bold mb-4">Favoritas</h2>
                <div className="grid grid-cols-5 gap-2">
                    {favorites.map((fav) => (
                        <div key={fav.id}>
                            <LazyLoadImage
                                src={fav.url}
                                alt="cat"
                                effect="opacity"
                                className="h-40 w-full object-cover object-center"
                            />
                            <div className="flex justify-center items-center mt-2">
                                <button
                                    onClick={() => handleRemoveFavorite(fav)}
                                    className="p-1 rounded-full bg-gray-200"
                                >
                                    ❌
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CatApiGalery