// Specify the configuration items and data for the chart
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    let categoriesSet = new Set();

    json.forEach((entry) => {
      categoriesSet.add(entry.category);
    });

    let categoriesArray = Array.from(categoriesSet);

    let categoryData = new Array(categoriesArray.length).fill(0);
    categoriesArray.forEach((value, index, array) => {});
    json.forEach((value) => {
      let categoryIndex = categoriesArray.findIndex(
        (cat) => cat === value.category
      );
      categoryData[categoryIndex]++;
    });

    console.log(categoriesArray);
    console.log(categoryData);

    let options = {
      title: { text: "Fake Store Categories" },
      xAxis: {
        data: categoriesArray,
      },
      yAxis: {},
      series: [
        {
          name: "# products",
          type: "bar",
          data: categoryData,
        },
      ],
    };
    myChart.setOption(options);
  });

let myChart = echarts.init(document.getElementById("main"));
