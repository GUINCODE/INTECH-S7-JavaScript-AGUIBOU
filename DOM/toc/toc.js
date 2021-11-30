
  let toc = "";
  let level = 0;

  document.querySelector("body").innerHTML = document.querySelector("body")
    .innerHTML.replace( /<h([\d])>([^<]+)<\/h([\d])>/gi,
      function (str, openLevel, titleText, closeLevel) {
        if (openLevel != closeLevel) {
          return str;
        }

        if (openLevel > level) {
          toc += new Array(openLevel - level + 1).join("<ol>");
        } else if (openLevel < level) {
          toc += new Array(level - openLevel + 1).join("</ol>");
        }

        level = parseInt(openLevel);

        var anchor = titleText.replace(/ /g, "_");
        toc += '<li><a href="#' + anchor + '">' + titleText + "</a></li>";

        return (
          "<h" +
          openLevel +
          '><a name="' +
          anchor +
          '">' +
          titleText +
          "</a></h" +
          closeLevel +
          ">"
        );
      }
    );

  if (level) {
    toc += new Array(level + 1).join("</ol>");
  }

  let a=document.createElement("div");
    a.innerHTML += toc;
  document.querySelector("body").prepend(a)
 

