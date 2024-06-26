import React, { useState, useEffect } from 'react';
import PollComponent from '../PollComponent';

export const Index = () => {
    const [pregunta, setPregunta] = useState(null);
    const [info, setInfo] = useState({
        salaId: '6617f798c3eb3b3b51f8df76',
        preguntaId: '66244bb203d88da06a04ae8b'
    });

    console.log(setInfo);
    const URL_API = process.env.NODE_ENV === 'production' ?
        `${process.env.REACT_APP_PROD_BACKEND_URL}/index/sala/${info.salaId}/pregunta/${info.preguntaId}` :
        `http://localhost:8080/index/sala/${info.salaId}/pregunta/${info.preguntaId}`;
    
    console.log('URL_API',URL_API);


    useEffect(() => {
        fetch(`${URL_API}`)
            .then(response => response.json())
            .then(data => setPregunta(data));
    }, [URL_API, info.salaId, info.preguntaId]);

    if (!pregunta) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="App">
            <PollComponent pollData={pregunta} info={info} />
        </div>
    );
}
