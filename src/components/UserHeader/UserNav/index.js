import React, { useState, useContext } from 'react';
import { StyledUserNav } from './styles';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
//Tenho que importar os svgs como components para poder mudar seu fill.
//Obs: Ele preica ser importado com um nome iniciado por letra maiuscula. Senao nao funciona.
import { ReactComponent as FeedIcon } from '../../../assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddIcon } from '../../../assets/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/sair.svg';

const UserNav = () => {
    const [mobile, setMobile] = useState(null);
    const {userLogout} = useContext(UserContext);
    
    return (
        <StyledUserNav>
            <NavLink to='/conta' exact>
                <FeedIcon />
                {mobile && 'Minhas fotos'}
            </NavLink>
            <NavLink to='/conta/estatisticas'>
                <StatsIcon />
                {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink to='/conta/postar'>
                <AddIcon />
                {mobile && 'Adicionar foto'}
            </NavLink>
            <button onClick={userLogout}>
                <LogoutIcon />
                {mobile && 'Logout'}
            </button>

        </StyledUserNav>
    )
}
export default UserNav;