import java.util.ArrayList;
import java.util.List;

public class EmployeeMain {
    public static void main(String[] args) {
        // Creating Employee objects
        Employee emp1 = new Employee(101, "Alice", 50000);
        Employee emp2 = new Employee(102, "Bob", 60000);
        Employee emp3 = new Employee(103, "Charlie", 55000);

        // Storing them in a list
        List<Employee> employeeList = new ArrayList<>();
        employeeList.add(emp1);
        employeeList.add(emp2);
        employeeList.add(emp3);

        // Display details of all employees
        System.out.println("Employee Details:");
        for (Employee emp : employeeList) {
            emp.displayDetails();
        }
    }
}
