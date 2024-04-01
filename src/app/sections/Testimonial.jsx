"use client"
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BodyContainer from '../components/BodyContainer';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';
import { Rating } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Testimonial() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='lg:mt-[130px] md:mt-[80px] mt-[50px] lg:mb-20 md:mb-12 mb-10'>
            <BodyContainer>
                <SectionTitle title="What Our Users Say" subtitle="Discover How Walletio Makes Their Lives Easier" />
                <Box
                    className="lg:flex-row flex-col items-center lg:flex hidden"
                    sx={{
                        flexGrow: 1,
                        bgcolor: 'background.paper',
                    }}
                >
                    <Tabs
                        className='min-w-[270px] font-montserrat'
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs"
                        sx={{ borderRight: 1, borderColor: 'divider', textAlign: "left" }}
                    >
                        <Tab className='font-montserrat' label="Entrepreneur" {...a11yProps(0)} />
                        <Tab className='font-montserrat' label="Freelancer" {...a11yProps(1)} />
                        <Tab className='font-montserrat' label="Content Creator" {...a11yProps(2)} />
                        <Tab className='font-montserrat' label="Traveler" {...a11yProps(3)} />
                    </Tabs>
                    <TabPanel value={value} index={0} className="pl-8">
                        <div className='flex gap-4'>
                            <div className='min-w-[200px]'>
                                <Image className='rounded-md' width={200} height={300} src="https://i.postimg.cc/wvzHJ14P/2148859448-35.webp" alt='image'></Image>
                            </div>
                            <div>
                                <h4 className='font-semibold text-2xl mb-2'>Maruf Ahmed</h4>
                                <p className='italic xl:text-lg text-base mb-4'>As a busy entrepreneur, juggling multiple tasks is the norm. Thankfully, Walletio has become my go-to solution for managing expenses effortlessly. This app simplifies the entire process, allowing me to track every transaction with ease.</p>
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} className="pl-8">
                        <div className='flex gap-4'>
                            <div className='min-w-[200px]'>
                                <Image className='rounded-md' width={200} height={300} src="https://i.postimg.cc/5NyJwdpx/14230-35.jpg" alt='image'></Image>
                            </div>
                            <div>
                                <h4 className='font-semibold text-2xl mb-2'>Sharif Ahmed</h4>
                                <p className='italic xl:text-lg text-base mb-4'>Its intuitive interface and seamless integration with my accounts make staying on top of finances a breeze. With Walletio, I can confidently make informed decisions about my business financial health, all while saving valuable time.</p>
                                <Rating name="read-only" value={4.5} readOnly />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={2} className="pl-8">
                        <div className='flex gap-4'>
                            <div className='min-w-[200px]'>
                                <Image className='rounded-md' width={200} height={300} src="https://i.postimg.cc/wvzHJ14P/2148859448-35.webp" alt='image'></Image>
                            </div>
                            <div>
                                <h4 className='font-semibold text-2xl mb-2'>Rakib Ahmed</h4>
                                <p className='italic xl:text-lg text-base mb-4'>As a busy entrepreneur, juggling multiple tasks is the norm. Thankfully, Walletio has become my go-to solution for managing expenses effortlessly. This app simplifies the entire process, allowing me to track every transaction with ease.</p>
                                <Rating name="read-only" value={3} readOnly />
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3} className="pl-8">
                        <div className='flex gap-4'>
                            <div className='min-w-[200px]'>
                                <Image className='rounded-md' width={200} height={300} src="https://i.postimg.cc/5NyJwdpx/14230-35.jpg" alt='image'></Image>
                            </div>
                            <div>
                                <h4 className='font-semibold text-2xl mb-2'>Arif Ahmed</h4>
                                <p className='italic xl:text-lg text-base mb-4'>Its intuitive interface and seamless integration with my accounts make staying on top of finances a breeze. With Walletio, I can confidently make informed decisions about my business financial health, all while saving valuable time.</p>
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                        </div>
                    </TabPanel>
                </Box>
                <div className='flex sm:flex-row flex-col justify-center gap-4 lg:hidden sm:text-left text-center'>
                    <div className='sm:min-w-[200px] max-w-[150px] mx-auto'>
                        <Image className='rounded-md sm:mx-0 mx-auto' width={200} height={300} src="https://i.postimg.cc/wvzHJ14P/2148859448-35.webp" alt='image'></Image>
                    </div>
                    <div>
                        <h4 className='font-semibold text-2xl mb-2'>Maruf Ahmed</h4>
                        <p className='italic xl:text-lg text-base mb-4'>As a busy entrepreneur, juggling multiple tasks is the norm. Thankfully, Walletio has become my go-to solution for managing expenses effortlessly. This app simplifies the entire process, allowing me to track every transaction with ease.</p>
                        <Rating name="read-only" value={4} readOnly />
                    </div>
                </div>
            </BodyContainer>
        </div>
    );
}
