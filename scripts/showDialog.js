var modal, modalContent, titleBar, usersList, currentUser, userItem, currentUser = user;

function closeDialog() {
    modal.remove();
    modalContent.remove();
}

//construction the modal.
modal = $("<div>");
modal.css({
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "background-color": "black",
    "z-index": 10000,
    "opacity": 0.8,
    "top": 0,
    "left": 0,
    "box-sizing": "border-box"
});
$("body").append(modal);
modal.on("click", closeDialog);

//construction of modal content div.
modalContent = $("<div>");
modalContent.css({
    "position": "absolute",
    "width": "25%",
    "height": "100%",
    "top": "0px",
    "right": "0px",
    "z-index": "10001",
    "box-sizing": "border-box",
    "margin": "auto",
    "overflow": "auto",
    "min-width": "300px",
    "background-color": "white"
});
$("body").append(modalContent);


function faceItem(user) {
    var item = $("<li>");
    item.addClass("people-list-item");
    item.data("session", user.session);
    item.append($("<img>").attr("src", user.picture).addClass("people-list-item-avatar"));
    item.append($("<span>" + user.id + "</span>").addClass("people-list-item-nick"));
    return item;
}

var listView = $("<div>");
listView.addClass("list-view");
listView.css({
    "font-size":"18px"
});
store.getAllUsers(function(users) {
    var listUl = $("<ul>");
    listUl.addClass("list-section");

    var allUsers = Object.keys(users).map(function(u) {
        return users[u];
    });

    allUsers.forEach(function(u) {
        var u = faceItem(u), listItemLi = $("<li>");
        listItemLi.append(u).addClass("list-item");
        listUl.append(listItemLi);
        u.on("click", function() {
            localStorage.session = u.data("session");
            window.location.reload();
        });
    });
    listView.append($("<h3>Faces</h3>").addClass("list-header"));
    listView.append(listUl);
    modalContent.append(listView);
});
