package P10Experiment;

import java.util.Scanner;
import java.util.Arrays;

public class SwapSwap {
    public static void main(String[] args) {

        
        int nums[] = {
          14, 12, 15, 16, 17, 
          24, 27, 30, 32, 48
        };

        /*
         * E.g :
         * {14, 12, 15, 16, 17} => Left Side
         * {24, 27, 30, 32, 48} => Right Side
         */
        for (int i = 0; i < nums.length / 2; i++) {
            int j = nums[i]; 
            nums[i] = nums[nums.length - 1 - i]; 
            nums[nums.length - 1 - i] = j; 
        }

        System.out.println(Arrays.toString(nums)); // [48, 32, 30, 27, 24, 17, 16, 15, 12, 14]
         

    }
}
