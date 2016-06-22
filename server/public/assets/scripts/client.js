var app=angular.module("whiteApp",["ngRoute","ngMaterial","ngRoute"]);app.config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{remplateUrl:"views/homeView.html",controller:"HomeController",controllerAs:"home"}).when("/eastsideView",{templateUrl:"views/eastsideView.html",controller:"EastsideController",controllerAs:"eastside"}).when("/sewardView",{templateUrl:"views/sewardView.html",controller:"SewardController",controllerAs:"seward"}).when("/wedgeView",{templateUrl:"views/wedgeView.html",controller:"WedgeController",controllerAs:"wedge"}).when("/login",{templateUrl:"views/login.html",controller:"LoginController",controllerAs:"login"}).when("/registerView",{templateUrl:"views/registerView.html",controller:"RegisterController",controllerAs:"register"}).when("/userCupboard",{templateUrl:"views/userCupboard.html",controller:"UserController",controllerAs:"user"}),b.html5Mode(!0)}]),app.controller("LoginController",function(){this.message="log in"}),app.controller("HomeController",function(){this.message="select your coop"}),app.controller("SewardController",["$http",function(a){var b=this;b.name="Seward Friendship Co-op",b.id=2,this.coopArray={},a.get("/coops/"+b.id).then(function(a){b.coopArray=a.data,console.log(a)}),b.addToUserCupboard=function(c){console.log("item added to user cupboard"),c.coop_name=b.name,a.post("/userPage",c).then(function(a){console.log("add to user",a)})}}]),app.controller("EastsideController",["$http",function(a){var b=this;b.name="Eastside Co-op",b.id=1,this.coopArray={},a.get("/coops/"+b.id).then(function(a){b.coopArray=a.data,console.log(a)}),b.addToUserCupboard=function(c){console.log("item added to user cupboard"),c.coop_name=b.name,a.post("/userPage",c).then(function(a){console.log("add to user",a)})}}]),app.controller("WedgeController",["$http",function(a){var b=this;b.name="Wedge Co-op",b.id=3,this.coopArray={},a.get("/coops/"+b.id).then(function(a){b.coopArray=a.data,console.log(a)}),b.addToUserCupboard=function(c){console.log("item added to user cupboard"),c.coop_name=b.name,a.post("/userPage",c).then(function(a){console.log("add to user",a)})}}]),app.controller("UserController",["UserService","$http",function(a,b){var c=this;c.cupboardContentsArray={},c.data=a.user,a.getUserData(),c.message="Here is your cupboard full of white powders. Consider labeling them!",c.deleteItem=function(b){console.log(b),a.deleteItemFromCupboard(b.product_id_plu)}}]),app.factory("UserService",["$http",function(a){var b={},c=function(b){console.log("hit service"),a["delete"]("/userPage/"+b).then(function(a){console.log(a),d()})},d=function(){a.get("/userPage").then(function(a){console.log(a),b.cupboardContentsArray=a.data,console.log("user is",b.cupboardContentsArray)})};return{user:b,getUserData:d,deleteItemFromCupboard:c}}]);