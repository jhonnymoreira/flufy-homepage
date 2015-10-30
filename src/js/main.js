var nav__padding = function addPadding (nav, target) {
  nav = document.querySelector(nav);
  target = document.querySelector(target);

  var navDimensions = {
    height: nav.scrollHeight
  };

  var windowDimensions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

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
  /* Select the position of the 'target' element */
  var targetPosition = document.querySelector(target).offsetTop;

  /* Update 'el' to be the DOM element */
  el  = document.querySelector(el);

  /* Update 'targetPosition' so it considers the 'el' height */
  targetPosition -= el.scrollHeight;

  /* While scrolling... */
  window.onscroll = function () {
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
