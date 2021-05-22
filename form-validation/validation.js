// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
  username:/^[a-z\d]{5,12}$/i,
  email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  password:/^[\w@-]{8,20}$/i,
  telephone:/^\d{11}$/,
  slug:/^[a-z\d-]{8,20}$/
};


// validation function
function validate(field, regex) {
  // test validate function
  // console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
};

inputs.forEach((item) => {
  item.addEventListener('keyup', (e) => {
    // test keyup EventListener for each input
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value])
  });
});
