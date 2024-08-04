import 'dart:async';

void main() {
  final lyrics = [
    'Mengapa ku tancap gas dan melaju?~',
    'Padahal lampu kuning tlah peringatkan ku?~',
    'Bahaya didepanmu, hati hati kecewa kan menunggu~',
    'Lagu lama yang engkau tauu~'
  ];

  final durations = [
    Duration(seconds: 3),
    Duration(seconds: 4),
    Duration(seconds: 3),
    Duration(seconds: 4)
  ];

  sing(lyrics, durations);
}

void sing(List<String> lyrics, List<Duration> durations) async {
  for (var i = 0; i < lyrics.length; i++) {
    print(lyrics[i]);
    await Future.delayed(durations[i]);
  }
}
