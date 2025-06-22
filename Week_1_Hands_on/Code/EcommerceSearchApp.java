//Data Structures and Algorithms
//Exercise 1: E-commerce Platform Search Function

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Product {
    String id;
    String name;

    public Product(String id, String name) {
        this.id = id;
        this.name = name;
    }
}

class ProductSearch {
    private List<Product> productList;

    public ProductSearch() {
        productList = new ArrayList<>();
    }

    public void addProduct(Product product) {
        productList.add(product);
    }

    public List<Product> search(String keyword) {
        List<Product> result = new ArrayList<>();
        keyword = keyword.toLowerCase();

        for (Product p : productList) {
            if (p.name.toLowerCase().contains(keyword)) {
                result.add(p);
            }
        }

        return result;
    }
}

public class EcommerceSearchApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ProductSearch searchEngine = new ProductSearch();

        searchEngine.addProduct(new Product("P001", "Apple iPhone 15"));
        searchEngine.addProduct(new Product("P002", "Samsung Galaxy S24"));
        searchEngine.addProduct(new Product("P003", "OnePlus Nord CE 4"));
        searchEngine.addProduct(new Product("P004", "Apple MacBook Air"));
        searchEngine.addProduct(new Product("P005", "Dell XPS 15"));

        System.out.print("Search for a product: ");
        String input = sc.nextLine();

        List<Product> results = searchEngine.search(input);

        if (results.isEmpty()) {
            System.out.println("No matching products found.");
        } else {
            System.out.println("Search Results:");
            for (Product p : results) {
                System.out.println(p.id + " - " + p.name);
            }
        }

        sc.close();
    }
}

