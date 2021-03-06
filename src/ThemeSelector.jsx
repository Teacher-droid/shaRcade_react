import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { useTheme } from './theme/useTheme';
import { getFromLS } from './utils/storage';

const ThemedButton = styled.button`
    animation: Fade-in-smooth .5s ease-in-out;
    font-family: Manaspace;
    background-color: var(--sc-bg-color);
    color: var(--sc-txt-color);
    display: flex;
    padding: 1rem;
    font-size: 1rem;
    border-radius: var(--sc-radius);
    margin-top: 0.25rem;
    cursor: pointer;
    opacity: 0.85;
    &:hover {
        background-color: var(--sc-txt-color);
        color: var(--sc-bg-color);
        opacity: 1;
    }
`;

const ToggleDiv = styled.div`
    background-color: var(--sc-txt-color);
    color: var(--sc-bg-color);
    font-family: "Manaspace";
    position: fixed;
    bottom: 5%;
    left: 2.5%;
    opacity: 0.3;
    border-radius: var(--sc-radius);
    padding: .2rem;
    cursor:pointer;
    &:hover {
        opacity: 0.8;
    }
`;

const Container = styled.ul`
    display:flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    bottom: 8%;
    left: 0;
`;

export default (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const ThemeCard = props => {
        return(

                <ThemedButton onClick={ (theme) => themeSwitcher(props.theme) }
                style={{backgroundColor: props.theme}}>
                    {props.theme.name}
                </ThemedButton>

        )
    }

    const [viewMore, setViewMore] = useState(false);
    const toggleDetails = (e) => {

    setViewMore(!viewMore);
  }

    return (
        <div>
            <Container onClick={toggleDetails}>
            <ToggleDiv onClick={toggleDetails}>Retro Themes</ToggleDiv>
            {viewMore &&
                themes.length > 0 &&
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
            }
            </Container>
        </div>
    )
}
