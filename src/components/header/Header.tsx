import style from './Header.module.scss';
import { Github } from 'lucide-react';

const Header = () => {
    return (
    <>
    <div className={style.header}>
        <h1>_SimpleNote</h1>
        <Github />
    </div>
    </>
    );
}
 
export default Header;