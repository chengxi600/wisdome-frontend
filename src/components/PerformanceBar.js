import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const StyledProgressBar = styled(LinearProgress)(() => ({
  height: '1.25rem',
  borderRadius: '0.375rem',
  borderWidth: '1px',
  minWidth: 0,
  width: '100%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'rgb(189 189 189)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'rgb(120 95 187)',
  },
}));

export default function PerformanceBar({
  subject = 'Test',
  minValue = 0,
  maxValue = 100,
  score = 0,
  ...props
}) {

  return (
    <Box
      justifyContent='space-between'
      alignItems='center'
      minWidth='0'
      width='100%'
      display='flex'
      position='relative'
      {...props}
    >
      <Typography width='25%' noWrap>{subject}</Typography>
      <Box width='60%' position='relative'>
        <StyledProgressBar variant='determinate' value={(score / maxValue) * 100} />
        <Typography
          position='absolute'
          left='0'
          top='100%'
          zIndex='20'
          fontSize='0.875rem'
          lineHeight='1.25rem'
          fontWeight='500'
        >{minValue}</Typography>
        <Typography
          position='absolute'
          right='0'
          top='100%'
          zIndex='20'
          fontSize='0.875rem'
          lineHeight='1.25rem'
          fontWeight='500'
        >{maxValue}</Typography>
      </Box>
      <Typography
        marginLeft='0.75rem'
        width='8%'
        textAlign='end'
      >{score}</Typography>
    </Box>
  );
}