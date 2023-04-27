// import { useEffect, useState } from "react";
// import { CatApiService } from "../../services/CatApiServices";
// import ContentLoader from "react-content-loader";

// export const CatApi = () => {
//   const [catImages, setCatImages] = useState<CatImage[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const loadImages = async () => {
//       const images = await CatApiService.getCatApi();
//       setCatImages(images);
//       setLoading(false);
//     };

//     loadImages();
//   }, []);

//   return (
//     <div className="grid grid-cols-5 gap-4">
//       {loading ? (
//         <>
//           <ContentLoader 
//             speed={2}
//             width={192}
//             height={192}
//             viewBox="0 0 192 192"
//             backgroundColor="#f3f3f3"
//             foregroundColor="#ecebeb"
//           >
//             <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
//           </ContentLoader>
//           <ContentLoader 
//             speed={2}
//             width={192}
//             height={192}
//             viewBox="0 0 192 192"
//             backgroundColor="#f3f3f3"
//             foregroundColor="#ecebeb"
//           >
//             <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
//           </ContentLoader>
//           <ContentLoader 
//             speed={2}
//             width={192}
//             height={192}
//             viewBox="0 0 192 192"
//             backgroundColor="#f3f3f3"
//             foregroundColor="#ecebeb"
//           >
//             <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
//           </ContentLoader>
//           <ContentLoader 
//             speed={2}
//             width={192}
//             height={192}
//             viewBox="0 0 192 192"
//             backgroundColor="#f3f3f3"
//             foregroundColor="#ecebeb"
//           >
//             <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
//           </ContentLoader>
//           <ContentLoader 
//             speed={2}
//             width={192}
//             height={192}
//             viewBox="0 0 192 192"
//             backgroundColor="#f3f3f3"
//             foregroundColor="#ecebeb"
//           >
//             <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
//           </ContentLoader>
//         </>
//       ) : (
//         catImages.map((image: CatImage) => (
//           <img
//           key={image.id}
//           src={image.url}
//           alt="cat"
//           className="h-40 w-full object-cover"
//           loading="lazy"
//         />
//         ))
//       )}
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { CatApiService } from "../../services/CatApiServices";
import ContentLoader from "react-content-loader";

export const CatApi = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadImages = async () => {
      const images = await CatApiService.getCatApi();
      setCatImages(images);
      setLoading(false);
    };

    loadImages();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {loading ? (
        <>
          <ContentLoader 
            speed={2}
            width={192}
            height={192}
            viewBox="0 0 192 192"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
          </ContentLoader>
          <ContentLoader 
            speed={2}
            width={192}
            height={192}
            viewBox="0 0 192 192"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
          </ContentLoader>
          <ContentLoader 
            speed={2}
            width={192}
            height={192}
            viewBox="0 0 192 192"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
          </ContentLoader>
          <ContentLoader 
            speed={2}
            width={192}
            height={192}
            viewBox="0 0 192 192"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
          </ContentLoader>
          <ContentLoader 
            speed={2}
            width={192}
            height={192}
            viewBox="0 0 192 192"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="8" ry="8" width="192" height="192" />
          </ContentLoader>
        </>
      ) : (
        catImages.map((image: CatImage) => (
          <img
          key={image.id}
          src={image.url}
          alt="cat"
          className="h-40 w-full object-cover"
          loading="lazy"
        />
        ))
      )}
    </div>
  );
};