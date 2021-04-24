import { Alert, Container } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    selectTheme,
} from '../theme/themeSlice';
import { Nav, ListGroup, Col } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import "./Home.css";
import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from "react-router-dom";

export function Right3() {


    const { t, i18n } = useTranslation();

    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    let history = useHistory();

    useEffect(() => {
        let hash = window.location.hash;
        let href = window.location.href;
        window.location.href = href.replaceAll(hash,'') + "#item21";
    });


    return (
        <ListGroup>
            <ListGroup.Item className='border-0 py-0'><Nav.Link className="text-secondary" href="#item21">{t('Example 1')}</Nav.Link></ListGroup.Item>
        </ListGroup>
    );

}