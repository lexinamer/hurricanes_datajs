$(document).ready(function() {

  // Data Table
  $('#table').dataTable( {
        "ajax": 'data/table.json',
        responsive: true
    } );

  // Accordion
  $(".accordion").smk_Accordion({
    showIcon: true, // Show the expand/collapse icons.
    animation: true, // Expand/collapse sections with slide aniamtion.
    closeAble: true, // Closeable section.
    slideSpeed: 200 // the speed of slide animation.
  });

}); //Close Doc Ready
