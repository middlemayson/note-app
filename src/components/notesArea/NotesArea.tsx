import style from './NotesArea.module.scss';
import SingleNote from './singleNote/SingleNote';

const NotesArea = () => {
    return (
        <div className={style.notesArea}>
            <SingleNote />
        </div>
    );
}
 
export default NotesArea;