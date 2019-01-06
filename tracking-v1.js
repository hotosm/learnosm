/* Add div content */
var html = '<div id="optout-contents"> \
  <p>This site uses Matomo to analyze traffic and help us improve your user experience. It is processing your IP address and stores cookies on your browser for 13 months. Those data are only processed by us and our web hosting platform. You may choose to opt of of this below. </p> \
  <p><a id="privlink" href="https://hotosm.org/privacy"> Learn more about our Privacy Policy</a></p> \
    <div id="optout-buttons"><div class="optout-button" id="optout-disagree">Do not agree</div>   <div class="optout-button" id="optout-agree">Agree</div></div> \
</div>';

var css = ' \
#optout-form { \
  position: fixed; \
  bottom: 0%; \
  left: 0%; \
  max-width: 100%; \
  padding: 0 15%; \
  background-color: #2C3038; \
  z-index: 1001; \
  display: none; \
} \
 \
#optout-contents { \
  padding-top: 14px; \
} \
\
#optout-form p { \
  color: #E1E0E0; \
  text-align: center; \
  margin: 0.5em; \
  max-width: 100%; \
} \
 \
#optout-form a { \
  color: #d73f3f; \
  font-weight: 700; \
  text-decoration: none; \
} \
 \
#optout-form a:hover { \
  color: #68c7dd; \
}  \
\
#optout-buttons { \
  grid-column: 2; \
  text-align: center; \
  padding-bottom: 14px; \
  cursor: pointer; \
  z-index: 1002; \
} \
\
.optout-button, .optout-button:visited {\
  -webkit-border-radius: 4px;\
  -moz-border-radius: 4px;\
  border-radius: 4px;\
  background-color: #d73f3f;\
  padding: .3em 2.5em;\
  color: #E1E0E0;\
  text-transform: uppercase;\
  display: inline-block;\
  font-weight: 600;\
  border: 2px solid #d73f3f;\
}\
\
.optout-button:hover, .optout-button:visited:hover {\
  transition: all 0.3s ease 0s;\
  -webkit-transition: all 0.3s;\
  -moz-transition: all 0.3s;\
  color: #d73f3f;\
  background-color: inherit;\
  border: 2px solid #d73f3f;\
}';

// Matomo tracker
var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['requireConsent']);
_paq.push(["setDomains", ["*.hotosm.org","*.hot.openstreetmap.org","*.hot.osm.org"]]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://matomo.hotosm.org/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '3']);

  //old piwik tracker - if you need to keep tracking on the old site, uncomment and replace the Id with the correct one
  //var secondaryTracker = "https://piwik.hotosm.org/piwik.php"
  //var secondaryWebsiteId = 5;
  // Also send all of the tracking data to this other Matomo server, in website ID 77
  //_paq.push(['addTracker', secondaryTracker, secondaryWebsiteId]);
  // End Piwik code

  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

// Opt-out form
document.addEventListener("DOMContentLoaded", function(event) {

  var style = document.createElement('style');

  if (style.styleSheet) {
      style.styleSheet.cssText = css;
  } else {
      style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName('head')[0].appendChild(style);

  var form =  document.getElementById('optout-form');
  if (typeof(form) != 'undefined' && form != null)
  {
    console.log("loading optout form");
    form.innerHTML = html;

    var formContents = document.getElementById('optout-contents');
    var formContentsP = formContents.getElementsByTagName("P");
    var formClose = document.getElementById('optout-close');
    var privLink = document.getElementById('privlink');
    
    if (!localStorage.getItem("optout-closed")) {
      form.style.display = 'grid';
    }

  }

  function closeForm() {
    form.style.display = 'none';
    localStorage.setItem("optout-closed", "true");
  }

  function setAgree() {
    _paq.push(['setConsentGiven']);
    closeForm();
  }

  function setDisagree() {
    _paq.push(['forgetConsentGiven']);
    closeForm();
  }

  document.getElementById('optout-agree').onclick = function() {
    setAgree();
  };

  document.getElementById('optout-disagree').onclick = function() {
    setDisagree();
  };
});
