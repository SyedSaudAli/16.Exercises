var guest_list = ['Mr.Ali', 'Mrs.Areeba', 'Mr.Mustafa', 'Mr.Saud', 'Mrs.Fatima'];
var not_invited_guest = 'Mrs.Areeba';
var new_guest = 'Mr.Saleem';
guest_list[1] = new_guest;
console.log('\n\tupdate Guest List\n');
for (var i = 0; i < guest_list.length; i++) {
    console.log('\nDear : ' + guest_list[i] + '\nyou`r invited to night Dinner party \n\ni`m very Thanks full to join a Party');
}
console.log("\n\n\nDear ".concat(not_invited_guest, " you'r not invite Dinner Party\n"));
console.log('We Found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.');
guest_list.unshift('Sir Zia');
var middleIndex = Math.floor(guest_list.length / 2);
guest_list.splice(middleIndex, 0, 'Mr.Middle');
guest_list.push('Mr.late');
for (var i = 0; i < guest_list.length; i++) {
    console.log('\nDear : ' + guest_list[i] + '\nyou`r invited to night Dinner party \n\ni`m very Thanks full to join a Party');
}
