import { Alert, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    selectTheme,
} from '../theme/themeSlice';
import React, { useState, useEffect } from 'react';
import axiosInstance from "./axiosInstance";
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';

export function Center() {

    const { t, i18n } = useTranslation();
    const [ info, setInfo ] = useState<string>('--loading--1--');
    const [ info2, setInfo2 ] = useState<string>('--loading--2--');

    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        axiosInstance.get('/get?name=instance-get')
            .then((response) => {
                console.log(response.status);
                setInfo(response.data);
            }).catch((error) => {
                console.log(error.message);
                setInfo(error.message);
            });

        axiosInstance.post('/post', {
            name: 'instance-post'
        }).then((response) => {
            console.log(response.status);
            setInfo2(response.data);
        }).catch((error) => {
            console.log(error.message);
            setInfo2(error.message);
        });
    });

    return (
        <div className="home-center">

            <Alert id='item11' variant='primary'>

                <h4>{t('Component')}</h4>

                <p>
                    {t('Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.')}
                </p>

                <div className="home-img-center"><img width="500px" src={img1} alt='img1' /></div>

                <br/>
                <div>info：{info}</div>
                <br/>
                <div>info2：{info2}</div>
                <br/>

            </Alert>

            <Alert id='item12' variant='secondary'>

                <h4>{t('Lifecycle')}</h4>

                <p>
                    {t('This page introduces the concept of lifecycle in a React component.')}
                </p>

                <br/>
                
                <div className="home-img-center"><img width="600px" src={img2} alt='img2' /></div>

                <Alert id='item13' variant='success'>

                    <h4>{t('Props & State')} </h4>

                    <p>
                        {t('This page introduces the concept of Props & State in a React component.')}
                    </p>
                    
                    <div className="home-img-center"><img width="600px" src={img3} alt='img3' /></div>

                </Alert>

            </Alert>

            <Alert id='item21' variant='info'>

                <h4>{t('Example 1')} </h4>

                <p>
                    {t('This is Example 1.')}
                </p>

                <div className="home-img-center"><img width="600px" src={img4} alt='img4' /></div>

                <br/>
                <br/>
                <br/>

            </Alert>

        </div>

    );
}
