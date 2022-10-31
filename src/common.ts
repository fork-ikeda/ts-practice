import Accordion from './modules/accordion'

const accordion = new Accordion('.js-accordion')
accordion.init()


// jQuery

// import $ from "jquery";

// $(function () {
//   console.log("jQuery is ready.");
// });

// $(".js-accordion").on('click', function(e) {
//   e.preventDefault()
//   const findElm = $(this).next(".js-accordion-item")
//   $(findElm).slideToggle(100)

//   if($(this).hasClass('open')) {
//     $(this).removeClass('open')
//   }else{
//     $(this).addClass('open')
//   }
// });