// TODO: create a class Rectangle with:
//   - two int fields: width and height
//   - a constructor Rectangle(int width, int height)
//   - int area()          returns width × height
//   - int perimeter()     returns 2 × (width + height)
//   - boolean isSquare()  returns true when width equals height

void main() {
    int n = Integer.parseInt(IO.readln().trim());
    for (int i = 0; i < n; i++) {
        String[] parts = IO.readln().trim().split(" ");
        int width = Integer.parseInt(parts[0]);
        int height = Integer.parseInt(parts[1]);
        // TODO: create a Rectangle and print: Area: <area>, Perimeter: <perimeter>, Square: <isSquare>
    }
}
