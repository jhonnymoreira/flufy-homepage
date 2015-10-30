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
