import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import PerformanceBar from './PerformanceBar';
import Divider from "@mui/material/Divider";

const StyledBox = styled('Box')(() => ({
  display: 'flex',
  flex: '1 1 0%',
  padding: '1.25rem',
  height: '100%',
  width: '100%',
  borderRadius: '20px',
  backgroundColor: 'rgb(246 248 248)',
  boxShadow: '0px 0px 4px 0px #856fc2',
}));

export default function PerformanceTracker({
  scores = {
      math: 0,
      reading: 0,
      writing: 0,
  },
}) {

  return (
    <StyledBox>
      <Box
        gap='3dvh'
        justifyContent='flex-start'
        alignItems='flex-start'
        flexDirection='column'
        display='flex'
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
            mb='2rem'
          />
          <Divider sx={{ borderStyle: 'dashed', borderWidth: '1px', width: '100%' }} />
          <PerformanceBar 
            subject='Reading' 
            minValue={100} 
            maxValue={400} 
            score={scores.reading} 
            mt='2rem' 
            mb='2rem'
          />
          <Divider sx={{ borderStyle: 'dashed', borderWidth: '1px', width: '100%' }} />
          <PerformanceBar 
            subject='Writing' 
            minValue={100} 
            maxValue={400} 
            score={scores.writing} 
            mt='2rem' 
            mb='2rem'
          />
        </Box>
      </Box>
    </StyledBox>
  );
}