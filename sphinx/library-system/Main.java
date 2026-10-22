
import java.util.*;

class Book {
    String id;
    String title;
    String borrower;

    public Book(String id, String title) {
        this.id = id;
        this.title = title;
        this.borrower = null;
    }
}

class Library {
    private TreeMap<String, Book> books = new TreeMap<>();
    private Set<String> members = new HashSet<>();

    public String addBook(String id, String title) {
        if (books.containsKey(id)) {
            return "Book " + id + " already exists";
        }

        books.put(id, new Book(id, title));
        return "Added book " + id + ": " + title;
    }

    public String joinMember(String name) {
        if (members.contains(name)) {
            return "Member " + name + " already exists";
        }

        members.add(name);
        return "Member " + name + " joined";
    }

    public String borrowBook(String id, String name) {
        if (!books.containsKey(id)) {
            return "No book " + id;
        }

        if (!members.contains(name)) {
            return "No member " + name;
        }

        Book book = books.get(id);

        if (book.borrower != null) {
            return book.title + " is already borrowed by "
                    + book.borrower;
        }

        int count = 0;

        for (Book b : books.values()) {
            if (name.equals(b.borrower)) {
                count++;
            }
        }

        if (count >= 2) {
            return name + " has reached the limit of 2 books";
        }

        book.borrower = name;
        return name + " borrowed " + book.title;
    }

    public String returnBook(String id) {
        if (!books.containsKey(id)) {
            return "No book " + id;
        }

        Book book = books.get(id);

        if (book.borrower == null) {
            return book.title + " is not borrowed";
        }

        book.borrower = null;
        return book.title + " returned";
    }

    public List<String> listBooks() {
        List<String> result = new ArrayList<>();

        for (Book book : books.values()) {
            if (book.borrower == null) {
                result.add(book.id + " " + book.title
                        + " - available");
            } else {
                result.add(book.id + " " + book.title
                        + " - borrowed by " + book.borrower);
            }
        }

        if (result.isEmpty()) {
            result.add("No books");
        }

        return result;
    }

    public int countBorrowed() {
        int count = 0;

        for (Book book : books.values()) {
            if (book.borrower != null) {
                count++;
            }
        }

        return count;
    }

    public int countBooks() {
        return books.size();
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Library library = new Library();

        while (scanner.hasNextLine()) {
            String line = scanner.nextLine().trim();

            if (line.isEmpty()) {
                continue;
            }

            String[] parts = line.split("\\s+", 3);
            String command = parts[0];

            switch (command) {
                case "add":
                    if (parts.length < 3) {
                        System.out.println("Unknown command");
                    } else {
                        System.out.println(
                                library.addBook(parts[1], parts[2]));
                    }
                    break;

                case "join":
                    if (parts.length < 2) {
                        System.out.println("Unknown command");
                    } else {
                        System.out.println(
                                library.joinMember(parts[1]));
                    }
                    break;

                case "borrow":
                    if (parts.length < 3) {
                        System.out.println("Unknown command");
                    } else {
                        System.out.println(
                                library.borrowBook(parts[1], parts[2]));
                    }
                    break;

                case "return":
                    if (parts.length < 2) {
                        System.out.println("Unknown command");
                    } else {
                        System.out.println(
                                library.returnBook(parts[1]));
                    }
                    break;

                case "list":
                    for (String result : library.listBooks()) {
                        System.out.println(result);
                    }
                    break;

                case "exit":
                    System.out.println("Books: " + library.countBooks()
                            + ", borrowed: " + library.countBorrowed());
                    System.out.println("Goodbye!");
                    return;

                default:
                    System.out.println("Unknown command");
                    break;
            }
        }

        scanner.close();
    }
}
