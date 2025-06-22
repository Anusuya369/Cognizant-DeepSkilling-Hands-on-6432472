//Design Patterns and Principles
//Exercise 2: Implementation of Factory Method Pattern

interface Notification {
    void notifyUser();
}

class SMSNotification implements Notification {
    public void notifyUser() {
        System.out.println("Sending an SMS Notification");
    }
}

class EmailNotification implements Notification {
    public void notifyUser() {
        System.out.println("Sending an Email Notification");
    }
}

class PushNotification implements Notification {
    public void notifyUser() {
        System.out.println("Sending a Push Notification");
    }
}

class NotificationFactory {
    public Notification createNotification(String type) {
        if (type == null || type.isEmpty())
            return null;

        if (type.equalsIgnoreCase("SMS"))
            return new SMSNotification();
        else if (type.equalsIgnoreCase("EMAIL"))
            return new EmailNotification();
        else if (type.equalsIgnoreCase("PUSH"))
            return new PushNotification();

        return null;
    }
}

public class FactoryPattern {
    public static void main(String[] args) {
        NotificationFactory factory = new NotificationFactory();

        Notification n1 = factory.createNotification("SMS");
        n1.notifyUser();  

        Notification n2 = factory.createNotification("EMAIL");
        n2.notifyUser();  

        Notification n3 = factory.createNotification("PUSH");
        n3.notifyUser();  
    }
}


