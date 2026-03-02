import '../../css/Header.css';
import {getGenres} from "@/services/api.service";
import {IGenres} from "@/models/IGenres";
import SelectGenre from "@/components/HeaderComponents/SelectGenre";
import '../../css/Header.css';


const HeaderComponent = async () => {
    const genres: IGenres[] = await getGenres();

    return (
        <header>
            <SelectGenre genres={genres}/>
        </header>
    );
};

export default HeaderComponent;
