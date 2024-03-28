import NotesArea from '../notesArea/NotesArea';
import AutosaveStatus from '../../scripts/AutosaveStatusAnimation';
import useHeaderAreaLimit from '../../hooks/HeaderAreaLimit';
import useAutoResizeTextarea from '../../hooks/AutoResizeTextArea';

import style from './TextEditor.module.scss'
import AddNewNote from '../addNewNote/AddNewNote';

const TextEditor = () => {
    useHeaderAreaLimit('singleLineTextarea')
    useAutoResizeTextarea('autoHeightTextarea');
    return (
        <>
        <div className={style.card}>
            <textarea id="singleLineTextarea" maxLength={34} cols={1} rows={1} defaultValue={'Enter title'}></textarea>
            <textarea id="autoHeightTextarea" cols={30} defaultValue={'Please type text here...'}></textarea>
            <AutosaveStatus />
        </div>
        <AddNewNote />
        <NotesArea />
        </>
    );
}
 
export default TextEditor;