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

                <div><img width="600px" src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180105%2F449e3d089bd74811983feb0c0ff5161c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623381541&t=6bbdde35a1e35d6167a3d90f0e2fe883' alt='img1' /></div>

            </Alert>

            <Alert id='item12' variant='secondary'>

                <h1>{t('Lifecycle')}</h1>

                <p>
                    {t('This page introduces the concept of lifecycle in a React component.')}
                </p>

                <br>
                
                <div><img width="600px" src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100b0x000000l4117FB55.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623381884&t=642f48606ad2637cd6de7e07ba78f564' alt='img2' /></div>
                    
                </br>

                <Alert id='item13' variant='success'>

                    <h2>{t('Props & State')} </h2>

                    <p>
                        {t('This page introduces the concept of Props & State in a React component.')}
                    </p>
                    
                    <div><img width="600px" src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181227%2Fd4baeee662c242b6bc387ff58038fe2e.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623380557&t=9704dc56144fadde09fc11754b5513ba' alt='img3' /></div>

                </Alert>

            </Alert>

            <Alert id='item21' variant='info'>

                <h1>{t('Example 1')} </h1>

                <p>
                    {t('This is Example 1.')}
                </p>

                <div><img width="600px" src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0429%252F8a3e03e6j00qsac830015c000hs00buc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623382251&t=907ef790b8ed1d0a98b08f2513136e8e' alt='img4' /></div>

            </Alert>

        </div>

    );
}
