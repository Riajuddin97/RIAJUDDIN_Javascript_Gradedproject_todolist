
//Creating an empty Array to store the list of TODO items
var itemList = []

//Function to add new TODO items to the list 
function addToList(item) {
    itemList.push(item)
};
function addItemToList() {
    newItem = document.getElementsByTagName('input')[0]
    if (newItem.value.trim().length > 0) {
        addToList(newItem.value)
        newItem.value = ""
        newItem.placeholder = "Enter your to-do list here"
        onLoad()
    }
    else {
        newItem.value = ""
        newItem.placeholder = "Enter your to-do list here"
    }
};

//Function to edit the exisitng TODO items
function editItem(item) {
    for (let index = 0; index < itemList.length; index++) {
        if (itemList[index] == item) {
            var newValue = prompt("Edit the item - " + item + "");
            if (newValue != null) {
                if (newValue.trim().length > 0) {
                    itemList[index] = newValue
                    onLoad()
                }
            }
        }
    }
};

//Function to delete an item in the list
function deleteItem(item) {
    for (let index = 0; index < itemList.length; index++) {
        if (itemList[index] == item) {
            var userSelection = confirm("Are you sure you want to delete the following item. \n" + item + " \nIt cannot be un-done ! ");
            if (userSelection == true) {
                alert(item + "\nsuccessfully deleted ! ")
                delete itemList[index]
                onLoad()
            }
        }
    }
}

//Function to read the list of items and dispaly it in the HTML
function onLoad() {
    list = document.getElementById('listBox')
    tag = ""
    if (itemList.length < 1) {
        return
    }
    else {
        itemList.forEach(function (item) {
            tag = tag + '<div class="items_div"> ' + item + '</div> <button  type=button class="edit-btn" onclick="editItem(\'' + item + '\')">  Edit </button>  <button type=button class="delete-btn" onclick="deleteItem(\'' + item + '\')"> Delete </button>'

        })
        list.innerHTML = tag
    }
};

onLoad()
