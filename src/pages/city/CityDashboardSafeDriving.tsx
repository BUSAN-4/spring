import {
  Box,
  Typography,
  Tabs,
  Tab,
  CardContent,
} from '@mui/material';
import CityLayout from '../../layouts/CityLayout';
import Card from '../../components/common/Card';
import PowerBIEmbedView from '../../components/common/powerbi/PowerBIEmbedView';
import { useState } from 'react';

// Power BI 공개 임베드 URL (웹에 게시)
const POWER_BI_REPORT_URL = "https://app.powerbi.com/view?r=eyJrIjoiYzcxMzcwNzktZmFjNy00NWU0LWJiMzgtYTg0YjYxNGViZWI5IiwidCI6Ijk1OWQ4N2E2LTU3YTMtNGMyNi05M2VkLTVmYzIwYWY2MzVlZCJ9";

export default function CityDashboardSafeDriving() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const summaryData = {
    avgSafetyScore: 87.5,
    registeredVehicles: 12811,
    totalMileage: '2.4M km',
    dangerousDrivingIncidents: 1247,
  };

  return (
    <CityLayout>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        안전운전 관리
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          mb: 4,
        }}
      >
        <Box>
          <Card title="평균 안전점수">
            <Typography variant="h3" color="primary" sx={{ fontWeight: 600 }}>
              {summaryData.avgSafetyScore}점
            </Typography>
            <Typography variant="body2" color="text.secondary">
              전월 대비 +2.3점
            </Typography>
          </Card>
        </Box>

        <Box>
          <Card title="등록 차량 수">
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              {summaryData.registeredVehicles.toLocaleString()}대
            </Typography>
            <Typography variant="body2" color="text.secondary">
              활성 차량 기준
            </Typography>
          </Card>
        </Box>

        <Box>
          <Card title="이번 달 총 주행거리">
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              {summaryData.totalMileage}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              11월 누적
            </Typography>
          </Card>
        </Box>

        <Box>
          <Card title="위험운전 감지">
            <Typography variant="h3" sx={{ fontWeight: 600, color: 'error.main' }}>
              {summaryData.dangerousDrivingIncidents.toLocaleString()}건
            </Typography>
            <Typography variant="body2" color="text.secondary">
              전월 대비 -15%
            </Typography>
          </Card>
        </Box>
      </Box>

      <Card title="안전운전 현황 대시보드">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="PowerBI dashboard tabs">
            <Tab label="월별 추이" />
            <Tab label="차량 유형별" />
            <Tab label="성별/연령별" />
            <Tab label="지역별 분포" />
          </Tabs>
        </Box>
        <CardContent>
          <PowerBIEmbedView 
            reportUrl={POWER_BI_REPORT_URL} 
            height="600px" 
          />
        </CardContent>
      </Card>
    </CityLayout>
  );
}


