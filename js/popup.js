var enabled = false;
var enableCheckBox = document.getElementById('chrm_ext_resp_mod_old_pgs_enableCheckBox');
var headerText = document.getElementById('headerText');

chrome.storage.local.get('chrm_ext_resp_mod_old_pgs_enabled', data => {
    enabled = !!data.chrm_ext_resp_mod_old_pgs_enabled;
    enableCheckBox.checked = enabled;
    headerText.textContent = enabled ? 'Disable Responsive Mode' : 'Enable Responsive Mode';
});

enableCheckBox.addEventListener('change', function() {
    if(this.checked)
        enabled = true;
    else
        enabled = false;
    chrome.storage.local.set({chrm_ext_resp_mod_old_pgs_enabled:enabled});
    headerText.textContent = enabled ? 'Disable Responsive Mode' : 'Enable Responsive Mode';
    chrome.tabs.reload();
});