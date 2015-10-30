var nav__padding = function addPadding (nav, target) {
  /* Get the elements */
  nav = document.querySelector(nav);
  target = document.querySelector(target);

  var navDimensions = {
    height: nav.scrollHeight
  };

  var windowDimensions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  /* On resize, update the values and do the check again */
  window.onresize = function updateValues () {
    navDimensions['height'] = nav.scrollHeight;

    windowDimensions['width'] = window.innerWidth;
    windowDimensions['height'] = window.innerHeight;

    if (windowDimensions['width'] <= 768 || windowDimensions['height'] <= 550) {
      target.style.paddingTop = (navDimensions['height'] + 30) + 'px';
    } else {
      target.style.paddingTop = '';
    }
  };

  /* Executes the first time and left everything to onresize function */
  if (windowDimensions['width'] <= 768 || windowDimensions['height'] <= 550) {
    target.style.paddingTop = (navDimensions['height'] + 30) + 'px';
  } else {
    target.style.paddingTop = '';
  }
}('.nav', '.transparency');

var nav__scrollspy = function changeBackgroundColor (el, target, cl) {
  /* Update 'target' and 'el' to be the DOM element */
  target = document.querySelector(target);
  el  = document.querySelector(el);

  /* Create 'targetPosition' to consider the 'el' height */
  var targetPosition = target.offsetTop - el.scrollHeight;

  /* On resize, update variables */
  window.onresize = function updateValues () {
    targetPosition = target.offsetTop - el.scrollHeight;
  };

  /* While scrolling... */
  window.onscroll = function triggerChange () {
    /* Get the scroll coordinate */
    var scrollPosition = document.documentElement.scrollTop ||
                         document.body.scrollTop;

    /**
     * If 'scrollPosition' is greater or equal than 'targetPosition', it will
     * add the 'cl' class, if not, it will remove the 'cl' class.
     */
    if ( scrollPosition >= targetPosition ) el.classList.add(cl);
    else                                    el.classList.remove(cl);
  };
}('.nav', '.features', 'nav--light');
