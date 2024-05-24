const fs = require('fs');
const os = require('os');

// mappa létrehozás
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// fájl írás
fs.writeFile('./docs/szoveg.txt', 'Janus Pannonius Pannónia dicsérete',
                                  ' ',
                                  'Eddig Itália földjén termettek csak a könyvek', 
                                  'S most Pannónia is ontja a szép dalokat.', 
                                  'Sokra becsülnek már, a hazám is büszke lehet rám,', 
                                  'Szellemem egyre dicsőbb, általa híres e föld!', () => {
  console.log('file was written');
});

// fájl olvasás
fs.readFile('./docs/szoveg.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
});

/*console.log(os.platform()); 
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
console.log(fs.readFile());
console.log(os.version()); 
console.log(os.hostname());
console.log(os.type());*/