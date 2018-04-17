var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}

console.log(phonebookDict['Elizabeth']);
phonebookDict['Kareem'] = '938-489-1234';
console.log(phonebookDict['Kareem']);
delete phonebookDict['Alice'];
console.log(phonebookDict['Alice']);
phonebookDict.Bob = '968-345-2345';
console.log(phonebookDict.Bob);
var personName = 'Elizabeth';
console.log(phonebookDict[personName]);
for (var person in phonebookDict) {
    let number = phonebookDict[person];
    console.log(`${person}: ${number}`);
}