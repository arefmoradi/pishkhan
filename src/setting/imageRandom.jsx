import ahwaz1 from "../assets/images/ahwaz1.jpg"
import ahwaz2 from "../assets/images/ahwaz2.jpg"
import ahwaz3 from "../assets/images/ahwaz3.jpg"

export const RandomImage = () => {
    const pictureArray = [{ahwaz1}, {ahwaz2}, {ahwaz3}];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];
    

        document.body.style.backgroundImage = selectedPicture
    
}

