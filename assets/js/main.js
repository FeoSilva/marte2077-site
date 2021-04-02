$(function () {
  "use strict";

  //===== Prealoder

  if ($(".preloader").length) {
    $(".preloader").fadeOut();
  }

  //===== close navbar-collapse when a  clicked

  $(".page-scroll").on("click", function () {
    $(".off_canvars_overlay, .offcanvas_menu_wrapper").removeClass("active");
  });

  /*===============================  
         side menu Project 1
    ================================*/

  $(".canvas_open").on("click", function () {
    $(".offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
  });

  $(".canvas_close,.off_canvars_overlay").on("click", function () {
    $(".offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
  });

  /*---Off Canvas Menu---*/
  var $offcanvasNav = $(".offcanvas_main_menu"),
    $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
  $offcanvasNavSubMenu
    .parent()
    .prepend(
      '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
    );

  $offcanvasNavSubMenu.slideUp();

  $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.siblings("ul").slideUp("slow");
      } else {
        $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
        $this.siblings("ul").slideDown("slow");
      }
    }
    if (
      $this.is("a") ||
      $this.is("span") ||
      $this.attr("clas").match(/\b(menu-expand)\b/)
    ) {
      $this.parent().toggleClass("menu-open");
    } else if (
      $this.is("li") &&
      $this.attr("class").match(/\b('menu-item-has-children')\b/)
    ) {
      $this.toggleClass("menu-open");
    }
  });

  //===== scrolling nav Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 90;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 110) {
      $(".header-nav").removeClass("sticky");
    } else {
      $(".header-nav").addClass("sticky");
    }
  });

  //===== testimonial slide js

  jQuery(".testimonial-slide").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  //===== screenshot slide slick slider
  $(".screenshot-active").slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  //===== brand slide slick slider
  $(".brand-active").slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });

  //====== Magnific Popup

  $(".video-popup").magnificPopup({
    type: "iframe",
    // other options
  });

  //===== Magnific Popup

  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //===== pricing  table active

  if (jQuery("#switch-toggle-tab").length) {
    var toggleSwitch = jQuery("#switch-toggle-tab label.switch");
    var TabTitle = jQuery("#switch-toggle-tab li");
    var monthTabTitle = jQuery("#switch-toggle-tab li.month");
    var yearTabTitle = jQuery("#switch-toggle-tab li.year");
    var monthTabContent = jQuery("#month");
    var yearTabContent = jQuery("#year");
    // hidden show deafult;
    monthTabContent.fadeIn();
    yearTabContent.fadeOut();

    function toggleHandle() {
      if (toggleSwitch.hasClass("on")) {
        yearTabContent.fadeOut();
        monthTabContent.fadeIn();
        monthTabTitle.addClass("active");
        yearTabTitle.removeClass("active");
      } else {
        monthTabContent.fadeOut();
        yearTabContent.fadeIn();
        yearTabTitle.addClass("active");
        monthTabTitle.removeClass("active");
      }
    }
    monthTabTitle.on("click", function () {
      toggleSwitch.addClass("on").removeClass("off");
      toggleHandle();
      return false;
    });
    yearTabTitle.on("click", function () {
      toggleSwitch.addClass("off").removeClass("on");
      toggleHandle();
      return false;
    });
    toggleSwitch.on("click", function () {
      toggleSwitch.toggleClass("on off");
      toggleHandle();
    });
  }

  //===== faq accrodion js active

  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().parent().addClass("active");
              $(this).parent().parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }

  //===== COUNTER Active

  if (jQuery(".count").length) {
    jQuery(".count").appear(
      function () {
        jQuery(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: jQuery(this).text(),
            },
            {
              duration: 3000,
              easing: "swing",
              step: function (now) {
                jQuery(this).text(Math.ceil(now));
              },
            }
          );
      },
      { accY: 0 }
    );
  }

  //===== wow js Active

  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 250, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  //===== Back to top

  jQuery(window).on("scroll", function (event) {
    if (jQuery(this).scrollTop() > 600) {
      jQuery(".back-to-top").fadeIn(200);
    } else {
      jQuery(".back-to-top").fadeOut(200);
    }
  });

  jQuery(".back-to-top").on("click", function (event) {
    event.preventDefault();

    jQuery("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====
});
