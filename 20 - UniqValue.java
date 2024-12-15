public class Kata {
    public static double findUniq(double arr[]) {

        // If first two elements are different, compare them with the third 
        if (arr[0] != arr[1]) {
            return (arr[0] == arr[2]) ? arr[1] : arr[0];
        }
        
        // If first two are same, iterate to find the unique number
        for (double num : arr) {
            if (num != arr[0]) {
                return num;
            }
        }
        
        throw new IllegalArgumentException("No unique number found");
    }
}

Kata.findUniq(new double[]{ 1, 1, 1, 2, 1, 1 }); // => 2
Kata.findUniq(new double[]{ 0, 0, 0.55, 0, 0 }); // => 0.55
