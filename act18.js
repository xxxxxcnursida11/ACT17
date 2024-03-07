function generateNameTag() {
    var nameInput = document.getElementById('nameInput');
    var name = nameInput.value;
    var nameTagList = document.getElementById('nameTagList');
    var nameTag = document.createElement('div');
    nameTag.className = 'nameTag';
    nameTag.innerText = 'Hello, my name is: ' + name;
    nameTagList.appendChild(nameTag);
    nameInput.value = '';
}