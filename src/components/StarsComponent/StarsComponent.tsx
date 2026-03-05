import {FC} from "react";
import '../../css/StarsRating.css';

interface Props {
    rating: number
}

const StarsComponent: FC<Props> = ({rating}) => {
    const totalStars = 5;
    const filledStars = Math.round(rating / 2);

    const stars = [];
    for (let i = 0; i < totalStars; i++){
        stars.push(
            <span key={i} className={`star ${i < filledStars ? 'filled' : ''}`}>★</span>
        )
    }

    return (
        <div className={'stars'}>
            {stars}
        </div>
    );
};

export default StarsComponent;
