(function($){
    chrome.storage.local.get('chrm_ext_resp_mod_old_pgs_enabled', data => {
        if (data.chrm_ext_resp_mod_old_pgs_enabled) {
            $('body').addClass('chrm_ext_resp_mod_old_pgs_enabled');
            
            function fixElements(){
                // Remove previous calculated max-width values
                let prevFixedElements = $('.chrm-ext-resp-mode-fix');
                if(prevFixedElements.length > 0) {
                    prevFixedElements.css('max-width', '');
                    prevFixedElements.removeClass('chrm-ext-resp-mode-fix');
                }
        
                let visibleElements = $('body *:visible');
                visibleElements.hide();
                visibleElements.each(function() {
                    let leftMarg = parseInt($(this).css('margin-left').replace('auto', 0));
                    let rightMarg = parseInt($(this).css('margin-right').replace('auto', 0));
                    let borderSize = $(this).outerWidth(false) - $(this).width();
                    let outerSize = borderSize + leftMarg + rightMarg;
        
                    if(outerSize > 0) {
                        $(this)[0].style.setProperty( 'max-width', 'calc(100% - '+ outerSize +'px)', 'important' );
                        $(this).addClass('chrm-ext-resp-mode-fix');
                    }
                });
                visibleElements.show();
            }
        
            let doit;
            window.onresize = function(){
                clearTimeout(doit);
                doit = setTimeout(fixElements, 250);
            };
            fixElements();
        }
    });
})(jQuery);


