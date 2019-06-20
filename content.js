

var deleteAllCookies = function() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

var theSeattleTimes = function() {
  document.body.className = document.body.className.replace("fixed","");
  document.getElementsByClassName("modals")[0].remove()
  document.getElementsByClassName("container")[0].setAttribute("style", "")
  if (document.getElementsByClassName("paywall-header").length > 0) {
    var article_url = document.location.search.split("return=")[1]
    sessionStoreage.clear()
    document.location.href = article_url;
  }

}

function newsFilter() {
  switch (document.location.host) {
    case 'www.seattletimes.com':
      console.log('it is the seattle times');
      theSeattleTimes()
      break;
    default:
      console.log('seems like a non news site');
  }
};
window.addEventListener('load', newsFilter, false )

// document.addEventListener('DOMContentLoaded', newsFilter , false);
