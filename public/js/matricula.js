$(document).ready(function () {
    // Ocultar el resultado inicialmente
    $('#result').hide();
  
    // Manejar el cambio en la selección de curso
    $('#courseDropdown').change(function () {
      $('#step2').show(); // Mostrar el Paso 2
    });
  
    // Manejar el clic en el botón de "Calcular Total"
    $('#btnCalculate').click(function () {
      const selectedCourse = $('#courseDropdown').val();
      const selectedModules = [];
      $('input[name="modules"]:checked').each(function () {
        selectedModules.push($(this).val());
      });
      const paymentMethod = $('input[name="paymentMethod"]:checked').val();
  
      // Realizar cálculos y mostrar el resumen
      const total = calculateTotal(selectedCourse, selectedModules, paymentMethod);
      showSummary(selectedCourse, selectedModules, paymentMethod, total);
    });
  
    // Función para calcular el total
    function calculateTotal(course, modules, paymentMethod) {
      let total = 0
  
      if (course === 'Java') {
        total = modules.length * 1200;
      } else if (course === 'PHP') {
        total = modules.length * 800;
      } else if (course === '.NET') {
        total = modules.length * 1500;
      }
  
      if (paymentMethod === 'efectivo') {
        total -= total * 0.1;
      }
  
      return total.toFixed(2);
    }

  
    // Función para mostrar el resumen
    function showSummary(course, modules, paymentMethod, total) {
      $('#selectedCourse').text(course);
      $('#selectedModules').text(modules.join(', '));
      $('#paymentMethod').text(paymentMethod);
      $('#totalAmount').text(`S/ ${total}`);
      $('#result').show();
    }
  });
  