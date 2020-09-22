import React, { lazy, Suspense, useEffect, useState } from 'react';
import API from '../../../API';
import UserHeader from '../../../components/UserHeader';
import Head from '../../../utils/Head';
import Loading from '../../../utils/Loading';
//O Graphs utiliza a biblioteca Victory. Para evitar carregar toda a biblioteca sem necessidade
//Vou fazer um lazy Loading desse component
const Graphs = lazy(() => import('./Graphs'));

const UserStats = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

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
            {data &&
                //Preciso englobar com um Suspense para fazer o lazy loading
                /*
                    O fallback e o que deve ser renderizado enquanto o lazy load nao esta pronto.
                    Poderia passar o Loading, mas ja estou usando em cima. Entao nao vou renderizar nada.
                */
                <Suspense fallback={<></>}>
                    <Graphs data={data} />
                </Suspense>
            }
        </>
    )
}
export default UserStats;