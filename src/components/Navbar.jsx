import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CustomNav from '../customComponents/CustomNav';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const StyledAppbar = styled(AppBar)({
        position: "sticky",
        top:"0",
        color: "black",
        height:40,
        backgroundColor: "#FEF3F3",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow:"none",
        justifyContent: "space-between",
        padding: "10px 60px"
    })


const Wrapper = styled.div`
// border:2px solid red;
flex-direction:${(props) => props.direction || "row"};
width: 25%;
justify-content:space-between;
display:flex;
`


    return (
        <>
            <CustomNav />
        </>
    );
}
export default Navbar;