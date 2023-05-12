$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var video = $('#myVideo')[0];
    var videoTop = $('#myVideo').offset().top;
    var videoHeight = $('#myVideo').height();
    var windowHeight = $(window).height();
    
    if (scrollTop > videoTop - windowHeight && scrollTop < videoTop + videoHeight) {
      // Video is in view, play it
      video.play();
      video.style.opacity = 1;
      video.style.pointerEvents = 'auto';
    } else {
      // Video is not in view, pause it
      video.pause();
      video.style.opacity = 0;
      video.style.pointerEvents = 'none';
    }
  });
  