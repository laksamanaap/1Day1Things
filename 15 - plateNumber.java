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
                  { 'T', 'E', 'G', 'A', 'L' }, // Tegal
      };

      public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Enter plat code : ");

            char platCode = scanner.nextLine().toUpperCase().charAt(0);
            String city = findCity(platCode);

            if (city != null) {
                  System.out.print("The plat code of " + platCode + " is : " + city);
            } else {
                  System.out.println("Unknown");
            }

      }

      private static String findCity(char platCode) {
            for (int i = 0; i < Codes.length; i++) {
                  if (platCode == Codes[i]) {
                        return new String(Cities[i]);
                  }
            }
            return null;
      }

}
