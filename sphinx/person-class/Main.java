// TODO: create a class Person with:
//   - two fields: String name and int age
//   - a constructor Person(String name, int age)
//   - a method String introduce() that returns "Hi, I'm <name> and I'm <age> years old."

void main() {
    int n = Integer.parseInt(IO.readln());
    for (int i = 0; i < n; i++) {
        String[] parts = IO.readln().split(" ");
        String name = parts[0];
        int age = Integer.parseInt(parts[1]);
        // TODO: create a Person object and print what introduce() returns
    }
}