var nav__scrollspy = (function changeBackgroundColor (el, target, cl) {
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
})('.nav', '.feature', 'nav--light');
