var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("index.html", "utf8");

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center; color:red"><h1>Ekmatra Technology pvt. ltd</h1></div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};
var users = [
    {
      name: "Vikas",
      age: "23",
      Image: 'image/Tiger.jpg'
    },
    {
      name: "akash",
      age: "26",
      Image:'image/monkey.jpg'
    },
    {
      name: "prakash",
      age: "26",
      Image:'lion.jpg'
    },
  ];

  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./vs.pdf"
  
  };

  pdf.create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });