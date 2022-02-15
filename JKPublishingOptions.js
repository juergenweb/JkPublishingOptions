/**
* Script to check/uncheck all boxes by toggeling the top checkbox
* Written by Jürgen Kern
*/

window.onload = function () {

  const checkbox = document.getElementById('Inputfield_input_templates_0');
  checkboxes = document.getElementsByName('input_templates[]');

  checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      //check all checkboxes
      for(var i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = true;
      }
    } else {
      //check all checkboxes
      for(var i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = false; 
      }
    }
  })

}
