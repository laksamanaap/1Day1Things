

class HelloWorld {
    public static void main(String[] args) {
        
        for(int i = 0; i < 10; i++){
            for(int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
        
        // 1 (A)
        for(int i = 10; i >= 1; i--) {
            for(int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
        
        // 1 (B)
        for(int i = 0; i < 10; i++){
            
            for(int k = 10; k > i; k--) {
                System.out.print(" ");
            }
            
            for(int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            
            System.out.println("");
        }
            
            
        // 2
        char letter = 'a';  

        for (int i = 1; i <= 5; i++) {
        
            for (int j = 5; j > i; j--) {
                System.out.print(" ");
            }
        
            for (int k = 1; k <= (2 * i - 1); k++) {
                System.out.print(letter);
                letter++;  
            }
        
            System.out.println();
        }

    }
}
        
        

            
    }
}
