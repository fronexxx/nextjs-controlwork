import {FC} from "react";
import '../../css/GenreBadge.css';

interface Props {
    name: string
}

const BadgeComponent: FC<Props> = ({name}) => {
    return (
        <span className={'genre-badge'}>
            {name}
        </span>
    );
};

export default BadgeComponent;
