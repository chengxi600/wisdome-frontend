import * as React from 'react';
import SideNav from './components/SideNav';
import PerformanceTracker from './components/PerformanceTracker';
import ScoreDistribution from './components/ScoreDistribution';
import SchoolPredictor from './components/SchoolPredictor';
import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';

export default function Dashboard() {

    //SAT scores for each subject. Updating these will update PerformanceTracker and ScoreDistribution
    const [scores, ] = React.useState({
        math: 300,
        reading: 100,
        writing: 100
    })

    let totalScore = useMemo(() => scores.math + scores.reading + scores.writing, [scores])

    return (
        <Box
            overflow='hidden'
            justifyContent='space-between'
            alignItems='stretch'
            width='100%'
            minHeight='100dvh'
            height='100dvh'
            display='flex'
        >
            {/* ----- Left Navigation Bar ----- */}
            <Box
                flexDirection='column'
                minWidth='76px'
                minHeight='100vh'
                height='100%'
                display='flex'
            >
                <SideNav anchor='left' />
            </Box>

            {/* ----- Body Content ----- */}
            <Box
                overflow='auto'
                justifyContent='space-between'
                alignItems='stretch'
                width='100%'
                minHeight='100vh'
                maxHeight='100vh'
                height='fit-content'
                display='flex'
            >
                <Box
                    pb='.25rem'
                    padding='2rem'
                    gap='2.5rem'
                    flexDirection='column'
                    minWidth='660px'
                    width='100%'
                    height='100%'
                    display='flex'
                >
                    {/* ----- Body Title ----- */}
                    <Box
                        padding='1.25rem'
                        overflow='hidden'
                        justifyContent='center'
                        alignItems='center'
                        display='flex'
                        position='relative'
                        backgroundColor='#564487'
                        borderRadius='20px'
                    >
                        <Typography color='white' variant='h2'>SCORE: {totalScore}</Typography>
                    </Box>

                    {/* ----- Performance Tracker and Score Distribution ----- */}
                    <Box
                        borderRadius='20px'
                        gap='2.5rem'
                        justifyContent='space-between'
                        alignItems='stretch'
                        display='flex'
                        sx={{ flexDirection: { xs: 'column', lg: 'row' } }}
                    >
                        <PerformanceTracker scores={scores}></PerformanceTracker>
                        <ScoreDistribution totalScore={totalScore}></ScoreDistribution>
                    </Box>

                    {/* ----- School Predictor ----- */}
                    <SchoolPredictor />
                </Box>
            </Box>

            {/* ----- Right Side Bar ----- */}
            <Box
                overflow='hidden'
                maxWidth='500px'
                minWidth='260px'
                width='22%'
                height='99dvh'
                justifyContent='center'
                alignItems='center'
                display='flex'
                sx={{backgroundColor: "#f6f8f8"}}
            >
                <Typography
                    fontWeight='700'
                    fontSize='1.5rem'
                    lineHeight='2rem'
                    variant='h3'
                    mb='10rem'
                >SideBar</Typography>
            </Box>
        </Box>
    );
}
