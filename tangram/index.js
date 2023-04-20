const squareButton = document.getElementById("squareButton");
const heartButton = document.getElementById("heartButton");

squareButton.addEventListener("click", () => {
  document.getElementById("triangle1").id = "triangle1sq";
  document.getElementById("triangle2").id = "triangle2sq";
  document.getElementById("square").id = "squaresq";
  document.getElementById("bigTriangle").id = "bigTrianglesq";
  document.getElementById("bigTriangle2").id = "bigTriangle2sq";
  document.getElementById("sideTriangle").id = "sideTrianglesq";
  document.getElementById("parallelogram").id = "parallelogramsq";
});

heartButton.addEventListener("click", () => {
  document.getElementById("triangle1sq").id = "triangle1";
  document.getElementById("triangle2sq").id = "triangle2";
  document.getElementById("squaresq").id = "square";
  document.getElementById("bigTrianglesq").id = "bigTriangle";
  document.getElementById("bigTriangle2sq").id = "bigTriangle2";
  document.getElementById("sideTrianglesq").id = "sideTriangle";
  document.getElementById("parallelogramsq").id = "parallelogram";
});
