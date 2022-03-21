import "dart:math";
import 'package:flutter/material.dart';
import 'package:hangman_flutter/components/keyboard.dart';
import 'package:hangman_flutter/components/letter_input.dart';
import 'package:hangman_flutter/utils/words.dart';
import 'package:google_fonts/google_fonts.dart';

class GameScreen extends StatefulWidget {
  GameScreen();

  @override
  GameScreenState createState() => GameScreenState();
}

class GameScreenState extends State<GameScreen> {
  late String selectedWord;
  late List<String> correctLetters;
  late List<String> chosenWords;
  late int hangmanStage;

  @override
  void initState() {
    super.initState();
    selectedWord =
        hangman_words[Random().nextInt(hangman_words.length)].toLowerCase();
    correctLetters = [];
    chosenWords = [];
    hangmanStage = 0;
    print(selectedWord);
  }

  void resetGame() {
    setState(() {
      selectedWord =
          hangman_words[Random().nextInt(hangman_words.length)].toLowerCase();
      correctLetters = [];
      chosenWords = [];
      hangmanStage = 0;
    });
  }

  void wordKeyPressed(String letter) {
    print(selectedWord);
    if (selectedWord.contains(letter)) {
      setState(() {
        correctLetters.add(letter);
      });
    } else {
      setState(() {
        hangmanStage += 1;
      });
    }
    // Disabling the button
    setState(() {
      chosenWords.add(letter);
    });
  }

  Widget _letterInput() {
    List<String> letters = selectedWord.split('');

    return Expanded(
        flex: 0,
        child: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              // for (var letter in letters) LetterInput(letter: letter)
              for (var letter in letters)
                if (correctLetters.contains(letter))
                  LetterInput(letter: letter)
                else
                  LetterInput(letter: ' ')
            ],
          ),
        ));
  }

  Widget _buildHangmanImage() {
    return Expanded(
        flex: 2,
        child: Container(
          child: Image.asset(
            'images/$hangmanStage.png',
            gaplessPlayback: true,
          ),
          margin: EdgeInsets.fromLTRB(0, 10, 0, 10),
          padding: EdgeInsets.all(30),
        ));
  }

  /// @return A table with alphabet words
  Widget _buildKeyboard() {
    return Expanded(
        flex: 2,
        child: Keyboard(
          wordKeyPressed: wordKeyPressed,
          chosenWords: chosenWords,
        ));
  }

  Widget _buildChangeWordBtn() {
    return Expanded(
        flex: 0,
        child: Container(
            margin: EdgeInsets.fromLTRB(0, 0, 0, 10),
            child: RaisedButton(
              onPressed: () => resetGame(),
              padding: EdgeInsets.all(10),
              color: Colors.cyan[800],
              shape: RoundedRectangleBorder(
                  borderRadius: new BorderRadius.circular(30)),
              child: Text('Change The Word',
                  style: GoogleFonts.patrickHand(
                      fontSize: 27.0,
                      letterSpacing: 1.5,
                      fontWeight: FontWeight.w300)),
            )));
  }

  /// This function checks to see if the user has won
  String checkWin() {
    String status = 'win';

    selectedWord.split('').forEach((letter) {
      if (!correctLetters.contains(letter)) {
        status = '';
      }
    });

    if (hangmanStage == 6) {
      status = 'lost';
    }

    return status;
  }

  @override
  Widget build(BuildContext context) {
    String winStatus = checkWin();

    if (winStatus == 'lost') {
      String hiddenWord = selectedWord.toUpperCase();
      return Scaffold(
          body: Container(
        padding: EdgeInsets.all(25),
        child: AlertDialog(
          title: Text('Game Over',
              textAlign: TextAlign.center,
              style: GoogleFonts.graduate(
                  fontSize: 30.0,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 2.0)),
          content: SingleChildScrollView(
              child: ListBody(
            children: <Widget>[
              Text('You have lost',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.cairo(fontSize: 23.0)),
              Text('Correct word was: ',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.cairo(fontSize: 23.0)),
              Text('$hiddenWord',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.oswald(
                      fontSize: 25.0,
                      letterSpacing: 2.0,
                      fontWeight: FontWeight.w500)),
              Container(
                  margin: EdgeInsets.fromLTRB(0, 15, 0, 0),
                  child: RaisedButton(
                      padding: EdgeInsets.all(15),
                      color: Colors.teal,
                      shape: RoundedRectangleBorder(
                          borderRadius: new BorderRadius.circular(30)),
                      onPressed: () => resetGame(),
                      child: Text(
                        'Play Again',
                        style: GoogleFonts.roboto(fontSize: 20.0),
                      )))
            ],
          )),
        ),
      ));
    }
    if (winStatus == 'win') {
      return Scaffold(
        body: AlertDialog(
          title: Text('Congrats',
              textAlign: TextAlign.center,
              style: GoogleFonts.graduate(
                  fontSize: 25.0,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 1.6)),
          content: SingleChildScrollView(
              child: ListBody(
            children: <Widget>[
              Text('You have correctly guessed the hidden word',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.cairo(fontSize: 23.0)),
              Container(
                  margin: EdgeInsets.fromLTRB(0, 15, 0, 0),
                  child: RaisedButton(
                      padding: EdgeInsets.all(15),
                      color: Colors.teal,
                      shape: RoundedRectangleBorder(
                          borderRadius: new BorderRadius.circular(30)),
                      onPressed: () => resetGame(),
                      child: Text(
                        'Play Again',
                        style: GoogleFonts.roboto(fontSize: 20.0),
                      )))
            ],
          )),
        ),
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: Text('Go Back'),
      ),
      body: SafeArea(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          _buildHangmanImage(),
          _letterInput(),
          _buildKeyboard(),
          _buildChangeWordBtn(),
        ],
      )),
    );
  }
}
