public class AbbreviateTwoWords {
  public static String abbrevName(String name) {
        String[] parts = name.split(" ");
        String initials = parts[0].substring(0, 1).toUpperCase() + "." + parts[1].substring(0, 1).toUpperCase();
        return initials;  
  }
}

abbrevName("Laksamana Arya Putra"); // => L.A
