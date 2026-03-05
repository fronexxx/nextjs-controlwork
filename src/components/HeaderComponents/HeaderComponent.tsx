import '../../css/Header.css';
import SelectGenre from "@/components/HeaderComponents/SelectGenre";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import {getGenres} from "@/services/api.service";
import BackTo1PageBtn from "@/components/HeaderComponents/BackTo1PageBtn";


const HeaderComponent = async () => {

    const genres = await getGenres();

    return (
        <header className="selected-genre">
            <SelectGenre genres={genres}/>
            <BackTo1PageBtn/>
            <SearchComponent/>

            <div className="selected-genre__user">
                <p className="selected-genre__username">Igor Botsii</p>
                <img
                    className="selected-genre__avatar"
                    src="https://www.shutterstock.com/image-illustration/avatar-vector-illustration-gender-neutral-260nw-2587614499.jpg"
                    alt="user-info"
                />
            </div>
        </header>
    );
};

export default HeaderComponent;
