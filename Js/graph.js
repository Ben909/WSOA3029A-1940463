{const Mydata = [
    { region: 'Eastern Cape', number: 86400 },
    { region: 'Free State', number: 35537 },
    { region: 'Gauteng', number: 199352 },
    { region: 'KwaZulu-Natal', number: 111831 },
    { region: 'Limpopo', number: 15326 },
    { region: 'Mpumalanga', number: 27040 },
    { region: 'North West', number: 28385 },
    { region: 'Western Cape', number: 105347 },
    { region: 'Northern Cape', number: 16356 },
  ];
  

  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  const height = 500;
  const width = 1000;

  const svg = d3.select('#bar-3Dcontainer')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr('viewBox', [0, 0, width, height]);
  
  const x = d3.scaleBand()
    .domain(d3.range(Mydata.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)
  
  const y = d3.scaleLinear()
    .domain([0, 220000])
    .range([height - margin.bottom, margin.top])
  
  svg
    .append("g")
    .attr('fill', 'OliveDrab')
    .selectAll("rect")
    .data(Mydata.sort((a, b) => d3.descending(a.score, b.number)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.number))
      .attr('title', (d) => d.number)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.number))
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
  svg.node();}



  
{const width = 500; 
 const height = 500;
 const colors = d3.scaleOrdinal(d3.schemeDark2);
  
 const svg = d3.select('#Pie-3Dcontainer').append('svg')
                  .attr('width', width).attr('height', height)
                  .style('background','#659B5E');


  const Mydata = [{region:'Eastern Cape', number:86400},
                  {region:'Free State', number:35537},
                  {region:'Gauteng', number:199352}, 
                  {region:'KwaZulu-Natal', number:111831},
                  {region:'Limpopo', number:15326}, 
                  {region:'Mpumalanga', number:27040},
                  {region:'North West', number:28385},
                  {region:'Western Cape', number:105347},
                  {region:'Northern Cape', number:16356},];

    const data = d3.pie().sort(null).value(function(d){return d.number;})
    (Mydata);
    console.log(data);
    const segments = d3.arc()
                       .innerRadius(100)
                       .outerRadius(225)
                       .padAngle(.08)
                       .padRadius(150);
    const sections = svg.append("g").attr("transform", "translate(250, 250)")
                          .selectAll("path").data(data);
    sections.enter().append("path").attr("d", segments).attr("fill",
    function(d){return colors(d.data.number);});
    
}