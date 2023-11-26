package expensetracker.project.models;

import lombok.Data;

@Data
public class AddExpenseRequest {
    private String date;
    private float amount;
    private String category;
}
