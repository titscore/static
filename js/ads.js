const ads = [{
  name: 'monkeysVsBras',
  file: 'FQlG2WbVgAEaoUu.jpg'
}];
document.onload = () => {
    document.querySelector('#app').append(JSON.stringify(ads));
}