import ReactApexChart from 'react-apexcharts';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { ArrowCircleUpRounded } from '@mui/icons-material';

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#FCFCFC"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142D">Total Revenue</Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142D">$236,535</Typography>
        <Stack>
        <ArrowCircleUpRounded
          sx={{ fontSize: 25, color: '#475BE8' }}
        />
          <Stack>
          <Typography fontSize={15} color="#475BE8">0.8%</Typography>
          <Typography fontSize={12} color="#808191">Than last Month</Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default TotalRevenue