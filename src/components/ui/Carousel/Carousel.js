import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import './Carousel.scss';

export default function CarouselRatio({ arrAuthors, onClick, active }) {
    return (
        <Box
            className='box'
            sx={{
                display: 'flex',
                gap: 2,
                py: 1,
                overflow: 'auto',
                width: 874,
                scrollSnapType: 'x mandatory',
                '& > *': {
                    scrollSnapAlign: 'center',
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {arrAuthors.map((item) =>
                item.ID === active ? (
                    <Card
                        // style='border: none'

                        row
                        key={item.ID}
                        variant='outlined'
                        sx={{
                            gap: 1,
                            '--Card-padding': (theme) => theme.spacing(1),
                            border: 'none',
                            background: '#FF592C',
                            color: 'white',
                        }}
                    >
                        <Box
                            onClick={() => onClick(item)}
                            sx={{
                                whiteSpace: 'nowrap',
                                border: '0',
                                cursor: 'pointer',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'md',
                                }}
                            >
                                {item.display_name}
                            </Typography>
                        </Box>
                    </Card>
                ) : (
                    <Card
                        // style='border: none'

                        row
                        key={item.ID}
                        variant='outlined'
                        sx={{
                            gap: 1,
                            '--Card-padding': (theme) => theme.spacing(1),
                            border: 'none',
                        }}
                    >
                        <Box
                            onClick={() => onClick(item)}
                            sx={{
                                whiteSpace: 'nowrap',
                                border: '0',
                                cursor: 'pointer',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'md',
                                }}
                            >
                                {item.display_name}
                            </Typography>
                        </Box>
                    </Card>
                )
            )}
        </Box>
    );
}
