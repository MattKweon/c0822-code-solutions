function graduate(credential) {
  return function (fullName) {
    const output = fullName + ', ' + credential;
    return output;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Dan Abranov'));
console.log(lawSchool('Ryan Florence'));
