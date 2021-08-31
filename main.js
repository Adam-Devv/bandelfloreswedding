$(function ()
{
    $('img').on('click', function ()
    {
        var URL=this.getAttribute('src');
    window.open(URL,'_blank','',''); 
        // $(this).css('width',"120%");
        // $(this).css('height',"120%");
    });
});