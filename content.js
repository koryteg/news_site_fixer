
var deleteAllCookies = function() {
  var cookies = document.cookie.split("; ");
  for (var c = 0; c < cookies.length; c++) {
      var d = window.location.hostname.split(".");
      while (d.length > 0) {
          var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
          var p = location.pathname.split('/');
          document.cookie = cookieBase + '/';
          while (p.length > 0) {
              document.cookie = cookieBase + p.join('/');
              p.pop();
          };
          d.shift();
      }
  }
}

var theSeattleTimes = function() {
  document.body.className = document.body.className.replace("fixed","")
  document.getElementsByClassName("modals")[0].remove()
  document.getElementsByClassName("container")[0].setAttribute("style", "")
  if (document.getElementsByClassName("paywall-header").length > 0) {
    var article_url = document.location.search.split("return=")[1]
    sessionStorage.clear()
    document.location.href = article_url
  }
}

var nytimes = function() {
  deleteAllCookies()
  var dock = document.getElementsByClassName("expanded-dock")[0]
  if (dock) {
    dock.remove()
  }
  var paywall = document.getElementById("gateway-content")
  if (paywall) {
    location.reload();
  }
  //  if there is a paywall these are the elements
  // document.getElementById("gateway-content").remove()
  // document.getElementsByClassName("css-mcm29f")[0].setAttribute("style", "position: absolute; overflow: visible;")
  // document.getElementsByClassName("css-1bd8bfl")[0].remove()
}

var businessInsider = function() {
  console.log('businessinsider')
  document.getElementsByClassName("tp-modal")[0].remove()
  document.getElementsByClassName("tp-backdrop")[0].remove()
  document.body.className = document.body.className.replace("tp-modal-open","")
}

var thedailybeast = function() {
  document.getElementsByClassName("tp-modal")[0].remove()
  document.getElementsByClassName("tp-backdrop")[0].remove()
  document.body.className = document.body.className.replace("tp-modal-open","")
}

 var fixTheNews = function() {
  switch (document.location.host) {
    case 'www.seattletimes.com':
      console.log('the seattle times')
      theSeattleTimes()
      break;
    case 'www.thedailybeast.com':
      console.log('the daily beast')
      thedailybeast()
      break;
    case 'www.nytimes.com':
      console.log('new york times')
      nytimes()
      break;
    case 'www.businessinsider.com':
      businessInsider()
      break;
    default:
      console.log('seems like a non news site')
  }
};
window.addEventListener('load', fixTheNews, false )

// document.addEventListener('DOMContentLoaded', newsFilter , false);
