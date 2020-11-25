{const data = [
        {"country": "USA", "tests": 184361379},
        {"country": "India", "tests": 134841307},
        {"country": "Brazil", "tests": 21900000},
        {"country": "Russia", "tests": 73700000},
        {"country": "France", "tests": 20084917},
        {"country": "Spain", "tests": 21917246},
        {"country": "UK", "tests": 41533643},
        {"country": "Italy", "tests": 20726180},
        {"country": "Argentina", "tests": 3712880},
        {"country": "Colombia", "tests": 6135966}
      ];
      
      const svg = d3.select('#barchart')
        .append('svg')
            .attr('width', 600)
            .attr('height', 600);
      
      const margin = {top:20, right: 20, bottom: 100, left: 100};
      const graphWidth = 600 - margin.left -margin.right;
      const graphHeight = 600 - margin.top -margin.bottom;
      
      const graph = svg.append('g')
        .attr('width', graphWidth)
        .attr('height', graphHeight)
        .attr('transform',`translate(${margin.left},${margin.top})`);
      
      const min = d3.min(data, d => d.tests)
      const max = d3.max(data, d => d.tests)
      const extent = d3.extent(data, d => d.tests)
      
      const xAxisGroup = graph.append('g')
        .attr('transform', `translate(0,${graphHeight})`);
      const yAxisGroup = graph.append('g');
      
      const y = d3.scaleLinear()
        .domain([0, max])
        .range([graphHeight, 0])
      
      const x = d3.scaleBand()
        .domain(data.map(item => item.country))
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2)
      
      const rect = graph.selectAll('rect')
        .data(data)
        .attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.tests))
        .attr('x', d => x(d.country));
      
      
      rect.enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.tests))
        .attr('fill', 'Blue')
        .attr('x', d => x(d.country))
        .attr('y', d => y(d.tests));
      
      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y);
      
      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);
      }