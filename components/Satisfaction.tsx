import ReactStars from "react-rating-stars-component";
import Styles from "../styles/Satisfaction.module.scss"
const ratingChanged = (newRating) => {
    console.log(newRating);
    var p = document.querySelector("#merci")
    p.style.display = "block"
    console.log("p")
  };

export default function Satisfaction() {
    return (
        <div className={Styles.satisfaction}>
            <h2 className={Styles.satisfaction__title}>Enquête de satisfaction</h2>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
            <p id="merci">Merci d'avoir donné votre avis</p>
        </div>
    )
}