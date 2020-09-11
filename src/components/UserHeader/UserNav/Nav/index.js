import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../../UserContext';
import { StyledNav } from './styles';
//Tenho que importar os svgs como components para poder mudar seu fill.
//Obs: Ele preica ser importado com um nome iniciado por letra maiuscula. Senao nao funciona.
import { ReactComponent as FeedIcon } from '../../../../assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../../../assets/estatisticas.svg';
import { ReactComponent as AddIcon } from '../../../../assets/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../../../assets/sair.svg';
const Nav = () => {

    const { userLogout } = useContext(UserContext);

    return (
        <StyledNav>
            <NavLink to='/conta' exact>
                <FeedIcon />
            </NavLink>
            <NavLink to='/conta/estatisticas'>
                <StatsIcon />
            </NavLink>
            <NavLink to='/conta/postar'>
                <AddIcon />
            </NavLink>
            <button onClick={userLogout}>
                <LogoutIcon />
            </button>
        </StyledNav>
    )

}
export default Nav;