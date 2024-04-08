import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useI18next } from 'gatsby-plugin-react-i18next';

ChartJS.register(ArcElement);

const PieChart = () => {
  const { language } = useI18next();

  const data = {
    en: {
      datasets: [
        {
          data: [1, 1, 1, 1, 1],
          backgroundColor: [
            '#059669',
            '#FBBF24',
            '#FF5733',
            '#B91C1C',
            '#F3F4F6',
          ],
          rotation: 210,
          circumference: 300,
          cutout: '80%', // Adjusted cutout size for better visibility on smaller screens
          borderRadius: Number.MAX_VALUE
        },
      ],
    },
    jp: {
      datasets: [
        {
          data: [1, 1, 1, 1, 1],
          backgroundColor: [
            '#059669',
            '#FBBF24',
            '#FF5733',
            '#B91C1C',
            '#F3F4F6',
          ],
          rotation: 210,
          circumference: 300,
          cutout: '80%', // Adjusted cutout size for better visibility on smaller screens
          borderRadius: Number.MAX_VALUE
        },
      ],
    }
  };

  return (
    <div className='chart-container'>
      <Doughnut
        data={data[language]}
        options={{
          maintainAspectRatio: true, // Letting chart maintain aspect ratio
          plugins: {
            legend: {
              display: true,
              position: 'bottom', // Adjusted legend position for better visibility
            },
          },
          responsive: true // Ensuring responsiveness
        }}
      />
    </div>
  );
};

export default PieChart;
