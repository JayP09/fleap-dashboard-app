import React, { useEffect } from 'react';
import * as d3 from 'd3';
import './LineChart.css';

// Functional component for rendering a line chart
const LineChartSmartPhone = (props) => {
  const { data, width, height, yRangeMin, yRangeMax, idForChart } = props;

  // Use Effect Hook to trigger the drawChart function when data changes
  useEffect(() => {
    drawChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Function to draw the line chart using d3
  function drawChart() {
    // Remove any existing SVG and tooltip elements from the DOM
    d3.select(`#${idForChart}`).select('svg').remove();
    d3.select(`#${idForChart}`).select('.tooltip').remove();

    // Define margin for the chart
    const margin = { top: 25, right: 25, bottom: 25, left: 25 };

    // Create SVG element for chart
    const svg = d3
      .select(`#${idForChart}`)
      .append('svg')
      .attr('class', 'chart')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Generate scales for the x and y axes
    const xScale = d3.scaleLinear().domain([0, 60]).range([0, width]);
    const yScale = d3.scaleTime().range([height, 0]).domain([yRangeMin, yRangeMax]);

    // Define the line to be plotted using the scales and data
    const line = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d[`${idForChart.replace('SmartPhone', '')}`]))
      .curve(d3.curveMonotoneX);

    // Draw gridlines on the chart
    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(-height).tickFormat(''));
    svg.append('g').attr('class', 'grid').call(d3.axisLeft(yScale).tickSize(-width).tickFormat(''));

    // Draw the x and y axes
    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom().scale(xScale).tickSize(5));
    svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(yScale));

    // Draw the line on the chart
    svg.append('path').datum(data).attr('class', 'line').attr('d', line);
  }
  return <div id={`${idForChart}`} />;
};

export default LineChartSmartPhone;
