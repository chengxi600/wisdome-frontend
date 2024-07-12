import Box from '@mui/material/Box';
import { StyledBox } from '../util';
import { Typography } from '@mui/material';
import cdf from '../util';
import DistributionAreaChart from './DistributionAreaChart';

const data = [
  {
    x: 400,
    y: 0,
  },
  {
    x: 600,
    y: 1,
  },
  {
    x: 700,
    y: 3,
  },
  {
    x: 800,
    y: 10,
  },
  {
    x: 1000,
    y: 16,
  },
  {
    x: 1100,
    y: 17,
  },
  {
    x: 1200,
    y: 14,
  },
  {
    x: 1400,
    y: 7,
  },
  {
    x: 1500,
    y: 5,
  },
  {
    x: 1600,
    y: 2,
  },
];

export default function ScoreDistribution({
  totalScore = 0
}) {

  return (
    <StyledBox>
      <Box width='100%'>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          gap='0.25rem'
        >
          <img
            srcset='https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscore.581ea29f.webp&w=32&q=75 1x, https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscore.581ea29f.webp&w=64&q=75 2x'
            src='https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscore.581ea29f.webp&w=64&q=75'
            width={32}
            height={32}
            alt='score distribution icon'
            loading="lazy"
          />
          <Typography
            fontWeight='700'
            fontSize='1.5rem'
            lineHeight='2rem'
            variant='h3'
          >Score Distribution</Typography>
        </Box>

        {/* calculates the SAT percentile given total score assuming SAT follows a normal curve, with an approximated 1000 mean and 200 st dev */}
        <Typography
          ml='1.25rem'
          mb='2.5rem'
          fontSize='1.125rem'
          lineHeight='1.75rem'
          fontWeight='700'
        >
          Higher than <span
            style={{ color: 'rgb(153,86,251)' }}>{(cdf(totalScore, 1000, 200) * 100).toFixed(1)}%</span> of students
        </Typography>
        <Box width='100%'>
          <DistributionAreaChart
            data={data}
            color="#785FBB"
            totalScore={totalScore}
            xTicks={[400, 600, 800, 1000, 1200, 1400, 1600]}
            yTicks={[0, 5, 10, 15, 20]}
            yLabel='%'
            yDomain={[400, 'dataMax']}
          />
        </Box>
      </Box>
    </StyledBox>
  );
}