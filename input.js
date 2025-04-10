document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".location-form");
  const latInput = document.querySelector("input[placeholder='Latitude']");
  const lngInput = document.querySelector("input[placeholder='Longitude']");
  const pincodeInput = document.querySelector("input[placeholder='Enter PINCODE']");

  function validateLatitude(lat) {
      const num = parseFloat(lat);
      return !isNaN(num) && num >= -90 && num <= 90;
  }

  function validateLongitude(lng) {
      const num = parseFloat(lng);
      return !isNaN(num) && num >= -180 && num <= 180;
  }

  function validatePincode(pin) {
      return /^\d{6}$/.test(pin);
  }

  function handleSubmit() {
      const lat = latInput.value.trim();
      const lng = lngInput.value.trim();
      const pin = pincodeInput.value.trim();
      if (lat || lng) {
          if (!lat || !lng) {
              alert("Please provide both latitude and longitude");
              return;
          }
          if (!validateLatitude(lat)) {
              alert("Invalid latitude! Must be between -90 and 90");
              return;
          }
          if (!validateLongitude(lng)) {
              alert("Invalid longitude! Must be between -180 and 180");
              return;
          }
          alert(`Location submitted: Latitude ${lat}, Longitude ${lng}`);
      }
      else if (pin) {
          if (!validatePincode(pin)) {
              alert("Invalid pincode! Must be 6 digits");
              return;
          }
          alert(`Pincode submitted: ${pin}`);
      }
      else {
          alert("Please enter either coordinates or pincode");
      }
  }
  pincodeInput.addEventListener("input", function() {
      this.value = this.value.replace(/\D/g, "");
  });
  form.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
          e.preventDefault();
          handleSubmit();
      }
  });
  form.addEventListener("submit", function(e) {
      e.preventDefault();
      handleSubmit();
  });
});