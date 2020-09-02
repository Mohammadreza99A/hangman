import 'package:flutter/material.dart';
import 'package:hangman_flutter/game_screen.dart';
import 'package:hangman_flutter/home_screen.dart';

void main() => runApp(MaterialApp(
      title: 'Hangman Routes',
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/game': (context) => GameScreen()
      },
      theme: ThemeData(
        brightness: Brightness.dark,
      ),
    ));
