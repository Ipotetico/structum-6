const chart = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    xaxis: {
      toolbar: {
        show: false,
      },
      type: 'category',
      categories: ['0 mies.', '6 mies.', '12 mies.', '18 mies.', '24 mies.'],
      labels: {
        show: true,
        rotate: 0,
        rotateAlways: false,
        hideOverlappingLabels: false,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 100,
        style: {
          colors: ['white', 'white', 'white', 'white', 'white'],
          fontSize: '11px',
          fontFamily: 'Nunito, Arial, sans-serif',
          fontWeight: 200,
          cssClass: 'apexcharts-xaxis-label',
        },

        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      toolbar: {
        show: false,
      },
      min: -0.4,
      max: 0.0,

      crosshairs: {
        toolbar: {
          show: false,
        },
        stroke: {
          color: 'rgba(255,255,255,0.2)',
          width: 0.5,
        },
      },

      labels: {
        toolbar: {
          show: false,
        },
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: '100%',
        style: {
          colors: ['white'],
          fontSize: '11px',
          fontFamily: 'Nunito, Arial, sans-serif',
          fontWeight: 200,
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
      },
    },
    dataLabels: {
      toolbar: {
        show: false,
      },
      style: { fontFamily: 'Nunito, Arial, sans-serif', padding: 4 },
      enabled: true,
    },
  },

  series: [
    {
      name: 'placebo',
      data: [0, -0.22 / 2, -0.22, -0.26, -0.31],
    },
    {
      color: `#e42627`,
      name: 'structum',
      data: [0, -0.05, -0.1, -0.11, -0.07],
    },
  ],
};

export default chart;
