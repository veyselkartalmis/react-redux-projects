import "./style.css";
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from '../../redux/charactersSlice';
import Masonry from 'react-masonry-css'

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const error = useSelector((state) => state.characters.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch])

    return (
        <div>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    characters.map((character) => (
                        <div key={character.char_id}>
                            <img src={character.img} alt={character.name} className="character" />
                            <div className="char_name">{character.name}</div>
                        </div>
                    ))
                }
            </Masonry>

        </div>
    );
}

export default Home;