var user = (function () {
    var currentUser;

    function getPicture() {
        var picture = $(".user-area-avatar")[0].src;
        return picture;
    }

    function getSession() {
        var session = localStorage.session;
        return session;
    }

    function getUserId() {
        var userId = $(".user-area-nick").html();
        return userId;
    }

    function getGuestStatus() {
        return $("body").hasClass("role-guest");
    }

    function grabUser() {
        var u = {
        id: getUserId(),
        picture: getPicture(),
        session: getSession(),
        isGuest: getGuestStatus()
        };
        store.addUser(u, false);
        return u;
    }

    return grabUser();
}());

window.user = user;
