import { Alert, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    selectTheme,
} from '../theme/themeSlice';
import React, { useState, useEffect } from 'react';
import axiosInstance from "./axiosInstance";

export function Center() {

    const { t, i18n } = useTranslation();
    const { info, setInfo } = useState('--loading--1--');
    const { info2, setInfo2 } = useState('--loading--2--');

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

                <h1>{t('Component')}</h1>

                <p>
                    {t('Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.')}
                </p>

                <br></br>
                <div>info：{info}</div>
                <br></br>
                <div>info2：{info2}</div>
                <br></br>

                <img src='' alt='img'/>

            </Alert>

            <Alert id='item12' variant='secondary'>

                <h1>{t('Lifecycle')}</h1>

                <p>
                    {t('This page introduces the concept of lifecycle in a React component.')}
                </p>

                <br></br>

                <Alert id='item13' variant='success'>

                    <h2>{t('Props & State')} </h2>

                    <p>
                        {t('This page introduces the concept of Props & State in a React component.')}
                    </p>

                </Alert>

                <img src='' alt='img2'/>

            </Alert>

            <Alert id='item21' variant='info'>

                <h1>{t('Example 1')} </h1>

                <p>
                    {t('This is Example 1.')}
                </p>

                <img src='' alt='img3'/>

            </Alert>

        </div>

    );
}
