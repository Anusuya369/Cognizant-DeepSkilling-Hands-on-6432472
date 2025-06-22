//Data Structures and Algorithms
//Exercise 2: Financial Forecasting

import java.util.List;
import java.util.ArrayList;

public class FinancialForecast {

    public static double movingAverage(List<Double> data, int windowSize) {
        if (data.size() < windowSize) {
            throw new IllegalArgumentException("Not enough data for the moving average");
        }

        double sum = 0;
        for (int i = data.size() - windowSize; i < data.size(); i++) {
            sum += data.get(i);
        }
        return sum / windowSize;
    }

    public static void main(String[] args) {
        List<Double> revenueData = new ArrayList<>();

        // 6 months of revenue in lakhs (Rs.)
        revenueData.add(12.5);
        revenueData.add(13.8);
        revenueData.add(15.0);
        revenueData.add(14.2);
        revenueData.add(16.0);
        revenueData.add(17.3);

        System.out.println("Past Revenue in Lakhs: " + revenueData);

        double forecast = movingAverage(revenueData, 3);

        System.out.printf("Forecasted Revenue for Next Month: Rs. %.2f Lakhs\n", forecast);
    }
}

