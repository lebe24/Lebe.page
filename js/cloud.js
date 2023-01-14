$(document).ready(function () {

    var entries =[
      {
        image: "https://skillicons.dev/icons?i=aws",
        width: "50",
        height: "50",
        url: "https://www.javascript.com/",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=api",
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
        image: "https://skillicons.dev/icons?i=google",
        width: "50",
        height: "50",
        url: "http://google.com",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=html",
        width: "50",
        height: "50",
        url: "http://w3school.com/html/",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=gcp",
        width: "50",
        height: "50",
        url: "http://cloud.google.com",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=github",
        width: "50",
        height: "50",
        url: "http://github.com",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=react",
        width: "50",
        height: "50",
        url: "http://reactjs.org",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=java",
        width: "50",
        height: "50",
        url: "http://java.com",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=flutter",
        width: "50",
        height: "50",
        url: "http://flutter.io",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=vscode",
        width: "50",
        height: "50",
        url: "https://code.visualstudio.com/",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=css3",
        width: "50",
        height: "50",
        url: "https://www.w3schools.com/css/",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=python",
        width: "50",
        height: "50",
        url: "http://python.org",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=cs",
        width: "50",
        height: "50",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=photoshop",
        width: "50",
        height: "50",
        url: "http://adobe.com",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=youtube",
        width: "50",
        height: "50",
        url: "http://youtube.com",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=firebase",
        width: "50",
        height: "50",
        url: "http://firebase.google.com",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=nodejs",
        width: "50",
        height: "50",
        url: "http://nodejs.org",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=tensorflow",
        width: "50",
        height: "50",
        url: "http://tensorflow.org",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=ai",
        width: "50",
        height: "50",
        url: "http://adobe.com",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=solidity",
        width: "50",
        height: "50",
        url: "http://nodejs.org",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=docker",
        width: "50",
        height: "50",
        url: "http://en.m.wikipedia.org/wiki/searching",
        target: "_top"
      },
      {
        image: "https://skillicons.dev/icons?i=vue",
        width: "50",
        height: "50",
        url: "http://vuejs.org",
        target: "_top"
      }
    ]

    var settings = {
        entries: entries,
        width: 180,
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