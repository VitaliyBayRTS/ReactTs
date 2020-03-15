import React, { FunctionComponent, Props } from 'react';
import s from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import Nots from './Nots/Nots';

interface PropsInterface {
    state: any
    dispatch: any
}


const NavBar: FunctionComponent<PropsInterface> = (props) => {
    return (
        <div className={s.nav}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/profile" className={s.item} activeClassName={s.active} >Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialog" className={s.item} activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music" className={s.item} activeClassName={s.active}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting" className={s.item} activeClassName={s.active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>

            <Nots state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default NavBar;