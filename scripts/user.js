var user = (function () {
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
    return {
      id: getUserId(),
      picture: getPicture(),
      session: getSession(),
      isGuest: getGuestStatus()
    };
  }
  return grabUser();
}());

window.user = user;
