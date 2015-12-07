var randomScalingFactor = function() {
    return Math.round(Math.random() * 100)
};
var options = {
    responsive: true,
    scaleGridLineColor: "rgba(255,255,255,.05)",
    scaleLineColor: "rgba(255,255,255,.05)",
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    legendTemplate : "<ul class=\"legend <%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"legendColor\" style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    multiTooltipTemplate: "<%= value %> KWh"
};

var lineChartData;
window.onload = function() {
    lineChartData = {
        labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        datasets: [{
            label: "Energy cost",
            fillColor: "rgba(1,183,125,0.2)",
            strokeColor: "rgba(1,183,125,1)",
            pointColor: "rgba(1,183,125,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [32, 26, 24, 28, 40, 36, 45]
        }]
    }
    ctx = document.getElementById("energraph").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, options);
    lineChartData = {
        labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        datasets: [{
            label: "Your Usage",
            fillColor: "rgba(1,183,125,0.2)",
            strokeColor: "rgba(1,183,125,1)",
            pointColor: "rgba(1,183,125,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [randomScalingFactor(), randomScalingFactor(),randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), 100, randomScalingFactor()]
        }, {
            label: "National Average",
            fillColor: "rgba(1,125,183,0.2)",
            strokeColor: "rgba(1,125,183,1)",
            pointColor: "rgba(1,125,183,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }, {
            label: "Sustainable Level",
            fillColor: "rgba(200,200,200,0.2)",
            strokeColor: "rgba(200,200,200,1)",
            pointColor: "rgba(200,200,200,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [30,30,30,30,30,30,30]
        }]
    }
    ctx = document.getElementById("linegraph").getContext("2d");
    chart1 = new Chart(ctx).Line(lineChartData, options);
    $('#legend1').html(chart1.generateLegend());
}