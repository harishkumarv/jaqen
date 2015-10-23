var modalCss = {
    "position":"absolute",
    "width":"100%",
    "height":"100%",
    "background-color":"#000",
    "z-index":"10000",
    "opacity":"0.7",
    "top":"0",
    "left":"0",
    "box-sizing": "border-box",
    "padding": "10%"
};

var divCss = {
    "position":"absolute",
    "width":"700px",
    "height":"300px",
    "top":"0",
    "left":"0",
    "right": "0",
    "background-color":"#fff",
    "z-index":"10001",
    "box-sizing": "border-box",
    "margin": "50px auto 50px auto",
    "overflow": "auto",
    "padding":"8px",
    "border-radius":"8px",
    "background-color":"black",
    "min-width":"300px"
};

var userCss = {
    "display": "inline-block",
    "margin":"10px",
    "box-sizing": "border-box",
    "width":"100px",
    "text-align":"center"
};

var buttonDiv = $("<div>");
buttonDiv.css({
    "width": "100%",
    "padding":"20px",
    "background-color":"white"
});

var modal = $("<div>");
modal.css(modalCss);
modal.addClass("choose");
$("body").append(modal);

var div = $("<div>");
$("body").append(div);
div.css(divCss);
div.append(buttonDiv);

var grabUserBtn = $("<button>Save user</button>");
buttonDiv.append(grabUserBtn);
grabUserBtn.css({
    "float":"right"
});
$(grabUserBtn).on("click", function() {
  store.addUser(user, function(){
    alert("saved user.");
  });
});

var cancelBtn = $("<button>cancel</button>");
buttonDiv.append(cancelBtn);
$(cancelBtn).on("click", function() {
  modal.remove();
  buttonDiv.remove();
  div.remove();

});

var userList = $("<div>");
div.append(userList);
userList.css({
    "background-color":"white",
    "bottom":"0"
});

var allUsers = store.getAllUsers(function(users){
  if(users) Object.keys(users).forEach(function(user){
    var userDiv = $("<div>");
    var picture = $("<img>");
    picture.css({
        "border-radius": "5px"
    });
    picture.attr("src", users[user].picture);
    userDiv.append(picture);
    var name = ("<div>"+users[user].id+"</div>");
    userDiv.append(name)
    userDiv.data("session", users[user].session);
    userList.append(userDiv);
    $(userDiv).css(userCss);
    $(userDiv).on("click", function() {
        localStorage.session = userDiv.data("session");
        window.location.reload();
    });
  });
});
