import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Hangman'),
          centerTitle: true,
        ),
        body: Center(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            _headerText(),
            _playButton(context),
          ],
        )));
  }

  Widget _playButton(context) {
    return RaisedButton(
      onPressed: () {
        Navigator.pushNamed(context, '/game');
      },
      padding: EdgeInsets.all(15),
      color: Colors.teal,
      shape:
          RoundedRectangleBorder(borderRadius: new BorderRadius.circular(30)),
      child: Text(
        'Press to Play',
        style: GoogleFonts.inconsolata(fontSize: 25.0),
      ),
    );
  }

  Widget _headerText() {
    return Container(
      child: Text("Find the hidden word before it's too late!",
          textAlign: TextAlign.center,
          style: GoogleFonts.ubuntu(fontSize: 25.0)),
      color: Colors.teal,
      padding: EdgeInsets.all(25),
    );
  }
}
