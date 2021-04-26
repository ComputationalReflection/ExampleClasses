var colors = ['#2980b9','#f39c12','#16a085','#e74c3c','#9b59b6','#f1c40f','#3498db','#2c3e50','#F79F1F','#006266','#6F1E51','#12CBC4'];

var width = 500,
  height = 500,
  radius = Math.min(width, height) / 2,
  innerRadius = 0.3 * radius;

var pie = d3.layout.pie()
  .sort(null)
  .value(function (d) { return d.width; });

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([0, 0])
  .html(function (d) {
    return d.data.name + "<br/><span style='color:orangered'>" + d.data.checked_percentage + "% / " + d.data.correct_percentage + "%<br/>" + d.data.checked + " / " + d.data.correct + "</span>";
  });

var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(function (d) {
    return (radius - innerRadius) * (d.data.correct_percentage / 100.0) + innerRadius;
  });

var outlineArc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(radius);

var svg = d3.select("#chart").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var svgLegend = d3.select("#legend").append("svg")


svg.call(tip);

  var colorIndex = 0;
  report.categories.forEach(function (d) {
    d.checked = +d.checked;    
    d.checked_percentage = +d.checked_percentage;
    d.warning = +d.warning;
    d.correct = +d.correct;
    d.correct_percentage = +d.correct_percentage;	
    d.color = colors[colorIndex++];
    d.name = d.name;
	d.width = +d.checked_percentage;
  });

  svgLegend.selectAll("mydots")
    .data(report.categories)
    .enter()
    .append("circle")
    .attr("cx", 20)
    .attr("cy", function (d, i) { return 20 + i * 25 }) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", function (d) { return d.color })

  // Add one dot in the legend for each name.
  svgLegend.selectAll("mylabels")
    .data(report.categories)
    .enter()
    .append("text")
    .attr("x", 40)
    .attr("y", function (d, i) { return 20 + i * 25 }) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function (d) { return '#000000' })
    .text(function (d) { return d.name })
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")

  // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }

  var node = svg.selectAll(".arc")
    .data(pie(report.categories))
    .enter().append("g")
    .attr("class", "arc");

  node.append("path")
    .attr("fill", function (d) { return d.data.color; })
    .attr("class", "solidArc")
    .attr("stroke", "gray")
    .attr("d", arc)
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);

  var outerPath = svg.selectAll(".outlineArc")
    .data(pie(report.categories))
    .enter().append("path")
    .attr("fill", "none")
    .attr("stroke", "gray")
    .attr("class", "outlineArc")
    .attr("d", outlineArc);

  var newarc = d3.svg.arc()
    .innerRadius(2 * radius / 6)
    .outerRadius(radius);

  node.append("text")
    .attr("transform", function (d) {
      return "translate(" + newarc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
	.attr("font-weight", "bold") 
	.attr("font-size", "medium") 
    .attr("fill", "black")
    .text(function (d) {
      return d.data.checked_percentage > 3 ?  (d.data.checked_percentage + "%") : "";
    });