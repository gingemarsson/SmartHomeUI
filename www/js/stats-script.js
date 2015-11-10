var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var options = {responsive: true, scaleGridLineColor : "rgba(255,255,255,.05)", scaleLineColor: "rgba(255,255,255,.05)"};
var lineChartData;


window.onload = function(){
    lineChartData = {
        labels : ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
        datasets : [
            {
                fillColor : "rgba(1,183,125,0.2)",
                strokeColor : "rgba(1,183,125,1)",
                pointColor : "rgba(1,183,125,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
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
    ctx = document.getElementById("graph1").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, options);
    
    lineChartData = {
        labels : ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
        datasets : [
            {
                fillColor : "rgba(1,183,125,0.2)",
                strokeColor : "rgba(1,183,125,1)",
                pointColor : "rgba(1,183,125,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    }
    ctx = document.getElementById("graph2").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, options);
    
    lineChartData = {
        labels : ["W. 44", "W. 45", "W. 46", "W. 47"],
        datasets : [
            {
                fillColor : "rgba(1,183,125,0.2)",
                strokeColor : "rgba(1,183,125,1)",
                pointColor : "rgba(1,183,125,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    }
    ctx = document.getElementById("graph3").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, options);
    
    lineChartData = {
        labels : ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],
        datasets : [
            {
                fillColor : "rgba(1,183,125,0.2)",
                strokeColor : "rgba(1,183,125,1)",
                pointColor : "rgba(1,183,125,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),
                    randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    }
    ctx = document.getElementById("graph4").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, options);
}