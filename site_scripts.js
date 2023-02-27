//Create footer image function
const footerImageGenerator = () => {
  let imageList = [];
  const imageSuffix = [
    "bustour",
    "cabinrental",
    "campingadv",
    "collegetours",
    "rentalbike",
    "tourgroup",
  ];
  const openList = "<li class='partner col-12 col-sm-6 col-md-4 col-lg-2 py-3'>";
  const closeList = "</li>";

  const openDiv = "<div class='image-wrapper'>";
  const closeDiv = "</div>";

  //More concise way to write it

  
  //Understood what inclass-demo did were for the best practice purpose
  for (let i = 0; i < 6; i++) {
    imageList = [
      ...imageList,
      `${openList}${openDiv}<img src="images/partner-${imageSuffix[i]}.png" alt="${imageSuffix[i]}" />${closeDiv}${closeList}`,
    ];
  }

  document.getElementById("partners").innerHTML = imageList.join("");
};

footerImageGenerator();
