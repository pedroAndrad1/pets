import React from 'react';
import { StyledNavMobile } from './styles';
import { NavLink } from 'react-router-dom';
//Tenho que importar os svgs como components para poder mudar seu fill.
//Obs: Ele preica ser importado com um nome iniciado por letra maiuscula. Senao nao funciona.
import { ReactComponent as FeedIcon } from '../../../../assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../../../assets/estatisticas.svg';
import { ReactComponent as AddIcon } from '../../../../assets/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../../../assets/sair.svg';
import { useContext } from 'react';
import { UserContext } from '../../../../UserContext';

const NavMobile = ({ active }) => {

    const { userLogout } = useContext(UserContext);

    return (
        <StyledNavMobile active={active}>
            <NavLink to='/conta' exact>
                <FeedIcon />
                <p>Minhas fotos</p>
            </NavLink>
            <NavLink to='/conta/estatisticas'>
                <StatsIcon />
                <p>Estatísticas</p>
            </NavLink>
            <NavLink to='/conta/postar'>
                <AddIcon />
                <p>Adicionar foto</p>    
            </NavLink>
            <button onClick={userLogout}>
                <LogoutIcon />
                <p>Logout</p>             
            </button>
        </StyledNavMobile>
    )
}
export default NavMobile;