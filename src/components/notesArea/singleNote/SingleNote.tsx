import style from '../NotesArea.module.scss';

const SingleNote = () => {
    return (
        <>
        <div className={style.singleNote}>
            <h2>Lorem ipsum dolor sit amet</h2>
        </div>
        <div className={style.singleNote}>
            <h2>Vestibulum et lectus</h2>
        </div>
        <div className={style.singleNote}>
            <h2>Nullam ullamcorper rhoncus rhoncus</h2>
        </div>
        <div className={style.singleNote}>
            <h2>Amet</h2>
        </div>
        <div className={style.singleNote}>
            <h2>Nullam ullamcorper rhoncus rhoncus</h2>
        </div>
        <div className={style.singleNote}>
            <h2>Title</h2>
        </div>
        <div className={style.singleNote}>
            <h2>Nullam ullamcorper rhoncus rhoncus</h2>
        </div>
        <div className={style.singleNote}>
            <h2>Title</h2>
        </div>
        </>
    );
}
 
export default SingleNote;