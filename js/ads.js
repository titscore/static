const ads = [{
  name: 'monkeysVsBras',
  file: 'FQlG2WbVgAEaoUu.jpg'
}];
window.onload = () => {
    const appEl = document.querySelector('#app');
    console.log({appEl});
    appEl.append(JSON.stringify(ads));
    console.log(JSON.stringify(ads));
    return JSON.stringify(ads);
}