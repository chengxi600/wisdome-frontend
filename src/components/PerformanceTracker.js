import { Typography, Box } from '@mui/material';
import PerformanceBar from './PerformanceBar';
import Divider from "@mui/material/Divider";
import { StyledBox } from '../util';

export default function PerformanceTracker({
  scores = {
      math: 0,
      reading: 0,
      writing: 0,
  },
}) {

  return (
    <StyledBox sx={{ paddingBottom: { xs: '2.5rem', lg: '1.25rem' } }}>
      <Box
        gap='3dvh'
        justifyContent='flex-start'
        alignItems='flex-start'
        flexDirection='column'
        display='flex'
        width='100%'
      >
        <Box
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          gap='0.25rem'
        >
          <img
            srcset='https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftracker.ce381816.webp&w=32&q=75 1x, https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftracker.ce381816.webp&w=64&q=75 2x'
            src='https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftracker.ce381816.webp&w=64&q=75'
            width={32}
            height={32}
            alt='performance icon'
            loading="lazy"
          />
          <Typography
            fontWeight='700'
            fontSize='1.5rem'
            lineHeight='2rem'
            variant='h3'
          >Performance Tracker</Typography>
        </Box>
        <Box width='100%' height='100%'>
          <PerformanceBar 
            subject='Math' 
            minValue={200} 
            maxValue={800} 
            score={scores.math} 
          />
          <Divider sx={{ borderStyle: 'dashed', borderWidth: '1px', width: '100%', height: '.5px', mt: '2rem', mb: '2rem'}} />
          <PerformanceBar 
            subject='Reading' 
            minValue={100} 
            maxValue={400} 
            score={scores.reading} 
          />
          <Divider sx={{ borderStyle: 'dashed', borderWidth: '1px', width: '100%', height: '.5px', mt: '2rem', mb: '2rem'}} />
          <PerformanceBar 
            subject='Writing' 
            minValue={100} 
            maxValue={400} 
            score={scores.writing} 
          />
          <Divider sx={{ border: 'none', borderWidth: '1px', width: '100%', height: '.5px', mt: '2rem', mb: '2rem'}} />
        </Box>
      </Box>
    </StyledBox>
  );
}