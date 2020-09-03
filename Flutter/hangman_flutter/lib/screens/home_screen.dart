import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
            child: Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        _headerText(),
        _gallowImg(),
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
      child: Text('Play',
          style: GoogleFonts.patrickHand(
              fontSize: 35.0, letterSpacing: 2.5, fontWeight: FontWeight.w100)),
    );
  }

  Widget _headerText() {
    return Container(
      child: Text("Hangman",
          textAlign: TextAlign.center,
          style: GoogleFonts.patrickHand(
              fontSize: 65, letterSpacing: 7, fontWeight: FontWeight.w600)),
      margin: EdgeInsets.fromLTRB(10, 25, 10, 25),
    );
  }

  Widget _gallowImg() {
    return Container(
      child: Image.asset(
        'images/gallow.png',
      ),
    );
  }
}
