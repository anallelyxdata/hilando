//------------------------1. PREPARATION------------------------//
//-----------------------------SVG------------------------------//
const width = 900;
const height = 450;
const margin = 0;
const padding = 0;
const adj = 60;
// we are appending SVG first
const svg = d3.select("div#produccion_container_grafica").append("svg")
.attr("preserveAspectRatio", "xMinYMin meet")
.attr("viewBox", "-"
  + adj + " -"
  + adj + " "
  + (width + adj *3) + " "
  + (height + adj*3))
.style("padding", padding)
.style("margin", margin)
.classed("svg-content", true);

svg.append("defs")
            .append("pattern")
            .attr("id", "bg-pattern")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("width", 1)
            .attr("height", 1)
            .attr("preserveAspectRatio", "none")
            .attr("xlink:href", "./img/fibra/textura-grafica.png"); // Replace with the path to your image

        svg.append("rect")
            .attr("width", "83.55%")
            .attr("height", "71.4%")
            .style("opacity", ".6")
            .style("fill", "url(#bg-pattern)");

//-----------------------------DATA-----------------------------//
const timeConv = d3.timeParse("%Y");
const dataset = d3.csv("data.csv");
dataset.then(function(data) {
    var slices = data.columns.slice(1).map(function(id) {
        return {
            id: id,
            values: data.map(function(d){
                return {
                    date: +d.date,
                    measurement: +d[id]
                };
            })
        };
    });

//----------------------------SCALES----------------------------//
const years = [1975, 1980, 1985, 1990, 1995, 2000, 2005, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

    // const xScale = d3.scaleTime().range([0,width]);
    const xScale = d3.scaleBand()
    .domain(years)
        .range([0, width]); // Assuming 'width' is defined elsewhere
        const yScale = d3.scaleLinear().rangeRound([height, 0]);


        yScale.domain([0, 105000]);

//-----------------------------AXES-----------------------------//
const yaxis = d3.axisLeft()
.ticks((slices[0].values).length/4)
.scale(yScale);

const xaxis = d3.axisBottom()
.tickValues(years)
.scale(xScale);

//----------------------------LINES-----------------------------//
const line = d3.line()
.x(function(d) { return xScale(d.date); })
.y(function(d) { return yScale(d.measurement); });

let id = 0;
const ids = function () {
    return "line-"+id++;
}  

//---------------------------TOOLTIP----------------------------//
const tooltip = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", 0)
.style("position", "absolute");


//-------------------------2. DRAWING---------------------------//
//-----------------------------AXES-----------------------------//
svg.append("g")
.attr("class", "axis")
.attr("transform", "translate(0," + height + ")")
.call(xaxis);

svg.append("g")
.attr("class", "axis")
.call(yaxis)



//----------------------------LINES-----------------------------//
const lines = svg.selectAll("lines")
.data(slices)
.enter()
.append("g");

lines.append("path")
.attr("class", ids)
.attr("d", function(d) { return line(d.values); })



//---------------------------POINTS-----------------------------// 
lines.selectAll("points")
.data(function(d) {return d.values})
.enter()
.append("circle")
.attr("cx", function(d) { return xScale(d.date); })      
.attr("cy", function(d) { return yScale(d.measurement); })    
.attr("r", 3)
.attr("class","point")
.style("opacity", 1)
.style("stroke", "#fff")
.style("stroke-width", "2")
.style("fill", "transparent")

//---------------------------EVENTS-----------------------------// 
lines.selectAll("circles")
.data(function(d) { return(d.values); } )
.enter()
.append("circle")
.attr("cx", function(d) { return xScale(d.date); })      
.attr("cy", function(d) { return yScale(d.measurement); })    
.attr('r', 10)
.style("opacity", 0)

lines.selectAll("circles")
.data(function(d) { return(d.values); } )
.enter()
.append("circle")
.attr("cx", function(d) { return xScale(d.date); })      
.attr("cy", function(d) { return yScale(d.measurement); })    
.attr('r', 10)
.style("opacity", 0)
.on('mouseover', function(d) {
    tooltip.transition()
    .style("opacity", 1);

    tooltip.html(d.measurement+" T")
    .style("left", (d3.event.pageX - 35) + "px")
    .style("top", (d3.event.pageY - 45) + "px");

            //add this        
            const selection = d3.select(this).raise();

            selection
            .transition()
            .delay("0")
            .duration("0")
            .attr("r", 6)
            .style("opacity", 1)
            .style("fill","#fff");
        })     

.on("mouseout", function(d) {      
    tooltip.transition()        
    .duration(100)      
    .style("opacity", 0);  

            //add this        
            const selection = d3.select(this);

            selection
            .transition()
            .delay("0")
            .duration("0")
            .attr("r", 10)
            .style("opacity", 0);
        });

});