import java.util.ArrayList;
import java.util.List;

public class LinearSearchComplex {
    
    public static SearchResult linearSearch(int[] arr, int target) {
        List<Integer> indices = new ArrayList<>();
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                indices.add(i); 
            }
        }
        
        if (!indices.isEmpty()) {
            return new SearchResult(true, indices.size(), indices);
        } else {
            return new SearchResult(false, 0, null);
        }
    }

    public static void main(String[] args) {
        int[] data = {10, 25, 30, 45, 30, 50, 30, 25};
        int target = 30;

        SearchResult result = linearSearch(data, target);

        if (result.found) {
            System.out.println("Elemen " + target + " ditemukan sebanyak " + result.count + " kali pada indeks: " + result.indices);
        } else {
            System.out.println("Elemen " + target + " tidak ditemukan dalam array.");
        }
    }
}

class SearchResult {
    boolean found;
    int count;
    List<Integer> indices;

    public SearchResult(boolean found, int count, List<Integer> indices) {
        this.found = found;
        this.count = count;
        this.indices = indices;
    }
}
