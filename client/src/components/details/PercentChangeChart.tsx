import { useContext } from 'react';
import ReactApexChart from 'react-apexcharts';
import { PercentChangeChartProps } from './Type';
import { ThemeContext } from '../../context/ThemeContext';

const PercentChangeChart = ({ percent_change_1h, percent_change_24h, percent_change_7d, percent_change_30d, percent_change_60d, percent_change_90d }: PercentChangeChartProps) => {

    const Theme = useContext(ThemeContext);

    const accent = '#3b82f6';

    const secondary = Theme?.mode === "dark" ? '#3D3D3D' : '#D6D6D6';

    const compliment = Theme?.mode === 'dark' ? '#CCCCCC' : '#3D3D3D';

    const data = [
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        percent_change_30d,
        percent_change_60d,
        percent_change_90d,
    ];

    const chartOptions = {
        chart: {
                id: 'crypto-chart',
                toolbar: {
                show: false,
            },
        },
        grid: {
            borderColor: secondary,
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                    colors: "#fff",
                    width: 10,
                },
            },
        },
        xaxis: {
            categories: ['1h', '24h', '7d', '30d', '60d', '90d'],
            labels: {
                style: {
                    colors: compliment,
                    fontSize: "10px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: compliment,
                    fontSize: "10px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                },
                formatter: function (value: number) {
                    return `${value.toFixed(2)}%`;
                },
            },
        },
        stroke: {
            colors: [accent],
            width: 2,
        },
    };

    const chartData = [
        {
            name: 'Change',
            data: data.map((val) => {
                return val ? val : 0;
            }),
        },
    ];

    return (
        <div className="w-full h-fit px-2 py-4 lg:px-4 bg-primary dark:bg-dark-primary rounded">
            <ReactApexChart 
                options={chartOptions}
                series={chartData} 
                width='100%' 
                height={400} 
                type="line" 
            />
        </div>
    );

};

export default PercentChangeChart;