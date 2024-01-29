//Example query for Jan 2013, the earliest month for this datset
// {
//     vintage: "timeseries",
//     sourcePath: ["intltrade", "exports", "naics"],
//     values: ["AIR_WGT_MO", "CNT_WGT_MO", "VES_WGT_MO"],
//     predicates: { time: "2013-01", NAICS: "111" },
// }

function censusPromise(args) {
  return new Promise(function(resolve, reject) {
    census(args, function(err, json) {
      if (!err) {
        resolve(json);
      } else {
        reject(err);
      }
    });
  });
}

//["2015", "2016", "2017", "2018", "2019", "2020", "2021"]
const years = Array(7)
  .fill()
  .map((_, i) => (i + 2015).toString());

//["01","02"...]
const months = Array(12)
  .fill()
  .map((_, i) => (i + 1).toString().padStart(2, "0"));

//["2015-01","2015-02"...]
const times = [];
years.forEach(year => {
  months.forEach(month => times.push(`${year}-${month}`));
});

const timesQueries = times.map(time => {
  return censusPromise({
    vintage: "timeseries",
    sourcePath: ["intltrade", "exports", "naics"],
    values: ["AIR_WGT_MO", "CNT_WGT_MO", "VES_WGT_MO"],
    predicates: { time: time, NAICS: "111" },
    statsKey: "3c04140849164b373c8b1da7d7cc8123ef71b7ab"
  }).then(response => response[0]); //get first array
});
Promise.all(timesQueries).then(responses => {
  console.log(responses);
  //[
  //    {AIR_WGT_MO: 8972541, CNT_WGT_MO: 1138572445, VES_WGT_MO: 12638056922, time: "2015-01", NAICS: 111},
  //    {AIR_WGT_MO: 8672703, CNT_WGT_MO: 1238855849, VES_WGT_MO: 11479577166, time: "2015-02", NAICS: 111},
  //...
  //]
});

const data = responses.filter(response => !!response);

const margin = { top: 50, right: 50, bottom: 50, left: 100 },
  width = window.innerWidth - margin.left - margin.right, // Use the window's width
  height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

  const dateFormat = d3.timeParse("%Y-%m");
const xScale = d3
  .scaleTime()
  .domain(d3.extent(data, d => dateFormat(d.time)))
  .range([0, width]);
const yScale = d3
  .scaleLinear()
  .domain([
    d3.min(data, d => d3.min([d.AIR_WGT_MO, d.CNT_WGT_MO, d.VES_WGT_MO])),
    d3.max(data, d => d3.max([d.AIR_WGT_MO, d.CNT_WGT_MO, d.VES_WGT_MO]))
  ])
  .range([height, 0]);

  const line = d3
  .line()
  .x(d => xScale(d.time)) // set the x values for the line generator
  .y(d => yScale(d.value)) // set the y values for the line generator
  .curve(d3.curveMonotoneX); // apply smoothing to the line

  //setup svg
const svg = d3
  .select("#chart")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//setup x and y axis
svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

svg
  .append("g")
  .attr("class", "y axis")
  .call(d3.axisLeft(yScale));