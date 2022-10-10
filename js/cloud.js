$(document).ready(function () {

    var entries =[
      {
        image: "./assets/icons/JS.png",
        width: "50",
        height: "50",
        url: "https://www.javascript.com/",
        target: "_top"
      },
      {
        image: "./assets/icons/API.png",
        width: "50",
        height: "50",
        url: "http://en.m.wikipedia.org/wiki/api",
        target: "_top"
      },
      {
        image: "./assets/icons/agile.png",
        width: "50",
        height: "50",
        url: "https://en.wikipedia.org/wiki/DevOps",
        target: "_top"
      },
      {
        image: "./assets/icons/google.png",
        width: "50",
        height: "50",
        url: "http://google.com",
        target: "_top"
      },
      {
        image: "./assets/icons/html-5.png",
        width: "50",
        height: "50",
        url: "http://w3school.com/html/",
        target: "_top"
      },
      {
        image: "./assets/icons/google-cloud.png",
        width: "50",
        height: "50",
        url: "http://cloud.google.com",
        target: "_top"
      },
      {
        image: "./assets/icons/github.png",
        width: "50",
        height: "50",
        url: "http://github.com",
        target: "_top"
      },
      {
        image: "./assets/icons/physics.png",
        width: "50",
        height: "50",
        url: "http://reactjs.org",
        target: "_top"
      },
      {
        image: "./assets/icons/java.png",
        width: "50",
        height: "50",
        url: "http://java.com",
        target: "_top"
      },
      {
        image: "./assets/icons/flutter.png",
        width: "50",
        height: "50",
        url: "http://flutter.io",
        target: "_top"
      },
      {
        image: "./assets/icons/vscode.png",
        width: "50",
        height: "50",
        url: "https://code.visualstudio.com/",
        target: "_top"
      },
      {
        image: "./assets/icons/css3.png",
        width: "50",
        height: "50",
        url: "https://www.w3schools.com/css/",
        target: "_top"
      },
      {
        image: "./assets/icons/python.png",
        width: "50",
        height: "50",
        url: "http://python.org",
        target: "_top"
      },
      {
        image: "./assets/icons/c-sharp.png",
        width: "50",
        height: "50",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        target: "_top"
      },
      {
        image: "./assets/icons/photoshop.png",
        width: "50",
        height: "50",
        url: "http://adobe.com",
        target: "_top"
      },
      {
        image: "./assets/icons/youtube-color.png",
        width: "50",
        height: "50",
        url: "http://youtube.com",
        target: "_top"
      },
      {
        image: "./assets/icons/google-firebase.png",
        width: "50",
        height: "50",
        url: "http://firebase.google.com",
        target: "_top"
      },
      {
        image: "./assets/icons/node-js.png",
        width: "50",
        height: "50",
        url: "http://nodejs.org",
        target: "_top"
      },
      {
        image: "./assets/icons/google-tensorflow.png",
        width: "50",
        height: "50",
        url: "http://tensorflow.org",
        target: "_top"
      },
      {
        image: "./assets/icons/photoshop.png",
        width: "50",
        height: "50",
        url: "http://adobe.com",
        target: "_top"
      },
      {
        image: "./assets/icons/node-js.png",
        width: "50",
        height: "50",
        url: "http://nodejs.org",
        target: "_top"
      },
      {
        image: "./assets/icons/pulse.png",
        width: "50",
        height: "50",
        url: "http://en.m.wikipedia.org/wiki/searching",
        target: "_top"
      },
      {
        image: "./assets/icons/vue-js.png",
        width: "50",
        height: "50",
        url: "http://vuejs.org",
        target: "_top"
      }
    ]

    var settings = {
        entries: entries,
        width: 380,
        height: 380,
        radius: "75%",
        radiusMin: 75,
        bgDraw: true,
        bgColor: "transparent",
        opacityOver: 1.0,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.7,
        fontFamily: "Oswald, Arial, sans-serif",
        fontSize: "15",
        fontColor: "#fff",
        fontWeight: "normal", //bold
        fontStyle: "normal", //italic
        fontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: "Oswald, Arial, sans-serif",
        tooltipFontSize: "11",
        tooltipFontColor: "#fff",
        tooltipFontWeight: "normal", //bold
        tooltipFontStyle: "normal", //italic
        tooltipFontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: "left",
        tooltipDiffX: 0,
        tooltipDiffY: 10
      };

    $("#holder").svg3DTagCloud(settings);
    
});