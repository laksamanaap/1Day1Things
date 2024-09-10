import java.util.Scanner;

public class plateNumber {

      private static final char[] Codes = {
                  'A', 'B', 'D', 'E', 'F', 'G', 'S', 'H', 'N', 'T'
      };

      private static final char[][] Cities = {
                  { 'B', 'A', 'N', 'T', 'E', 'N' }, // Banten
                  { 'J', 'A', 'K', 'A', 'R', 'T', 'A' }, // Jakarta
                  { 'B', 'A', 'N', 'D', 'U', 'N', 'G' }, // Bandung
                  { 'C', 'I', 'R', 'E', 'B', 'O', 'N' }, // Cirebon
                  { 'B', 'O', 'G', 'O', 'R' }, // Bogor
                  { 'P', 'E', 'K', 'A', 'L', 'O', 'N', 'G', 'A', 'N' }, // Pekalongan
                  { 'S', 'E', 'M', 'A', 'R', 'A', 'N', 'G' }, // Semarang
                  { 'S', 'U', 'R', 'A', 'B', 'A', 'Y', 'A' }, // Surabaya
                  { 'M', 'A', 'L', 'A', 'N', 'G' }, // Malang
                  { 'T', 'E', 'G', 'A', 'L' } // Tegal
      };

      public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Enter plate number code: ");
            char plateCode = scanner.nextLine().toUpperCase().charAt(0);

            String city = findCity(plateCode);
            if (city != null) {
                  System.out.println("The city for plate number code " + plateCode + " is " + city);
            } else {
                  System.out.println("Plate number code " + plateCode + " is for [Unknown]");
            }
      }

      private static String findCity(char plateCode) {

            for (int i = 0; i < Codes.length; i++) {
                  if (plateCode == Codes[i]) {
                        return new String(Cities[i]);
                  }
            }

            return null;
      }
}
