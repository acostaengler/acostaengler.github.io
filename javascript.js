    function myFunction(x) {
      x.classList.toggle("change");
      let allAtrs = document.querySelectorAll('.nav-link a'); // Samlar in alla a attributer.
      allAtrs.forEach(a => a.classList.toggle("open")); // Ger alla a attributer en klass som heter open, som gör de synliga.
    }