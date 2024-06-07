import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DonutChart = ({ data, labels }) => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');

            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: {
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = '';
                                    if (labels && labels[context.dataIndex]) {
                                        label = labels[context.dataIndex] + ': ';
                                    }
                                    label += Math.round(context.parsed * 1) + '%';
                                    return label;
                                }
                            }
                        }
                    },
                    // Customize the chart border color
                    elements: {
                        arc: {
                            borderWidth: 2,
                            borderColor: '##0D1014' // Change the border color to black
                        }
                    }
                }
            });
        }

        return () => {
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }
        };
    }, [data, labels]); // Include labels in dependencies array

    return (
        <div>
            <canvas ref={chartContainer} />
        </div>
    );
}

export default DonutChart;
