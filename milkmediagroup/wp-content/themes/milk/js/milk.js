/**
 * Company: Logoscorp <logoscorp.com>
 * Author: Franklin Freites <aodreman@logoscorp.com>
 * Date: 21/07/2018
 * File: functions.php
 */

/** Functions **/
// Generic function to check everything is OK!
function listo () {
  console.log('Ready')
}

/** Loaders - Agrega tus scripts en esta seccion **/

// First Load - Puede que la pagina no este full cargada
jQuery(document).ready(function () {
 if(screen.width >= 667){
      servicesToggle();
}

if(screen.width <= 1239){
  menuClose();
}
})

function servicesToggle () {
  jQuery('.service-item').on('click mouseover', function () {
    if (jQuery(this).hasClass('open')) {
     // jQuery(this).removeClass('open')
    } else {
      jQuery('.service-item').removeClass('open')
      jQuery(this).addClass('open')
    }

    if (jQuery(this).hasClass('brand-development')) {
      if (jQuery('.services-section').hasClass('brand-development')) {
       // jQuery('.services-section').removeClass('brand_development')
      } else {
        jQuery('.services-section').addClass('brand-development')
        jQuery('.services-section').removeClass('social-media')
        jQuery('.services-section').removeClass('content-production')
        jQuery('.services-section').removeClass('digital-data')
        jQuery('.services-section').removeClass('email-marketing')
        jQuery('.services-section').removeClass('influencer-marketing')
        jQuery('.services-section').removeClass('media-buying')
      }
    } else if (jQuery(this).hasClass('social-media')) {
      if (jQuery('.services-section').hasClass('social-media')) {
       // jQuery('.services-section').removeClass('social-media')
      } else {
        jQuery('.services-section').removeClass('brand-development')
        jQuery('.services-section').addClass('social-media')
        jQuery('.services-section').removeClass('content-production')
        jQuery('.services-section').removeClass('digital-data')
        jQuery('.services-section').removeClass('email-marketing')
        jQuery('.services-section').removeClass('influencer-marketing')
        jQuery('.services-section').removeClass('media-buying')
      }
    } else if (jQuery(this).hasClass('content-production')) {
      if (jQuery('.services-section').hasClass('content-production')) {
       // jQuery('.services-section').removeClass('content-production')
      } else {
        jQuery('.services-section').removeClass('brand-development')
        jQuery('.services-section').removeClass('social-media')
        jQuery('.services-section').addClass('content-production')
        jQuery('.services-section').removeClass('digital-data')
        jQuery('.services-section').removeClass('email-marketing')
        jQuery('.services-section').removeClass('influencer-marketing')
        jQuery('.services-section').removeClass('media-buying')
      }
    } else if (jQuery(this).hasClass('digital-data')) {
      if (jQuery('.services-section').hasClass('digital-data')) {
      //  jQuery('.services-section').removeClass('digital-data')
      } else {
        jQuery('.services-section').removeClass('brand-development')
        jQuery('.services-section').removeClass('social-media')
        jQuery('.services-section').removeClass('content-production')
        jQuery('.services-section').addClass('digital-data')
        jQuery('.services-section').removeClass('email-marketing')
        jQuery('.services-section').removeClass('influencer-marketing')
        jQuery('.services-section').removeClass('media-buying')
      }
    } else if (jQuery(this).hasClass('email-marketing')) {
      if (jQuery('.services-section').hasClass('email-marketing')) {
       // jQuery('.services-section').removeClass('email-marketing')
      } else {
        jQuery('.services-section').removeClass('brand-development')
        jQuery('.services-section').removeClass('social-media')
        jQuery('.services-section').removeClass('content-production')
        jQuery('.services-section').removeClass('digital-data')
        jQuery('.services-section').addClass('email-marketing')
        jQuery('.services-section').removeClass('influencer-marketing')
        jQuery('.services-section').removeClass('media-buying')
      }
    } else if (jQuery(this).hasClass('influencer-marketing')) {
      if (jQuery('.services-section').hasClass('influencer-marketing')) {
        //jQuery('.services-section').removeClass('influencer-marketing')
      } else {
        jQuery('.services-section').removeClass('brand-development')
        jQuery('.services-section').removeClass('social-media')
        jQuery('.services-section').removeClass('content-production')
        jQuery('.services-section').removeClass('digital-data')
        jQuery('.services-section').removeClass('email-marketing')
        jQuery('.services-section').addClass('influencer-marketing')
        jQuery('.services-section').removeClass('media-buying')
      }
    } else if (jQuery(this).hasClass('media-buying')) {
      if (jQuery('.services-section').hasClass('media-buying')) {
      //  jQuery('.services-section').removeClass('media-buying')
      } else {
        jQuery('.services-section').removeClass('brand-development')
        jQuery('.services-section').removeClass('social-media')
        jQuery('.services-section').removeClass('content-production')
        jQuery('.services-section').removeClass('digital-data')
        jQuery('.services-section').removeClass('email-marketing')
        jQuery('.services-section').removeClass('influencer-marketing')
        jQuery('.services-section').addClass('media-buying')
      }
    }
  })
}

function menuClose(){
  jQuery('.menu-main li').on('click', function(){
    setTimeout(() => {
      jQuery('.close-wrapper .close').trigger('click');
      console.log('time')
    }, 600);
  })
}
