import React, { useEffect, useState} from 'react';
import { MobileNavButton } from './styles';
import useMedia from '../../../hooks/useMedia';
import NavMobile from './NavMobile';
import Nav from './Nav';

const UserNav = () => {
    
    const mobile = useMedia('(max-width: 40rem)');
    const [active, setActive] = useState(false);
    const {pathname} = window.location;

    //Para fechar o menu com a mudanca na url
    useEffect( () =>{
        setActive(false);
    }, [pathname])

    return (

        <>
            {
                mobile?
                    <>
                        <MobileNavButton active={active} onClick={() => setActive(!active)} />
                        <NavMobile active={active} />
                    </>
                    :
                        <Nav />
            }
        </>
    )
}
export default UserNav;