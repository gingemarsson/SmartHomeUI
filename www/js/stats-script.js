// Used to generate random data for graphs
var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

// Random data for graphs
randomDataSets = [
    [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],
    [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],
    [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],
    [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
]

// Graph options
var options = {
    responsive: true, 
    scaleGridLineColor : "rgba(255,255,255,.05)", 
    scaleLineColor: "rgba(255,255,255,.05)", 
    segmentShowStroke : false,
    legendTemplate : "<ul class=\"legend <%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"legendColor\" style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    multiTooltipTemplate: "<%= value %> KWh",
}
var optionsPie = {
    responsive: true, 
    legendTemplate : "<ul class=\"legend <%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><div class=\"legendColor\" style=\"background-color:<%=segments[i].fillColor%>\"></div><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
    segmentShowStroke : false,
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> KWh",
    animationSteps : 50};
var lineChartData;


window.onload = function(){ //When the page loads
    drawGraphs(1); //Draw standard graphs
    drawOutletGraph(); //And outlet graph
}

// Used to draw the standard graphs
function drawGraphs(mul) {
    
    // "Enery consumption this week"-graph
    lineChartData = {
        labels : ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
        datasets : [
            {
                label: "Average",
                fillColor : "rgba(255,255,255,0.1)",
                strokeColor : "rgba(255,255,255,0.5)",
                pointColor : "rgba(255,255,255,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : randomDataSets[1].map(function(x) { return x * mul; })
            },
            {
                label: "You",
                fillColor : "rgba(1,183,125,0.2)",
                strokeColor : "rgba(1,183,125,1)",
                pointColor : "rgba(1,183,125,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : randomDataSets[0].map(function(x) { return x * mul; })
            }
        ]
    }
    ctx = document.getElementById("graph1").getContext("2d");
    chart1 = new Chart(ctx).Line(lineChartData, options);
    $('#legend1').html(chart1.generateLegend());
    
    
    // "Enery consumption this month"-graph
    lineChartData = {
        labels : ["Week 32","Week 33","Week 34","Week 35"],
        datasets : [
            {
                label: "Average",
                fillColor : "rgba(255,255,255,0.1)",
                strokeColor : "rgba(255,255,255,0.5)",
                pointColor : "rgba(255,255,255,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : randomDataSets[3].map(function(x) { return x * mul; })
            },
            {
                label: "You",
                fillColor : "rgba(1,183,125,0.2)",
                strokeColor : "rgba(1,183,125,1)",
                pointColor : "rgba(1,183,125,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : randomDataSets[2].map(function(x) { return x * mul; })
            }
        ]
    }  
    ctx = document.getElementById("graph3").getContext("2d");
    var chart3 = new Chart(ctx).Line(lineChartData, options);
    $('#legend3').html(chart3.generateLegend());
    
    // "Enery conumption breakdown"-graph
    var data = [
        {value: 59 * mul, color : "rgba(  1,183,125,0.7)", highlight: "rgba(  1,183,125,0.9)", label: "Dishwasher"},
        {value: 45 * mul, color : "rgba( 37,111, 91,0.7)", highlight: "rgba( 37,111, 91,0.9)", label: "TV bench"},
        {value: 35 * mul, color : "rgba( 13,134,101,0.7)", highlight: "rgba( 13,134,101,0.9)", label: "Kitchen 1"},
        {value: 33 * mul, color : "rgba( 50, 89, 78,0.7)", highlight: "rgba( 50, 89, 78,0.9)", label: "Kitchen 2"},
        {value: 13 * mul, color : "rgba( 53, 66, 63,0.7)", highlight: "rgba( 53, 66, 63,0.9)", label: "Bedstand lamp"},
        {value: 11 * mul, color : "rgba( 43, 74,111,0.7)", highlight: "rgba( 43, 74,111,0.9)", label: "Desktop outlet"},
        {value: 11 * mul, color : "rgba(  3, 87,187,0.7)", highlight: "rgba(  3, 87,187,0.9)", label: "Kitchen TV"},
        {value: 10 * mul, color : "rgba( 16, 75,146,0.7)", highlight: "rgba( 16, 75,146,0.9)", label: "Reading lamp"},
        {value: 10 * mul, color : "rgba( 51, 63, 77,0.7)", highlight: "rgba( 51, 63, 77,0.9)", label: "Network equipment"},
        {value:  9 * mul, color : "rgba( 40, 41, 43,0.7)", highlight: "rgba( 40, 41, 43,0.9)", label: "Hall outlet"},
        {value: 46 * mul, color : "rgba( 92,132, 72,0.7)", highlight: "rgba( 92,132, 72,0.9)", label: "Other"},
    ]

    ctx = document.getElementById("graph0").getContext("2d");
    var myDoughnutChart = new Chart(ctx).Doughnut(data,optionsPie);
    $('#legend0').html(myDoughnutChart.generateLegend());
}

// The outlets to show inthe graph
var showOutlet = [true,false,false,false,false,false,false,false,false,false,false,false]


colors =   ["rgba( 37,111, 91,1)",
            "rgba(  0,156,113,1)",
            "rgba( 13,134,101,1)",
            "rgba( 50, 89, 78,1)",


            "rgba( 43, 74,111,1)",
            "rgba(  3, 87,187,1)",
            "rgba( 16, 75,146,1)",
            "rgba( 51, 63, 77,1)",
            

            "rgba( 81,147, 49,1)",
            "rgba( 57,176,  0,1)",
            "rgba( 66,162, 20,1)",
            "rgba( 92,132, 72,1)",
            "rgba( 98,118, 89,1)",
            
            "rgba( 53, 66, 63,1)",
            "rgba( 40, 41, 43,1)",
            ]

names =    ["Dishwasher",
            "TV bench",
            "Kitchen 1",
            "Kitchen 2",
            "Bedstand lamp",
            "Desktop outlet",
            "Kitchen TV",
            "Bedroom TV",
            "Network equipment",
            "Hall outlet",
            "Reading lamp"]
    
//Generate data for outlets
datasets = [];
for (i = 0; i < 11; i++) {
    datasets.push({
            fillColor : colors[i].replace(",1)", ",0.1)"),
            strokeColor : colors[i],
            pointColor : colors[i],
            label : names[i], 
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(220,220,220,1)",
            data : [20 + randomScalingFactor()/2,20 + randomScalingFactor()/2,20 + randomScalingFactor()/2,20 + randomScalingFactor()/2,20 + randomScalingFactor()/2,20 + randomScalingFactor()/2,20 + randomScalingFactor()/2]
        })
}

// Draw outlet graph
function drawOutletGraph() {
    
    //Filter away hidden outlets
    filteredDataset = []
    for (i = 1; i < 12; i++) {
        if (showOutlet[i-1]){
            filteredDataset.push(datasets[i-1])
        }
    }

    lineChartData = {
        labels : ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
        datasets : filteredDataset
    }
    
    ctx = document.getElementById("graph4").getContext("2d");
    chart = new Chart(ctx).Line(lineChartData, options);
    $('#legend4').html(chart.generateLegend());
}

// Outlet checkbox changed
$('.outletList input').change(function(){
    showOutlet[this.getAttribute("data-outletID")]= this.checked;
    drawOutletGraph();
    
    checked = $(".outletList input[type=checkbox]:checked").length;

    //Always atleast one checked
    if(checked == 1) {
        $(".outletList input[type=checkbox]:checked").attr("disabled", true);
    }
    else {
        $(".outletList input[type=checkbox]").attr("disabled", false);
    }
    
});

// Unit changed
$(".unitSelector").click( function() {
    setTimeout(function () {changeUnit($("[name='unitSelector']:checked").attr("data-unit"), $("[name='unitSelector']:checked").attr("data-mul"));}, 5);
})

// Change unit
function changeUnit(unit, mul) {
    $('span.energyUnit').each(function(){$(this).html(($(this).attr("data-value")* mul) + " " + unit)});
    
    options.multiTooltipTemplate = "<%= value %> " + unit;
    optionsPie.tooltipTemplate = "<%if (label){%><%=label%>: <%}%><%= value %> " + unit;
    
    drawGraphs(mul);
    drawOutletGraph();
}

$("#showMoreOutlets").click( showMoreOutlets);

function showMoreOutlets() {
    $(".hiddenRow").each(function(i, e) {$(e).fadeToggle(i*100)});
    $("#showMoreOutlets").hide();
}