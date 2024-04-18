"use client"
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaMoneyBillTrendUp, FaRegChartBar } from "react-icons/fa6";
import { GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { GoGoal, GoGear } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { IoHelp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { Tooltip } from '@mui/material';
import NotificationDropdown from '../components/NotificationDropdown';
import ProfileDropdown from '../components/ProfileDropdown';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const mainMenuItems = [
    { label: "dashboard", link: "/dashboard", icon: <MdOutlineSpaceDashboard className='text-xl' /> },
    { label: "expenses", link: "/dashboard/expenses", icon: <FaMoneyBillTrendUp className='text-xl' /> },
    { label: "budget", link: "/dashboard/budget", icon: <GiMoneyStack className='text-xl' /> },
    { label: "income", link: "/dashboard/income", icon: <GiTakeMyMoney className='text-xl' /> },
    { label: "Reports", link: "/dashboard/reports", icon: <FaRegChartBar className='text-xl' /> },
    { label: "goals", link: "/dashboard/goals", icon: <GoGoal className='text-xl' /> },
];

const subMenuItems = [
    { label: "home", link: "/", icon: <FaHome className='text-xl' /> },
    { label: "settings", link: "/dashboard/settings", icon: <GoGear className='text-xl' /> },
    { label: "help & support", link: "/dashboard/help", icon: <IoHelp className='text-xl' /> },
];

export default function DashboardLayout({ children }) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <div>
                        <IconButton
                            className='text-primaryColor'
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex gap-6 items-center'>
                            <h1 style={{ display: open ? "none" : "block" }} className='text-textColor font-semibold md:text-[26px] text-xl'><a href="/">Walletio</a></h1>
                            <form className='md:block hidden'>
                                <div className='relative'>
                                    <IoMdSearch className='text-[#888] text-xl absolute top-[8px] left-[10px]' />
                                    <input type="text" placeholder='Search...' className='border-[#ccc] border pl-9 pr-4 py-[6px] rounded-md text-textColor focus:outline-textColor focus:outline-1 w-[230px]' />
                                </div>
                            </form>
                        </div>
                        <div className='flex items-center ml-auto text-black'>
                            <div className='flex items-center justify-center'>
                                <IconButton size='large'>
                                    <Tooltip title="Theme">
                                        <label className="swap swap-rotate text-textColor">

                                            {/* this hidden checkbox controls the state */}
                                            <input type="checkbox" className="theme-controller" value="synthwave" />
                                            {/* sun icon */}
                                            <svg className="swap-off fill-current md:w-6 w-5 md:h-6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                            {/* moon icon */}
                                            <svg className="swap-on fill-current md:w-6 w-5 md:h-6 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                        </label>
                                    </Tooltip>
                                </IconButton>
                            </div>
                            <div>
                                <NotificationDropdown />
                            </div>
                            <div>
                                <ProfileDropdown />
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton className='text-primaryColor' onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <MenuIcon /> : <MenuIcon />}
                    </IconButton>
                </DrawerHeader>
                <h1 className='text-textColor font-semibold text-[25px] absolute top-3 left-7'><a href="/">Walletio</a></h1>

                <List>
                    {mainMenuItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <Link href={item.link}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    {/* {item.icon} */}
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* render the icons here */}
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText className='capitalize' primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {subMenuItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                            <Link href={item.link}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    {/* {item.icon} */}
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* render the icons here */}
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText className='capitalize' primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}