var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var options = {responsive: true, scaleGridLineColor : "rgba(255,255,255,.05)", scaleLineColor: "rgba(255,255,255,.05)",     legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var lineChartData;


window.onload = function(){
    lineChartData = {
        labels : ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
        datasets : [
            {
                label: "My First dataset",
                fillColor : "rgba(1,183,125,0.2)",
                strokeColor : "rgba(1,183,125,1)",
                pointColor : "rgba(1,183,125,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                label: "My First dataset",
                fillColor : "rgba(1,125,183,0.2)",
                strokeColor : "rgba(1,125,183,1)",
                pointColor : "rgba(1,125,183,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    }
    ctx = document.getElementById("linegraph").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, options);
}