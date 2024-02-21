import 'package:flutter/material.dart';
import 'package:flutter_application_1/utils/routes.dart';
import 'package:get/get_navigation/get_navigation.dart';

void main() {
  runApp(GetMaterialApp(
    initialRoute: "/login",
    getPages: MyRoutes.routes,
    debugShowCheckedModeBanner: false,
  ));
}
