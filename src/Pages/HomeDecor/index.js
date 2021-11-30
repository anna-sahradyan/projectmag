import React from 'react';
import s from './HomeDecor.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {emphasize, styled} from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import {useHistory} from "react-router-dom";
import AllGoodsList from "../../Containers/AllGoodsList";

const StyledBreadcrumb = styled(Chip)(({theme}) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});
const HomeDecor = () => {
    let history = useHistory();
    const handleClick = (event) => {
        event.preventDefault();
        history.push('/')

    }

    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>

                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <StyledBreadcrumb
                                component="a"
                                href="/"
                                label="Home"
                                icon={<HomeIcon fontSize="small"/>}
                            />
                            <StyledBreadcrumb component="a" href="/" label="Catalog" />
                            <StyledBreadcrumb
                                label="Accessories"
                                deleteIcon={<ExpandMoreIcon/>}
                                onDelete={handleClick}
                            />
                        </Breadcrumbs>
                    </div>
                    <div className={s.box}>
                        <AllGoodsList/>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeDecor;