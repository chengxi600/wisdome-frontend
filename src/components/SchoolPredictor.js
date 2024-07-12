import { Box, Typography } from "@mui/material"
import { StyledBox } from "../util"

export default function SchoolPredictor() {

  return (
    <StyledBox>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='flex-start'
        gap='0.25rem'
        mb='10rem'
      >
        <img
          srcset='https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fschool.7944eb4d.webp&w=32&q=75 1x, https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fschool.7944eb4d.webp&w=64&q=75 2x'
          src='https://brainbox.wisdome.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fschool.7944eb4d.webp&w=64&q=75'
          width={32}
          height={32}
          alt='school icon'
          loading="lazy"
        />
        <Typography
          fontWeight='700'
          fontSize='1.5rem'
          lineHeight='2rem'
          variant='h3'
        >School Opportunity Predictor</Typography>
      </Box>
    </StyledBox>
  )
}