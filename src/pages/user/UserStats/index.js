import React, { useEffect, useState } from 'react';
import API from '../../../API';
import UserHeader from '../../../components/UserHeader';
import Head from '../../../utils/Head';
import Loading from '../../../utils/Loading';
import Graphs from './Graphs';

const UserStats = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    //const [acessos, setAcessos] = useState(null);

    useEffect(() => {

        const fetch = async () => {
            await API.STATS_GET()
                .then(res => {
                   setData(res);
                })
                .catch(e => setError(e.message))
                .finally(() => setLoading(false));
        }

        fetch();

    }, [])


    return (
        <>
            <Head title='Estatísticas' />
            <UserHeader />
            {loading && <Loading />}
            {error && error}
            {data && <Graphs data={data} />}
        </>
    )
}
export default UserStats;