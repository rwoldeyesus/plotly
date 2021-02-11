d3.json("../samples.json").then(function (data) {
    console.log(data);

    var dropDown = d3.select("#selDataset")
    var options = dropDown.selectAll("option")
        .data(data.names)
        .enter()
        .append("option");
    options.text(function (x) {
        return x;
    });

    var trace1 = {
        x: data.samples[0].sample_values.slice(0, 10).reverse(),
        y: data.samples[0].otu_ids.slice(0, 10).reverse(),
        hover_data: data.samples[0].otu_labels.slice(0, 10).reverse(),
        orientation: 'h',
        type: 'bar'
    };
    var data1 = [trace1];

    var layout = {
        title: 'Horizontal Bar CharAmount of bacteria for each OTU',
        yaxis: { type: "category" }
    };

    Plotly.newPlot('bar', data1, layout);

    var list = d3.select('#sample-metadata')

    var ul = list.append("ul")



    ul.append("li").text('id: ' + data.metadata[0].id)
    ul.append("li").text('ethnicity: ' + data.metadata[0].ethnicity)
    ul.append("li").text('gender: ' + data.metadata[0].gender)
    ul.append("li").text('age: ' + data.metadata[0].age)
    ul.append("li").text('location: ' + data.metadata[0].location)
    ul.append("li").text('bbtype: ' + data.metadata[0].bbtype)
    ul.append("li").text('wfreq: ' + data.metadata[0].wfreq)

    var trace2 = {
        x: data.samples[0].otu_ids,
        y: data.samples[0].sample_values,
        text: data.samples[0].otu_labels,
        mode: 'markers',
        marker: {
            color: data.samples[0].otu_ids,
            size: data.samples[0].sample_values
        }
    };

    var data2 = [trace2];

    var layout2 = {
        xaxis: {
            title: {
                text: 'OTU ID',
            }
        }

    };

    Plotly.newPlot('bubble', data2, layout2);
    console.log(data.metadata[0])

});
function optionChanged(index) {
    d3.json("./samples.json").then(function (data) {
        demographic_Info(index, data);
    });
}

function demographic_Info(index, data) {
    var list = d3.select('#sample-metadata')
    list.selectAll("ul").remove()
    var ul = list.append("ul")

    console.log(data)
    if (index == 941) { index = index - 940; }
    else if (index != 0) { index = index - 941; }

    // ul.selectAll("li").remove()

    ul.append("li").text('id: ' + data.metadata[index].id)
    ul.append("li").text('ethnicity: ' + data.metadata[index].ethnicity)
    ul.append("li").text('gender: ' + data.metadata[index].gender)
    ul.append("li").text('age: ' + data.metadata[index].age)
    ul.append("li").text('location: ' + data.metadata[index].location)
    ul.append("li").text('bbtype: ' + data.metadata[index].bbtype)
    ul.append("li").text('wfreq: ' + data.metadata[index].wfreq)

    var trace2 = {
        x: data.samples[index].otu_ids,
        y: data.samples[index].sample_values,
        text: data.samples[index].otu_labels,
        mode: 'markers',
        marker: {
            color: data.samples[index].otu_ids,
            size: data.samples[index].sample_values
        }
    };

    var data2 = [trace2];

    var layout2 = {
        xaxis: {
            title: {
                text: 'OTU ID',
            }
        }

    };

    Plotly.newPlot('bubble', data2, layout2);

    var trace1 = {
        x: data.samples[index].sample_values.slice(0, 10).reverse(),
        y: data.samples[index].otu_ids.slice(0, 10).reverse(),
        hover_data: data.samples[index].otu_labels.slice(0, 10).reverse(),
        orientation: 'h',
        type: 'bar'
    };
    var data1 = [trace1];

    var layout = {
        title: 'Horizontal Bar CharAmount of bacteria for each OTU',
        yaxis: { type: "category" }
    };

    Plotly.newPlot('bar', data1, layout);
}







