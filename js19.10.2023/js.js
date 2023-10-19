const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.reduce((accumulator, item) => accumulator + item));


const maaslar = [8500,9200,8800,8700]
 
  
  const zamliIsciler = maaslar.filter(maas => maas < 9000).map(maas => (maas * 1.50))
    
  console.log(zamliIsciler);

