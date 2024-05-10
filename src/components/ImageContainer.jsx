import { imagesData } from "../utils/Constants";
import {ImageCard} from "./ImageCard"


export function ImageContainer() {
  return (
    <div className="imageContainer">
      {imagesData.map((image, index) => (
        <ImageCard imageUrl={image.imageLink} index={index}/>
      ))}
    </div>
  );
};
