import 'package:flutter_application_1/landingpage.dart';
import 'package:flutter_application_1/login.dart';
import 'package:flutter_application_1/registration.dart';
import 'package:get/get_navigation/get_navigation.dart';

class MyRoutes {
  static var routes = [
    GetPage(name: "/login", page: () => Login()),
    GetPage(name: "/registration", page: () => Registration()),
    GetPage(name: "/landingpage", page: () => const Landingpage()),
  ];
}
