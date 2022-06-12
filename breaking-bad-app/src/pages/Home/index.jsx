import "./style.css";
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from '../../redux/charactersSlice';
import Masonry from 'react-masonry-css'
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const nextPage = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const error = useSelector((state) => state.characters.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch])

    if (error) {
        return <Error message={error} />
    }

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
                            <div className="char-name">{character.name}</div>
                        </div>
                    ))
                }
            </Masonry>
            <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
                {isLoading && <Loading />}
                {
                    hasNextPage && !isLoading && (
                        <button onClick={() => dispatch(fetchCharacters(nextPage))}>
                            Load More {nextPage}
                        </button>
                    )
                }
                {
                    !hasNextPage && <div>There is nothing to be shown.</div>
                }
            </div>
        </div>
    );
}

export default Home;