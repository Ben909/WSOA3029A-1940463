const Mydata = [
    { region: 'Eastern Cape', count: 86400 },
    { region: 'Free State', count: 35537 },
    { region: 'Gauteng', count: 199352 },
    { region: 'KwaZulu-Natal', count: 111831 },
    { region: 'Limpopo', count: 15326 },
    { region: 'Mpumalanga', count: 27040 },
    { region: 'North West', count: 28385 },
    { region: 'Western Cape', count: 105347 },
    { region: 'Northern Cape', count: 16356 },
  ];
  

  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  const height = 450;
  const width = 900;

  const svg = d3.select('#bar-3Dcontainer')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);
  
  const x = d3.scaleBand()
    .domain(d3.range(Mydata.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)
  
  const y = d3.scaleLinear()
    .domain([0, 220000])
    .range([height - margin.bottom, margin.top])
  
  svg
    .append("g")
    .attr("fill", 'green')
    .selectAll("rect")
    .data(Mydata.sort((a, b) => d3.descending(a.score, b.count)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.count))
      .attr('title', (d) => d.count)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.count))
      .attr("width", x.bandwidth());
  
  function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, Mydata.format))
      .attr("font-size", '20px')
  }
  
  function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => Mydata[i].region))
      .attr("font-size", '15px')
  }
  
  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.node();