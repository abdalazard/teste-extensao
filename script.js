$(document).ready(function() {
  // Carrega o estado do toggle do localStorage
  let extensionEnabled = localStorage.getItem('extensionEnabled'); 

  // Ajusta o estado inicial do checkbox
  $('#extensionToggle').prop('checked', extensionEnabled === 'true'); 

  // Ajusta o texto do label inicialmente
  $('#texto-toggle').text(extensionEnabled === 'true' ? 'Desativar' : 'Ativar');

  // Mostra/esconde os elementos inicialmente, com base no estado
  if (extensionEnabled === 'true') {
    $("#textoParaAnalise").show();
    $("#submitParaAnalise").show();
  } else {
    $("#textoParaAnalise").hide();
    $("#submitParaAnalise").hide();
  }

  $('#extensionToggle').change(function() {
    // Salva o estado do toggle no localStorage
    localStorage.setItem('extensionEnabled', $(this).prop('checked'));

    // Altera o texto do label
    $('#texto-toggle').text($(this).prop('checked') ? 'Desativar' : 'Ativar');

    // Mostra/esconde os elementos
    if ($(this).prop('checked')) {
      $("#textoParaAnalise").show();
      $("#submitParaAnalise").show();
    } else {
      $("#textoParaAnalise").hide();
      $("#submitParaAnalise").hide();
    }  
  });
});