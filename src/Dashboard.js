import * as React from 'react';
import SideNav from './components/SideNav';
import PerformanceTracker from './components/PerformanceTracker';
import ScoreDistribution from './components/ScoreDistribution';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


export default function Dashboard() {
    const [scores, setScores] = React.useState({
        math: 300,
        reading: 100,
        writing: 100
    })
  return (
    <Box sx={{ display: 'flex', padding: '100px'}}>
        <CssBaseline />
        {/* <SideNav></SideNav> */}
        <PerformanceTracker scores={scores}></PerformanceTracker>
        <ScoreDistribution scores={scores}></ScoreDistribution>
    </Box>
  );
}
