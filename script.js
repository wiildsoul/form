const links = [
  "https://docs.google.com/forms/d/e/1FAIpQLSd5sJ5vtkTkuqowALsNwoyr2mgHLQLuQatYzCMQOgQDuyaeAw/viewform",
  "https://docs.google.com/forms/d/e/1FAIpQLScnLXxjhzYf2uMmwBMgoTKw7M_SogvUOvKLoo79nse74EOxHw/viewform",
  "https://docs.google.com/forms/d/e/1FAIpQLScnLXxjhzYf2uMmwBMgoTKw7M_SogvUOvKLoo79nse74EOxHw/viewform",
  "https://docs.google.com/forms/d/e/1FAIpQLSd5sJ5vtkTkuqowALsNwoyr2mgHLQLuQatYzCMQOgQDuyaeAw/viewform",
  "https://docs.google.com/forms/d/e/1FAIpQLScnLXxjhzYf2uMmwBMgoTKw7M_SogvUOvKLoo79nse74EOxHw/viewform"
];

const link = document.getElementById("formSelector");

const formLink = links[Math.floor(Math.random() * links.length)];

link.href = formLink;
